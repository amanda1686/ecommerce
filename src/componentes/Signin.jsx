import React from 'react'
import {Link} from 'react-router-dom'
import SignUp from '../componentes/SignUp';

function SignUpForm() {
  const redirectToFacebook = () => {
    window.location.href = 'https://www.facebook.com/';
  };
  const redirectToGoogle = () => {
    window.location.href = 'https://www.google.es/';
  };
    return (
      <form>
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  id="username"
                  type="text"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Correo
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  placeholder="correo@example.com"
                  id="email"
                  type="email"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Contraseña
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  placeholder="••••••••"
                  id="confirmPassword"
                  type="password"
                />
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
                
                <div class="flex mt-7 items-center text-center">
                        <hr class="border-gray-300 border-1 w-full rounded-md"/>
                        <label class="block font-medium text-sm text-gray-600 w-full">
                            Registrate con
                        </label>
                        <hr class="border-gray-300 border-1 w-full rounded-md"/>
                    </div>
              <div class="flex mt-7 justify-center w-full">
                        <button
                        type='button' 
                        class="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"  
                        onClick={redirectToFacebook}>
                            
                            Facebook 
                        </button> 
        
                        <button 
                        type='button'
                        class="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                        onClick={redirectToGoogle}>
                            
                            Google
                        </button>
                    </div>

                    <div class="mt-7">
                        <div class="flex justify-center items-center">
                            <label class="mr-2" >¿Ya tienes una cuenta?</label>
                            <a href="/Home" class=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                <p><span><Link to="./SignUp">Iniciar sesion </Link></span></p>
                            </a>
                        </div>
                    </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
  
  export default SignUpForm;