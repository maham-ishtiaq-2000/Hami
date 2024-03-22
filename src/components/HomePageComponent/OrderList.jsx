import React, { useState } from 'react';
import dresser from '../../assets/dresser.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useProductData } from '../../context/index';

const OrderList = ({ product }) => {
  const [quantity, setQuantity] = useState(product.quantity || 1); 
  const { deleteProduct , increaseQuantity , decreaseQuantity} = useProductData();
  

  const incrementQuantity = () => {
    increaseQuantity(product._id)
  };

 
  const decrementQuantity = () => {
    decreaseQuantity(product._id)
  };

  const handleDeleteClick = () => {
    deleteProduct(product._id)
  };

  return (
    <div className="p-1 rounded-lg text-white mt-1 mx-auto max-w-4xl">
      <div className="flex justify-between items-center flex-wrap">
        <div className="flex items-center mb-4 md:mb-0">
          <img src={product.imageURL} alt="Cabinets" className="w-20 rounded-full mr-2"  style={{"height" : "150%" }}/>
          <div>
            <div className="font-semibold dark:text-black">{product.name}</div>
            <div className="text-gray-400 dark:text-pink">$ {product.price}</div>
          </div>
        </div>
        <div className="flex items-center text-center">
          <button onClick={decrementQuantity} className="text-white bg-gray-700 dark:text-black dark:bg-white border border-black font-semibold rounded-md px-2 mr-2">
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <input
            type="text"
            className="w-12 p-3 bg-gray-700 border border-gray-700 dark:text-black dark:bg-white font-semibold text-white rounded-md text-center appearance-none"
            value={product.quantity}
            readOnly
          />
          <button onClick={incrementQuantity} className="text-white dark:text-black dark:bg-white border border-black border-5 bg-gray-700 font-semibold rounded-md px-2 ml-2">
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <div className="font-semibold text-white ml-4 dark:text-black dark:bg-white">$ {(product.price * product.quantity).toFixed(2)}</div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center mt-4 space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex-grow" style={{ flexBasis: 'auto' }}>
          <input
            type="text"
            className="p-3 rounded-md border border-gray-700 bg-gray-700 text-white dark:text-black dark:bg-white border border-black  w-full"
            placeholder="Order Note..."
          />
        </div>
        <button className='mr-5' onClick={handleDeleteClick}>
          <i className="fa fa-trash-o" style={{"fontSize":"47px", color : '#FA8072'}}></i>
        </button>
      </div>
    </div>
  );
};

export default OrderList;
