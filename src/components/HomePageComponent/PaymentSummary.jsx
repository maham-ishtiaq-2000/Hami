import React from 'react';
import { useProductData } from '../../context';
import { useNavigate } from 'react-router-dom';

const PaymentSummary = () => {
  const {cart} = useProductData();
  const totalValue = cart.reduce((accumulator, product) => {
    return accumulator + (product.price * product.quantity);
    }, 0);

    console.log(totalValue);
    const discount = 0
    const deliveryFee = 0
    const pendingFee = 0

    const navigate = useNavigate(); 

    const handleContinueToPayment = () => {
      navigate('/orderPage'); 
    };

  return (
    <div className="p-5 text-gray-400 w-full mx-auto rounded-lg dark:text-pink">
      <div className="flex justify-between py-3 ">
        <span>DISCOUNT</span>
        <span className='text-white font-semibold dark:text-black'>${discount}</span>
      </div>
      <div className="flex justify-between py-3 ">
        <span>DELIVERY FEE</span>
        <span className='text-white font-semibold dark:text-black'>${deliveryFee}</span>
      </div>
      <div className="flex justify-between py-3 ">
        <span>PENDING FEE</span>
        <span className='text-white font-semibold dark:text-black'>${pendingFee}</span>
      </div>
      <div className="flex justify-between py-3">
        <span className="font-semibold">SUB TOTAL</span>
        <span className="font-semibold text-white dark:text-black" >{Math.round(totalValue + discount + deliveryFee + pendingFee)}</span>
      </div>
      <button className="bg-pink text-white w-full py-3 mt-4 rounded-lg hover:bg-slightlyDarkPink transition-colors font-semibold" onClick={handleContinueToPayment}>
        Continue to Payment
      </button>
    </div>
  );
};

export default PaymentSummary;
