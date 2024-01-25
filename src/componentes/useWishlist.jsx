// useWishlist.js
import { useState } from 'react';

const useWishlist = () => {
  const [wishlist, setWishlist] = useState(() => {
    const storedWishlist = localStorage.getItem('wishlist');
    return storedWishlist ? JSON.parse(storedWishlist) : [];
  });

  const addToWishlist = (productId) => {
    setWishlist((prevWishlist) => [...prevWishlist, productId]);
    localStorage.setItem('wishlist', JSON.stringify([...wishlist, productId]));
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prevWishlist) => prevWishlist.filter((id) => id !== productId));
    localStorage.setItem('wishlist', JSON.stringify(wishlist.filter((id) => id !== productId)));
  };

  return { wishlist, addToWishlist, removeFromWishlist };
};

export default useWishlist;
