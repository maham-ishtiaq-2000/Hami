import React,{useState,useEffect} from 'react';
import Sidebar from '../components/Layouts/SideBar';
import TabNavigation from '../components/Layouts/TabNavigation';
import OrderList from '../components/HomePageComponent/OrderList';
import PaymentSummary from '../components/HomePageComponent/PaymentSummary';
import { useProductData } from '../context/index';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons'; 



const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { cart } = useProductData();
  

  const handleSearch = (e) => {
    e.preventDefault(); 
    console.log(searchTerm); 
  };
  

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <Sidebar />
      <div className="flex-1 overflow-hidden" style={{ marginLeft: '100px' }}>
        <div className="flex flex-col md:flex-row h-full">

           <div className="w-full md:w-40p p-4 bg-lightNavy dark:bg-offWhite h-full">
            <div className="flex-1" >
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-60p p-4 bg-lightNavy dark:bg-offWhite">
                     <h1 className="text-white text-4xl dark:text-black">HAMI</h1>
                     <h1 className="text-white text-1xl mt-1 dark:text-gray-500">SATURDAY, 6 JAN 2024</h1>
                  </div>
                  <div className="w-full md:w-40p p-4">
                  <form onSubmit={handleSearch} className="flex items-center space-x-3 bg-lighterNavy dark:bg-white" style={{ borderColor: '#6c6e77', borderWidth: '1px', borderStyle: 'solid', borderRadius: '0.5rem' }}>
                    <div className="flex items-center w-full px-4 py-2 rounded-md shadow-sm ">
                    <button type="submit" className="p-2 text-white dark:text-black ">
                    <FontAwesomeIcon
                        icon={faSearch}
                        className="text-salmon-600 text-xl hover:text-white"
                    />
                    </button>

                    <input
                    type="text"
                    placeholder="Search"
                    className="w-full pl-2 pr-10 py-2 border-transparent bg-lighterNavy dark:bg-white focus:outline-none text-white dark:text-black"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />

                    </div>
                  </form>
                  </div>
                </div>
            </div>
            <div className='ml-4'>
               <TabNavigation context="home" searchTerm={searchTerm}></TabNavigation>
            </div>
          </div>


          <div className="w-full md:w-60p p-4 bg-navy dark:bg-white h-full">
            <p className="mt-5 text-2xl font-semibold text-white mb-5 dark:text-black">Orders #34562</p>
            <button className="bg-pink hover:bg-slightlyDarkPink  text-white font-semibold py-2 px-4 rounded">
                ORDER
            </button>
            <div className="p-4 rounded-lg text-white mt-1 pr-5 pl-5">
            <div className="flex justify-between items-center mb-1">
                <div className="font-semibold text-1xl dark:text-black">Item</div>
                <div className='flex justify-between items-center mb-4'>
                    <div className="font-semibold text-1xl mr-20 dark:text-black">Qty</div>
                    <div className="font-semibold text-1xl dark:text-black">Price</div>      
                </div>
                </div>
                </div>
                <div className="border-t border-gray-500 my-2 mb-4" style={{ borderWidth: '0.5px' }} />


                <div
                  style={{
                    height: '45vh', 
                    overflowY: 'auto' 
                  }}
                >
                   {cart.map((product, index) => (
                      <OrderList key={index} product={product}/>
                   ))}
              </div>
 
                 <PaymentSummary></PaymentSummary>
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;