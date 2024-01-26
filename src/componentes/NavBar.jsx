import React, { Fragment, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import CartButton from './CartButton';
import ghandslogo from '../../public/img/logo/ghandslogo.svg';
import loginicon from '../../public/img/logo/login.svg';
import useWishlist from './useWishlist';
import NavRegister from './NavRegister';
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
            <div className="relative flex h-24 items-center ">

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
                <div className="hidden sm:ml-4 sm:block flex-end mt-4">
                  <div className="flex space-x-5 lg:ml-[38vw] md:ml-[21vw]">
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


              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
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
            </div>
          </div>
         
          {/* Menú Desplegable para Pantallas Pequeñas */}
          <Disclosure.Panel className="sm:hidden">
            <div className="flex flex-col space-y-2 mt-2">
              {navigation.map((item) => (
                <Link
                  to={item.href}
                  key={item.name}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'rounded-md px-3 py-2 text-sm font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                  {item.name === 'Wishlist' && wishlist.length > 0 && (
                    <span className="bg-red-500 text-white rounded-full p-1 text-xs">
                      {wishlist.length}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
