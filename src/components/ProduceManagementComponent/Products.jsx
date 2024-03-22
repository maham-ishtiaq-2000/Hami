import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import EditProductModal from '../Layouts/EditProductModal';


const SingleProductCategory = ({ product }) => {
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
    <div className="bg-navy dark:bg-white p-10 mt-20 rounded shadow-lg relative border border-2 border-pink" style={{ width: '20rem', height : '100%' , margin: '0 auto' }}>
      <div className="flex flex-col items-center relative">
        <div style={{ position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)', width: '100%', overflow: 'hidden' }}>
          <img src={product.imageURL} alt="Product" style={{ width: '100%', height : "100%", display: 'block'}} />
        </div>
        <div className="px-3 w-full text-center mt-10 pt-20">
          <div className="text-xl mb-2 text-white mt-10 dark:text-black">{product.name}</div>
          <p className="text-gray-500 font-semibold text-lg mt-2 mb-10">
              $ {product.price}
              <span className="text-white text-2xl font-bold relative ml-3 mr-3" style={{ top: '-0.25em' }}>.</span>
              0 order
          </p>
        </div>
      
        <button className="absolute -bottom-10 mt-2 bg-lightRed hover:bg-red dark:bg-lightestRed text-pink font-bold py-4 border-t-0" style={{ width: "134.5%" }} onClick={openModal}>
          <FontAwesomeIcon icon={faEdit} className='mr-3'/> Edit
        </button>
      </div>
    </div>
    <EditProductModal isOpen={modalIsOpen} onRequestClose={closeModal}></EditProductModal>
    </>
  );
}

export default SingleProductCategory;
