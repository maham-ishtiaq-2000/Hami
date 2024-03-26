import React,{useState,useEffect} from 'react';
import Sidebar from '../components/Layouts/SideBar';
import OrderList from '../components/HomePageComponent/OrderList';
import OrderPaymentSummary from '../components/OrderPageComponent/OrderPaymentSummary';
import { useProductData } from '../context/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint, faCheck } from '@fortawesome/free-solid-svg-icons';



const OrderPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { cart } = useProductData();
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isFormVisible2, setIsFormVisible2] = useState(false);

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  const toggleForm2 = () => {
    setIsFormVisible2(!isFormVisible2);
  };
  
  

  const handleSearch = (e) => {
    e.preventDefault(); 
    console.log(searchTerm); 
  };
  

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <Sidebar />
      <div className="flex-1 overflow-hidden" style={{ marginLeft: '100px' }}>
        <div className="flex flex-col md:flex-row h-full">

           <div className="w-full md:w-40p p-3 bg-lightNavy dark:bg-offWhite h-full overflow-y-auto">
            <div className="flex-1" >
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-60p p-4 bg-lightNavy dark:bg-offWhite">
                     <h1 className="text-pink text-2xl dark:text-black">Orders #34562</h1>
                  </div>
                </div>
            </div>
            <h1 className="text-gray-500 text-1xl mt-1 pl-4 dark:text-gray-500">Frame 1427</h1>
            <div className="max-w-4xl mx-auto bg-navy rounded-lg p-3" style={{"width" : "8000px"}}>
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl text-pink">Personal Information</h2>
                  <button
                      onClick={toggleForm}
                      className={`text-sm p-2 rounded-full ${isFormVisible ? 'bg-red-600' : 'bg-red-500'}`}
                    >
                      {isFormVisible ? (
                        <i className="fas fa-angle-up text-pink text-2xl px-2 border border-pink  inline-block"></i>
                      ) : (
                        <i className="fas fa-angle-down text-pink text-2xl px-2 border border-pink  inline-block"></i>
                      )}
                    </button>

                </div>
                {isFormVisible && (
                   <form class="w-full max-w-lg">
                   <div class="flex flex-wrap -mx-3 mb-6" style={{"width" : "174%"}}>
                      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0 md:pr-6" > 
                        <label class="block tracking-wide text-white mb-1 text-1xl mt-2 font-bold mb-2 " for="grid-first-name">
                          Name
                        </label>
                        <input class="appearance-none block w-full bg-navy text-gray-700 text-white border border-pink rounded py-3 px-4 mb-3 leading-tight focus:outline-none " id="grid-first-name" type="text" placeholder="Name" />
                      </div>
                      <div class="w-full md:w-1/2 px-3">
                        <label class="block tracking-wide text-white mb-1 text-1xl mt-2 font-bold mb-2" for="grid-last-name">
                          Phone Number
                        </label>
                        <input class="appearance-none block w-full bg-navy text-gray-700 text-white border border-pink rounded py-3 px-4 mb-3 leading-tight focus:outline-none" id="grid-last-name" type="text" placeholder="Email" />
                      </div>
                    </div>

                   <div class="flex flex-wrap -mx-3 mb-6" style={{"width" : "174%"}}>
                     <div class="w-full px-3">
                       <label class="block tracking-wide text-white mb-1 text-1xl font-bold mb-2 " for="grid-password">
                         Email Address
                       </label>
                       <input class="appearance-none block w-full bg-navy text-gray-700 text-white border border-pink rounded py-3 px-4 mb-3 leading-tight focus:outline-none" id="grid-password" type="text" placeholder="Email Address" />
                     </div>
                   </div>
                   <div class="flex flex-wrap -mx-3 mb-6" style={{"width" : "174%"}}>
                     <div class="w-full px-3">
                       <label class="block tracking-wide text-white mb-1 text-1xl font-bold mb-2 "  for="grid-password">
                         Address
                       </label>
                       <input class="appearance-none block w-full bg-navy text-gray-700 text-white border border-pink rounded py-3 px-4 mb-3 leading-tight focus:outline-none" id="grid-password" type="text" placeholder="Address" />
                     </div>
                   </div>
                  
                 </form>
                )}
              </div>
              <h1 className="text-gray-500 text-1xl mt-3 pl-4 dark:text-gray-500">Frame 1427</h1>
              <div className="max-w-4xl mx-auto bg-navy p-3 rounded-lg" style={{"width" : "8000px"}}>
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl text-pink">Billing Information</h2>
                  <button
                      onClick={toggleForm2}
                      className={`text-sm p-2 rounded-full ${isFormVisible2 ? 'bg-red-600' : 'bg-red-500'}`}
                    >
                      {isFormVisible2 ? (
                        <i className="fas fa-angle-up text-pink text-2xl px-2 border border-pink  inline-block"></i>
                      ) : (
                        <i className="fas fa-angle-down text-pink text-2xl px-2 border border-pink  inline-block"></i>
                      )}
                    </button>

                </div>
                {isFormVisible2 && (
                   <form class="w-full max-w-lg">
                   <div class="flex flex-wrap -mx-3 mb-6" style={{"width" : "170%"}}>
                      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0 md:pr-6" > 
                        <label class="block tracking-wide text-white mb-1 text-1xl mt-2 font-bold mb-2 " for="grid-first-name">
                          Shipping Fee
                        </label>
                        <input class="appearance-none block w-full bg-navy text-gray-700 text-white border border-pink rounded py-3 px-4 mb-3 leading-tight focus:outline-none " id="grid-first-name" type="text" placeholder="Shipping Fee" />
                      </div>
                      <div class="w-full md:w-1/2 px-3">
                        <label class="block tracking-wide text-white mb-1 text-1xl mt-2 font-bold mb-2" for="grid-last-name">
                          Phone Number
                        </label>
                        <input class="appearance-none block w-full bg-navy text-gray-700 text-white border border-pink rounded py-3 px-4 mb-3 leading-tight focus:outline-none" id="grid-last-name" type="text" placeholder="Email" />
                      </div>
                    </div>

                    <div class="flex flex-wrap -mx-3 mb-6" style={{"width" : "170%"}}>
                      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0 md:pr-6" > 
                        <label class="block tracking-wide text-white mb-1 text-1xl mt-2 font-bold mb-2 " for="grid-first-name">
                          Amount Paid
                        </label>
                        <input class="appearance-none block w-full bg-navy text-gray-700 text-white border border-pink rounded py-3 px-4 mb-3 leading-tight focus:outline-none " id="grid-first-name" type="text" placeholder="Amount Paid" />
                      </div>
                      <div class="w-full md:w-1/2 px-3">
                        <label class="block tracking-wide text-white mb-1 text-1xl mt-2 font-bold mb-2" for="grid-last-name">
                          Pending Payment
                        </label>
                        <input class="appearance-none block w-full bg-navy text-gray-700 text-white border border-pink rounded py-3 px-4 mb-3 leading-tight focus:outline-none" id="grid-last-name" type="text" placeholder="Pending Payment" />
                      </div>
                    </div>

                   <div class="flex flex-wrap -mx-3 mb-6" style={{"width" : "170%"}}>
                     <div class="w-full px-3">
                       <label class="block tracking-wide text-white mb-1 text-1xl font-bold mb-2 "  for="grid-password">
                         Special Note
                       </label>
                       <input class="appearance-none block w-full bg-navy text-gray-700 text-white border border-pink rounded py-3 px-4 mb-3 leading-tight focus:outline-none" id="grid-password" type="text" placeholder="Special Note" />
                     </div>
                   </div>
                  
                 </form>
                )}
              </div>
          </div>

          


          


          <div className="w-full h-full md:w-60p p-4 bg-lightNavy dark:bg-white" >
            <div className='bg-navy p-3 mt-20' style={{"height" : "80%"}}>
          <p className="mt-3 text-lg font-semibold text-gray-500 mb-1 dark:text-black">Selector</p>
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
                    height: '33vh', 
                    overflowY: 'auto' 
                  }}
                >
                   {cart.map((product, index) => (
                      <OrderList key={index} product={product}/>
                   ))}
              </div>
              <OrderPaymentSummary></OrderPaymentSummary>
              </div>

              <div className="flex justify-start items-center space-x-4 mt-7" style={{"width" : "100%"}}>
                    {/* First button */}
                    <button
                      className="bg-lightNavy text-pink font-bold py-4 px-4 rounded inline-flex border border-pink items-center"
                      style={{"width" : "50%"}}
                    >
                      <FontAwesomeIcon className="text-3xl mb-2 ml-10 mr-7 mt-1 text-pink" icon={faPrint} />
                      Print Receipt
                    </button>

                    <div className="w-1"></div> 

          
                    <button
                      className="bg-pink text-white font-bold py-4 px-4 rounded inline-flex border border-pink items-center"
                      style={{"width" : "50%"}}
                    >
                      <FontAwesomeIcon className="text-3xl mb-2 ml-10 mr-7 mt-1 text-white" icon={faCheck} />
                      Confirm Order
                    </button>
                </div>
              
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;