import React, { Fragment, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import CartButton from './CartButton';
import ghandslogo from '../../public/img/logo/ghandslogo.svg';
import loginicon from '../../public/img/logo/loginicon.png';
import useWishlist from '../componentes/useWishlist'; // Ajusta la ruta según la ubicación de tu hook
import SearchBar from './SearchBar';

const navigation = [
  { name: 'Home', href: '/Home', current: true },
  { name: 'Product', href: '/Product', current: false },
  { name: 'Login', href: '/Login', current: false },
  { name: 'About us', href: '/Aboutus', current: false },
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
    <BrowserRouter>
      <Navbar />
        <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} index />
        <Route path="/Product" element={<Product />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Productdetails" element={<Productounico />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Wish" element={<Wish />} /> 
        <Route path="/SignUp" element={<SignUp />} /> 
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/" element={<Catalog />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
      </CartProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
