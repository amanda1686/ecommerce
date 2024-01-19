import React, { useState } from 'react';



const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
    });

    const [submitMessage, setSubmitMessage] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        // Validar el campo de correo electrónico
        if (e.target.name === 'email') {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const isValidEmail = emailPattern.test(e.target.value);
            setEmailError(isValidEmail ? '' : 'Ingrese un correo electrónico válido');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Verificar si hay errores antes de enviar el formulario
        if (emailError) {
            setSubmitMessage('Por favor, corrija los errores en el formulario antes de enviar.');
            return;
        }

        // Validar el mensaje para asegurarse de que no haya mayúsculas después de la primera letra ni en la última letra de cada palabra
        const messagePattern = /^(?:[a-záéíóúüñ]\S*\s*)+$/;
        const isValidMessage = messagePattern.test(formData.message.toLowerCase());

        if (!isValidMessage) {
            setSubmitMessage('El mensaje no cumple con los requisitos de formato.');
            return;
        }

        // Aquí puedes manejar el envío del formulario, por ejemplo, enviar los datos a un servidor o realizar otras acciones.
        console.log('Formulario enviado:', formData);
        setSubmitMessage('¡Gracias por contactarnos! En breve responderemos a tu correo.');

        // También puedes restablecer el estado del formulario después del envío si es necesario.
        setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            message: '',
        });
    };

    // Configuramos un temporizador para que el mensaje de agradecimiento se restablezca después de 3000 milisegundos (3 segundos).
    setTimeout(() => {
        setSubmitMessage('');
    }, 6000);

    const handleClearForm = () => {
        setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            message: '',
        });
        setSubmitMessage('');
    };


    return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen dark mt-0">
                <div className="w-full max-w-md bg-[#032940] rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold text-gray-200 mb-4">Contacto</h2>

                    <form onSubmit={handleSubmit} className="flex flex-wrap">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                            placeholder="Nombre"
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
                            placeholder="Email"
                        />
                        <input
                            type="number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                            placeholder="Teléfono"
                        />
                        <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
                            placeholder="Empresa"
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-auto md:mb-auto md:w-full md:h-auto md:min-h-[200px] md:max-h-[100px] md:flex-grow md:flex-shrink md:flex-auto focus:bg-gray-md:focus:outline-none:focus:ring-blue-md:focus:border-transparent transition ease-in-out duration-fastest"
                            placeholder="Tu mensaje"
                        ></textarea>

                        <button
                          type="submit"
                          className="bg-gradient-to-r from-[#d88530] via-[#f2cb79] to-[#f2df80] text-[#032940] font-bold py-2 px-4 rounded-md mt-4 hover:from-[#f2df80] hover:via-[#f2cb79] hover:to-[#d88530] transition ease-in-out duration-150 mr-3"
                        >
                            Enviar
                        </button>
                        <button
                            type="button"
                            onClick={handleClearForm}
                            className="bg-gradient-to-r from-[#d88530] via-[#f2cb79] to-[#f2df80] text-[#032940] font-bold py-2 px-4 rounded-md mt-4 hover:from-[#f2df80] hover:via-[#f2cb79] hover:to-[#d88530] transition ease-in-out duration-150"
                        >
                            Limpiar Formulario
                        </button>

                    </form>
                    {submitMessage && (
                        <div className="mt-4 text-green-500">
                            {submitMessage}
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default ContactForm;
