import React, { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import CartButton from './CartButton';
import loginicon from '../../public/img/logo/login.svg';
import SearchBar from './SearchBar';
import classNames from 'classnames';

const NavRegister = () => {
  const [isCartVisible, setCartVisible] = useState(false);
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);



  return (
    <>
      <div className=" inset-y-0 right-1 justify-center flex items-center pr-2 sm:inset-auto sm:ml-6 sm:pr-0 sm:justify-end 2xl:absolute mr-3">
        <SearchBar />
        <CartButton onClick={() => setCartVisible(!isCartVisible)} />
        <Menu as="div" className="relative ml-2">
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
                    href="/SignUp"
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
      {/* Contenido del carrito directamente en la Navbar */}
      {isCartVisible && (
        <div className="fixed top-0 right-0 h-full w-1/4 bg-gray-200 p-4 z-10">
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
  );
}

export default NavRegister;
