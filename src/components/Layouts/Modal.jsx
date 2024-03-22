import React,{useState} from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useProductData } from '../../context';

Modal.setAppElement('#root'); 

const ChangePasswordModal = ({ isOpen, onRequestClose , product }) => {
  const {addProduct} = useProductData()
  const handleAddClick = () => {
    const productId = localStorage.getItem('product_id');
    console.log(productId)
    addProduct(productId)
    onRequestClose()
};

  return (
    
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="absolute top-1/2 left-1/2 max-w-lg p-5 -translate-x-1/2 -translate-y-1/2 bg-navy dark:bg-white rounded shadow-lg outline-none rounded-xl w-full sm:min-w-[40%]"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <button onClick={onRequestClose} className="absolute top-5 right-5 bg-pink text-white text-xl px-2 py-1">
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <div className="flex flex-col sm:flex-row justify-center mt-5 items-center gap-4">
      <div className="sm:w-full md:flex-1 max-w-xs flex justify-center items-center rounded-lg text-gray-500">
        <img
          className="w-full object-cover sm:max-w-xs sm:max-h-48 md:max-h-64 mt-10"
          src={product.imageURL}
          alt="Descriptive Alt Text"
        />
      </div>
      <div className="sm:w-full md:flex-1 min-w-0 bg-red-500 flex flex-col justify-start p-4">
        <p className="text-white text-lg font-bold md:text-xl lg:text-2xl dark:text-black">{product.name}</p>
        <p className="text-pink text-xl md:text-xl lg:text-xl mb-8">{product.category.toUpperCase()}</p>
        <p className="text-white text-2xl font-semibold md:text-2xl lg:text-2xl dark:text-black">$ <span className='font-bold text-3xl'>{product.price}</span></p>
      </div>
    </div>

    <div className="flex flex-col justify-center items-center sm:justify-start sm:items-start mt-5 gap-4">
      <h1 className='text-center sm:text-left text-xl md:text-2xl font-bold text-white mt-1 dark:text-black'>Product Information:</h1>
      <p className='text-center sm:text-left text-gray-500 font-semibold'>
        {product.description}
      </p>
    </div>



     <div className="flex flex-wrap justify-between items-center mt-8 mb-3 gap-4">
      <button onClick={onRequestClose} className="bg-navy hover:bg-red dark:hover:bg-offWhite dark:bg-white dark:text-black text-white font-bold py-2 border border-pink px-4 rounded md:w-2/5 w-3/4 sm:w-2/3">
        Cancel
      </button>
      <button onClick={handleAddClick} className="bg-pink hover:bg-lightRed text-white font-bold py-2 px-4 rounded md:w-2/5 w-3/4 sm:w-2/3">
        Add
      </button>
    </div>



    </Modal>
  );
};

export default ChangePasswordModal;
