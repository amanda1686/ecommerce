import { useState } from "react";

const AboutUsFormulario = () => {
  const [email, setEmail] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  // const [submittedEmails, setSubmittedEmails] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedEmails((prevEmails) => [...prevEmails, email]);
    setIsFormSubmitted(true);
    openModal();
  };

  const openModal = () => {
    setIsModalOpen(true);

    setTimeout(() => {
      closeModal();
    }, 5000);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <article className="mt-8">
      {isFormSubmitted && isModalOpen ? (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-blue-dark p-4 rounded-md shadow-md text-center">
            <p className="text-white text-xl mb-4">
              ¡Correo enviado! Pronto nos pondremos en contacto contigo.
            </p>
            <button
              onClick={closeModal}
              className="bg-gradient-to-r from-[#d88530] via-[#f2cb79] to-[#f2df80] text-[#032940] font-bold py-2 px-4 rounded-md hover:from-[#f2df80] hover:via-[#f2cb79] hover:to-[#d88530] transition ease-in-out duration-150"
            >
              Cerrar
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <label htmlFor="email" className="text-brown text-xl mb-2">
            Si deseas más información, envíanos tu correo:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Introduce tu correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-[#d88530] via-[#f2cb79] to-[#f2df80] text-[#032940] font-bold py-2 px-4 rounded-md hover:from-[#f2df80] hover:via-[#f2cb79] hover:to-[#d88530] transition ease-in-out duration-150 mx-auto"
          >
            Enviar
          </button>
        </form>
      )}
    </article>
  );
};

export default AboutUsFormulario;
