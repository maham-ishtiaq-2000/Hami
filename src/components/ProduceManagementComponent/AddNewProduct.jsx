import React, { useState } from 'react';
import AddProductModal from '../Layouts/AddProductModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AddNewProduct = () => {
  const [modalIsOpen, setIsOpen] = useState(false);


  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
        <div 
        className="bg-navy dark:bg-white p-10 mt-20 rounded shadow-lg relative border border-2 border-pink border-dashed cursor-pointer" // Added cursor-pointer here
        style={{ width: "95%", maxHeight: '30rem', margin: '0 auto' }}
        onClick={openModal}
      >
        <div className="px-3 w-full text-center pt-20">
          <FontAwesomeIcon className="text-2xl mb-2 text-pink" icon={faPlus} />
          <p className="text-pink font-semibold text-2xl mt-2 mb-10">Add new</p>
        </div>
      </div>
      <AddProductModal isOpen={modalIsOpen} onRequestClose={closeModal} />
    </>
  );
}

export default AddNewProduct;
