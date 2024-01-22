import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Signin() {
  const [formData, setFormData] = useState({
    Nombre: '',
    Correo: '',
    Contraseña: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.Correo)
    ) {
      newErrors.Correo = 'El correo no es válido';
    }

    // Validación de la contraseña
    if (!formData.Contraseña.trim()) {
      newErrors.Contraseña = 'La contraseña es requerida';
    } else if (formData.Contraseña.trim().length < 6) {
      newErrors.Contraseña =
        'La contraseña debe tener al menos 6 caracteres';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Aquí puedes enviar el formulario o realizar otras acciones
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
            <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Crear cuenta
            </p>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Nombre
              </label>
              <input
                placeholder="Nombre"
                className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 ${
                  errors.Nombre ? 'border-red-500' : ''
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
                className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 ${
                  errors.Correo ? 'border-red-500' : ''
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
                className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 ${
                  errors.Contraseña ? 'border-red-500' : ''
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
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline text-primary-500"
                  >
                    Términos y condiciones
                  </a>
                </label>
              </div>
            </div>

            <button
              className="w-full bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-blue-800 text-white"
              type="submit"
            >
              Crear cuenta
            </button>

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
                  to="/Login2"
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

export default Signin;