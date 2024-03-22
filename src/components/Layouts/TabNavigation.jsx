import React, { useState,useEffect } from 'react';
import Products from '../HomePageComponent/Products';
import AddNewProduct from '../ProduceManagementComponent/AddNewProduct';
import SingleProductCategory from '../ProduceManagementComponent/Products';
import { useProductData } from '../../context/index';

function TabNavigation({ context , searchTerm }) {
  const [productData, setProductData] = useState([]);
  const [activeTab, setActiveTab] = useState('ALL');
  const tabBaseStyle = "px-4 py-2 text-sm font-medium";
  const activeTabStyle = "text-pink border-b-2 border-pink";
  const inactiveTabStyle = "text-white dark:text-black hover:text-pink dark:hover:text-pink ";

    useEffect(() => {
      fetch('http://localhost:3000/product')
          .then(response => response.json())
          .then(data => {
              console.log('Fetched data:', data); // Debug fetched data
              setProductData(data);
          })
          .catch(error => {
              console.error('Fetch error:', error);
          });
  }, []);


  const tabs = [
    { id: 'ALL', label: 'ALL' },
    { id: 'table', label: 'TABLE' },
    { id: 'bed', label: 'BED' },
    { id: 'chair', label: 'CHAIR' },
  ];


  const renderContent = (category) => {
    const trimmedSearchTerm = searchTerm.trim();
  
    let filteredProducts = trimmedSearchTerm !== '' 
      ? productData.filter(product => product.name.toLowerCase().includes(trimmedSearchTerm.toLowerCase()))
      : productData;
  
    filteredProducts = category === 'ALL' ? filteredProducts : filteredProducts.filter(product => product.category === category);

    if (filteredProducts.length === 0) {
      return <p className="text-lg text-white dark:text-black">No such Product found.</p>;
    }
  
    if (context === 'home') {
      return (
        <div>
          <p className="mt-2 text-lg font-bold text-white dark:text-black">Choose Furniture</p>
          <Products product={filteredProducts} />
        </div>
      );
    } else if (context === 'productManagement') {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <AddNewProduct key="add-new-product" />
          {filteredProducts.map((product, index) => (
            <SingleProductCategory key={`single-product-${index}`} product={product} />
          ))}
        </div>
      );
    }
  };
  

  return (
    <div>
      <ul className="flex flex-wrap justify-center md:justify-start cursor-pointer dark:text-black">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={`${tabBaseStyle} ${activeTab === tab.id ? activeTabStyle : inactiveTabStyle} my-1 mx-1 md:mx-0 md:my-0`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </li>
        ))}
      </ul>

      <div className="mt-4">
        {renderContent(activeTab)}
      </div>
    </div>
  );
}

export default TabNavigation;
