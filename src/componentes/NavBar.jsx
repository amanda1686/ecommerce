import React, { Fragment, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import CartButton from './CartButton';
import ghandslogo from '../../public/img/logo/ghandslogo.svg';
import loginicon from '../../public/img/logo/login.svg';
import useWishlist from '../componentes/useWishlist'; // Ajusta la ruta según la ubicación de tu hook
import SearchBar from './SearchBar';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Product', href: '/Product', current: false },
  { name: 'Login', href: '/Login', current: false },
  { name: 'Wishlist', href: '/Wish', current: false },
  { name: 'Services', href: '/Services', current: false },
];



function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const { wishlist } = useWishlist();
  const [isCartVisible, setCartVisible] = useState(false);
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const removeFromCart = (productId) => {
    // Lógica para eliminar un producto del carrito
    // ...
  };

  const finishPurchase = () => {
    // Lógica para finalizar la compra
    // Por ejemplo, enviar información al servidor.
    // navigate('/checkout'); // Asegúrate de tener la función navigate disponible
  };

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
              <div className="flex space-x-4 sm:space-x-2 md:space-x-4 lg:space-x-6 xl:space-x-8">
                <div className="flex flex-shrink-0 items-center">
                  <a href="/">
                    <img
                      className="h-16 w-auto"
                      src={ghandslogo}
                      alt="Your Company"
                    />
                  </a>
                </div>
                <div className="hidden sm:ml-4 sm:block mt-4">
                  <div className="flex space-x-5 ms-64">
                    {navigation.map((item) => (
                      <Link 
                        to={item.href}
                        key={item.name}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium relative'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                        {item.name === 'Wishlist' && wishlist.length > 0 && (
                          <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white rounded-full p-1 text-xs">
                            {wishlist.length}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div>
                  <CartButton onClick={() => setCartVisible(!isCartVisible)}
                   />
                </div>
                <SearchBar />
                <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src={loginicon}
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="/Login"
                                  className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                >
                                  Login
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="/Signin"
                                  className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                >
                                  Sign In
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="/Home"
                                  className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                >
                                  Sign out
                                </a>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
            </div>
          </div>

          {/* Contenido del carrito directamente en la Navbar */}
          {isCartVisible && (
            <div className="fixed top-0 right-0 h-full w-1/4 bg-gray-200 p-4">
              <button
                onClick={() => setCartVisible(false)}
                className="text-red-500 text-xl font-semibold mb-4"
              >
                Cerrar
              </button>
              <h2 className="text-xl font-semibold mb-4">Resumen de compra</h2>
              {cart.length === 0 ? (
                <p>No hay productos en el carrito.</p>
              ) : (
                <>
                  <ul className="divide-y divide-gray-300">
                    {cart.map((product, index) => (
                      <li key={index} className="py-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold">{product.name}</p>
                            <p>Precio: {product.price.toFixed(2)} €</p>
                            <p>Cantidad: {product.quantity}</p>
                          </div>
                          <div>
                            <button
                              onClick={() => removeFromCart(product.id)}
                              className="text-red-500"
                            >
                              Quitar del carrito
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="text-xl font-semibold mt-4">Total: {total.toFixed(2)}€</div>

                  {/* Botón de Finalizar compra */}
                  <button
                    onClick={finishPurchase}
                    className="bg-green-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-green-600"
                  >
                    Finalizar compra : {total.toFixed(2)}€
                  </button>
                </>
              )}
            </div>
          )}
        </>
      )}
    </Disclosure>
  );
}
