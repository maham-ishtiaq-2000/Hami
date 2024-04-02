import React, { useState, useEffect } from 'react';
import productImage from '../../assets/bedRoomBedSheet.png';
import MyModal from '../Layouts/Modal';

const SingleProductCategory = ({ product }) => {
  console.log(product);
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    const existingProductId = localStorage.getItem('product_id');
    if (!existingProductId) {
      localStorage.setItem('product_id', product._id);
    } else {
      localStorage.setItem('product_id', product._id);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button style={{ maxWidth: '100%', position: 'relative' }} className="rounded shadow-lg bg-navy dark:bg-white flex flex-col items-center p-6 mt-5 sm:mt-20 md:rounded"
      onClick={openModal}>
        <div style={{ position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)', width: '80%', overflow: 'hidden' }}>
          <img src={product.imageURL} className="object-cover" alt="Product" style={{ width: '100%', display: 'block', height : "100%", borderRadius: '50%' }} />
        </div>

        <div className="px-3 w-full text-center mt-10 pt-32 sm:pt-20 rounded-md">
          <div className="text-xl mb-2 text-white dark:text-black">{product.name}</div>
          <p className="text-white text-lg mt-2 dark:text-gray-500">$ {product.price}</p>

          <p className="text-gray-400 text-base mb-3 dark:text-black">20 <span className='font-bold'>Furniture</span> available</p>
        </div>
      </button>
      <MyModal isOpen={modalIsOpen} onRequestClose={closeModal} product={product}>

      </MyModal>
    </>
  );
}

export default SingleProductCategory;
