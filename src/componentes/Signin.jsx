import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import { useNavigate } from 'react-router-dom'; 



function Signin() {
  const [showModal, setShowModal] = useState(false);
  const captcha = useRef(null);
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    Nombre: '',
    Correo: '',
    Contraseña: '',
  });
  

  const [errors, setErrors] = useState({});
  const [recaptchaValid, setRecaptchaValid] = useState(false);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validación del nombre
    if (!formData.Nombre.trim()) {
      newErrors.Nombre = 'El nombre es requerido';
    }

    // Validación del correo
    if (!formData.Correo.trim()) {
      newErrors.Correo = 'El correo es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.Correo)) {
      newErrors.Correo = 'El correo no es válido';
    }

    // Validación de la contraseña
    if (!formData.Contraseña.trim()) {
      newErrors.Contraseña = 'La contraseña es requerida';
    } else if (formData.Contraseña.trim().length < 6) {
      newErrors.Contraseña = 'La contraseña debe tener al menos 6 caracteres';
    } else if (!/\d/.test(formData.Contraseña.trim())) {
      newErrors.Contraseña = 'La contraseña debe contener al menos un número';
    }
    

    if (Object.keys(newErrors).length === 0) {
      // Si no hay errores, el formulario es válido
      console.log('Formulario válido, enviar datos:', formData);
      history.push('/ruta-de-destino'); // Reemplaza '/ruta-de-destino' con la ruta a la que deseas redirigir
    }


    // Validar reCAPTCHA
    if (!recaptchaValid) {
      newErrors.recaptcha = 'Por favor, completa el reCAPTCHA';
    }
    

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Si no hay errores, el formulario es válido
      console.log('Formulario válido, enviar datos:', formData);
    }
    
  };

  const redirectToFacebook = () => {
    window.location.href = 'https://www.facebook.com/';
  };

  const redirectToGoogle = () => {
    window.location.href = 'https://www.google.es/';
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 mt-20">
        <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center">
              Crear cuenta
            </p>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Nombre
              </label>
              <input
                placeholder="Nombre"
                className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 ${errors.Nombre ? 'border-red-500' : ''
                  }`}
                id="username"
                type="text"
                name="Nombre"
                value={formData.Nombre}
                onChange={handleChange}
              />
              {errors.Nombre && (
                <p className="text-red-500">{errors.Nombre}</p>
              )}
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Correo
              </label>
              <input
                className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 ${errors.Correo ? 'border-red-500' : ''
                  }`}
                placeholder="correo@example.com"
                id="email"
                type="email"
                name="Correo"
                value={formData.Correo}
                onChange={handleChange}
              />
              {errors.Correo && (
                <p className="text-red-500">{errors.Correo}</p>
              )}
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Contraseña
              </label>
              <input
                className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 ${errors.Contraseña ? 'border-red-500' : ''
                  }`}
                placeholder="••••••••"
                id="confirmPassword"
                type="password"
                name="Contraseña"
                value={formData.Contraseña}
                onChange={handleChange}
              />
              {errors.Contraseña && (
                <p className="text-red-500">{errors.Contraseña}</p>
              )}
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-gray-800"
                  type="checkbox"
                  aria-describedby="terms"
                  id="terms"
                />
              </div>
              <div className="flex items-center justify-center  ml-3 text-sm">
                <label className="font-light text-gray-500 text-gray-300">
                  Acepto los{' '}
                  <button
                    type="button"
                    onClick={toggleModal}
                    className="font-medium text-primary-600 hover:underline text-primary-500 focus:outline-none"
                  >
                    Términos y condiciones
                  </button>
                </label>
              </div>
            </div>

            {showModal && <TermsModal closeModal={toggleModal} />}


            <div className='recaptcha' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <ReCAPTCHA
                ref={captcha}
                sitekey='6LeqOlkpAAAAAAvbw7BUE4PicYwf-zj0VIq05a7P'
                onChange={() => setRecaptchaValid(true)} // Actualiza el estado cuando el reCAPTCHA es válido
              />
              {errors.recaptcha && (
                <p className='text-red-500'>{errors.recaptcha}</p>
              )}
            </div>
            <Link to="/Date">
            <button
          className="w-full bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-blue-800 text-white"
            type="submit"
            >
            Crear cuenta
          </button>
            </Link>

            <div className="flex mt-7 items-center text-center">
              <hr className="border-gray-300 border-1 w-full rounded-md" />
              <label className="block font-medium text-sm text-gray-600 w-full">
                Registrate con
              </label>
              <hr className="border-gray-300 border-1 w-full rounded-md" />
            </div>
            <div className="flex mt-7 justify-center w-full">
              <button
                type="button"
                className="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                onClick={redirectToFacebook}
              >
                Facebook
              </button>

              <button
                type="button"
                className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                onClick={redirectToGoogle}
              >
                Google
              </button>
            </div>

            <div className="mt-7">
              <div className="flex justify-center items-center">
                <label className="mr-2">¿Ya tienes una cuenta?</label>
                <Link
                  to="/SignUp"
                  className="text-blue-500 transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
                >
                  <p>
                    <span>Iniciar sesión</span>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

function TermsModal({ closeModal }) {
  return (
    <div className="fixed inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white p-6">
            {/* Contenido del modal */}
            <h2 className="text-lg font-bold mb-4">Términos y Condiciones</h2>
            <p>Fecha de última actualización: [Fecha]

              Bienvenido a GoldenHands, el lugar donde nos importa el bienestar y el cuidado de las personas mayores. Agradecemos que confíes en nosotros para brindar el mejor cuidado posible a tus seres queridos. Al acceder y utilizar nuestros servicios, aceptas cumplir con los siguientes términos y condiciones:

              Aceptación de Términos:
              Al utilizar los servicios de GoldenHands, aceptas estos términos y condiciones en su totalidad. Si no estás de acuerdo con alguno de los términos, te recomendamos que no utilices nuestros servicios.

              Cuidado de Personas Mayores:
              GoldenHands se compromete a proporcionar servicios de alta calidad para el cuidado de personas mayores. Nuestro enfoque está en la atención compasiva y profesional para garantizar la comodidad y seguridad de quienes confían en nosotros.

              Información del Usuario:
              Para utilizar algunos de nuestros servicios, es posible que se te solicite proporcionar información personal. GoldenHands se compromete a proteger tu privacidad y a utilizar la información de acuerdo con nuestra Política de Privacidad.

              Responsabilidades del Usuario:
              Al utilizar nuestros servicios, aceptas ser responsable de cualquier información proporcionada y garantizas que la misma sea precisa y completa. Además, te comprometes a mantener la confidencialidad de cualquier información de acceso proporcionada.

              Derechos de Propiedad Intelectual:
              Todo el contenido y los derechos de propiedad intelectual en el sitio web y la aplicación de GoldenHands son propiedad exclusiva de GoldenHands. No tienes permiso para utilizar, reproducir o distribuir el contenido sin autorización.

              Modificaciones de Términos:
              GoldenHands se reserva el derecho de modificar estos términos y condiciones en cualquier momento. Las modificaciones entrarán en vigencia inmediatamente después de su publicación en nuestro sitio web. Se te recomienda revisar periódicamente los términos y condiciones para mantenerte informado.

              Terminación de Servicios:
              GoldenHands se reserva el derecho de suspender o cancelar tus servicios en cualquier momento, si consideramos que has violado estos términos y condiciones o si existe una razón justificada.

              Limitación de Responsabilidad:
              GoldenHands no será responsable por daños directos, indirectos, incidentales, especiales o consecuentes resultantes del uso o la imposibilidad de usar nuestros servicios.

              Jurisdicción y Ley Aplicable:
              Estos términos y condiciones se regirán e interpretarán de acuerdo con las leyes del lugar donde esté ubicada la sede principal de GoldenHands.

              Al utilizar los servicios de GoldenHands, reconoces haber leído y comprendido estos términos y condiciones. Apreciamos tu confianza y estamos comprometidos a brindar el mejor cuidado posible a nuestros adultos mayores. Si tienes alguna pregunta, no dudes en ponerte en contacto con nosotros.

              Gracias por elegir GoldenHands.

              [Nombre de la Empresa]
              GoldenHands</p>

            <div className="mt-4">
              <button
                onClick={closeModal}
                type="button"
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Signin;