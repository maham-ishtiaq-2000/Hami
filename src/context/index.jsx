import React, { createContext, useContext, useState } from 'react';
import useProductDataArray from './productData';

const ProductDataContext = createContext();

export const useProductData = () => useContext(ProductDataContext);

export const ProductDataProvider = ({ children }) => {
  const { productData } = useProductDataArray();
  const [cart, setCart] = useState([]);
  const [totalCartValue , setTotalCartValue] = useState(0)




  const addProduct = (_id) => {
    const productToAdd = productData.find(product => product._id === _id);
    
    if (productToAdd) {
      const productInCartIndex = cart.findIndex(item => item._id === _id);
      
      if (productInCartIndex > -1) {
        const updatedCart = cart.map((item, index) => {
          if (index === productInCartIndex) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        setCart(updatedCart);
      } else {
        setCart([...cart, { ...productToAdd, quantity: 1 }]);
      }
    }
  };
  
  const increaseQuantity = (id) => {
    const updatedCart = cart.map(product => {
      if (product._id === id) { 
        return { ...product, quantity: product.quantity + 1 };
      }
      return product; 
    });
  
    setCart(updatedCart); 
  };

  const decreaseQuantity = (id) => {
    setCart(currentCart => {
      const productIndex = currentCart.findIndex(product => product._id === id);
      if (productIndex !== -1 && currentCart[productIndex].quantity === 1) {
        return currentCart.filter(product => product._id !== id);
      } else {
        return currentCart.map(product => {
          if (product._id === id) {
            return { ...product, quantity: product.quantity - 1 };
          }
          return product;
        }).filter(product => product.quantity >= 1); 
      }
    });
  };
  
  

  const deleteProduct = (id) => {
    const updatedCart = cart.filter(product => product._id !== id);
    setCart(updatedCart);
  };

  const totalValueReceived = (totalValue) => {
    setTotalCartValue(totalValue)
  }


  return (
    <ProductDataContext.Provider value={{ productData, cart, totalCartValue, addProduct, deleteProduct, increaseQuantity, decreaseQuantity , totalValueReceived}}>
      {children}
    </ProductDataContext.Provider>
  );
};
