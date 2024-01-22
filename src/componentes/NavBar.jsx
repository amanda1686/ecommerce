<<<<<<< Updated upstream
import React, { Fragment, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import shoppingcart from '../../public/img/logo/shopping-cart.png';
import ghandslogo from '../../public/img/logo/ghandslogo.svg'
import loginicon from '../../public/img/logo/loginicon.png'
import xicon from '../../public/img/logo/xicon.png'

const navigation = [
  { name: 'Home', href: '/Home', current: true },
  { name: 'Product', href: '/Product', current: false },
  { name: 'Login', href: '/Login', current: false },
  { name: 'About us', href: '/Aboutus', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
=======
import React, { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import ghandslogo from "../assets/imagenes/logo/ghandslogo.svg";
import loginicon from "../assets/imagenes/logo/loginicon.png";
import Cart from "./Cart"; // Ajusta la ruta de importación según la estructura de tu proyecto
import shoppingcart from "../../public/img/logo/shopping-cart.png";

const navigation = [
  { name: "Home", href: "/Home", current: true },
  { name: "Product", href: "/Product", current: false },
  { name: "Login", href: "/Login", current: false },
  { name: "About us", href: "/Aboutus", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
>>>>>>> Stashed changes
}

export default function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Disclosure as="nav" className="color">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-24 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <a href="/Home">
                    <img
                      className="h-16 w-auto"
                      src={ghandslogo}
                      alt="Your Company"
                    />
                  </a>
                </div>
                <div className="hidden sm:ml-4 sm:block mt-4">
                  <div className="flex space-x-10 ms-80">
                    {navigation.map((item) => (
<<<<<<< Updated upstream
                      <Link 
=======
                      <Link
>>>>>>> Stashed changes
                        to={item.href}
                        key={item.name}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div>
<<<<<<< Updated upstream
                  <button onClick={() => setSidebarOpen(true)} className="focus:outline-none">
                    <img src={shoppingcart} alt=""  className='h-8 w-8 mr-4'/>
=======
                  <button>
                    <img src={shoppingcart} alt="" className="h-8 w-8 mr-4" />
>>>>>>> Stashed changes
                  </button>
                </div>
                <Cart /> {/* Integración del componente Cart */}
                <Menu as="div" className="relative ml-3">
                  {/* Resto del código de tu menú de usuario */}
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>

          {/* Barra lateral del carrito */}
          {isSidebarOpen && (
            <div className="fixed top-0 right-0 h-full w-1/4 bg-gray-200 p-4">
              <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
              {/* Agrega aquí contenido adicional, como resumen del carrito */}
              <button onClick={() => setSidebarOpen(false)} className="absolute top-4 right-4 text-black bg-blue-500 hover:bg-amber-500">
              <img src={xicon} alt="" />
              </button>
            </div>
          )}
        </>
      )}
    </Disclosure>
  );
}
