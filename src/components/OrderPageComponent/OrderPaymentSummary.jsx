import React from 'react';
import { useProductData } from '../../context';


const OrderPaymentSummary = () => {
  const {cart} = useProductData();
  const totalValue = cart.reduce((accumulator, product) => {
    return accumulator + (product.price * product.quantity);
    }, 0);

    console.log(totalValue);
    const discount = 0
    const deliveryFee = 0
    const pendingFee = 0

  

  return (
    <div className="p-5 text-pink w-full mx-auto rounded-lg dark:text-pink">
      <div className="flex justify-between py-3 ">
        <span>SUB TOTAL</span>
        <span className='text-white font-semibold dark:text-black'>${Math.round(totalValue + discount + deliveryFee + pendingFee)}</span>
      </div>
      <div className="flex justify-between py-3">
        <span className="font-semibold">SHIPPING FEE</span>
        <span className="font-semibold text-white dark:text-black" >$50000</span>
      </div>
      <div className="border-t border-gray-500 my-2 mb-4" style={{ borderWidth: '0.5px' }} />
      <div className="flex justify-between pt-3 text-2xl">
        <span className="font-semibold">TOTAL</span>
        <span className="font-semibold text-white dark:text-black" >${Math.round(totalValue + discount + deliveryFee + pendingFee)}</span>
      </div>
  
    </div>
  );
};

export default OrderPaymentSummary;
