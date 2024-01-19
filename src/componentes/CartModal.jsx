import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

Modal.setAppElement('#root'); // Especifica el elemento raíz de tu aplicación

const CartModal = ({ isOpen, closeModal, cartItems, totalItems, totalPrice }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Carrito de Compras"
    >
      <h2>Carrito de Compras</h2>
      <p>Total de Artículos: {totalItems}</p>
      <div>
        {cartItems.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio por unidad: ${item.price.toFixed(2)}</p>
            <hr />
          </div>
        ))}
      </div>
      <p>Total: ${totalPrice.toFixed(2)}</p>
      <button onClick={closeModal}>Cerrar</button>
    </Modal>
  );
};

CartModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  cartItems: PropTypes.array.isRequired,
  totalItems: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default CartModal;