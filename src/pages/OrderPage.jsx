import React,{useState,useEffect} from 'react';
import Sidebar from '../components/Layouts/SideBar';
import { Checkbox} from "@mui/material";
import OrderList from '../components/HomePageComponent/OrderList';
import OrderPaymentSummary from '../components/OrderPageComponent/OrderPaymentSummary';
import { useProductData } from '../context/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { faPrint, faCheck } from '@fortawesome/free-solid-svg-icons';
import './OrderPage.css';



const OrderPage = () => {
  const navigate = useNavigate();
  const { cart,totalCartValue } = useProductData();
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isFormVisible2, setIsFormVisible2] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    address: '',
  });
  const [formValues, setFormValues] = useState({
    shippingFee: '',
    paymentBy: '',
    amountPaid: '',
    pendingPayment: 0,
    specialNote: '',
  });

  useEffect(() => {
    const amountPaid = Number(formValues.amountPaid)
    const pendingPayment = totalCartValue-amountPaid
    setFormValues(prevValues => ({
      ...prevValues,
      pendingPayment: pendingPayment // This should now always be a valid number
    }));
  }, [formValues.amountPaid]); 

  const [errors, setErrors] = useState({});


  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  const toggleForm2 = () => {
    setIsFormVisible2(!isFormVisible2);
  };
  
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleInputform2Change = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

  };

  const validateForm = () => {
    let tempErrors = {};
    tempErrors.shippingFee = formValues.shippingFee ? '' : 'Shipping Fee is required';
    tempErrors.amountPaid = formValues.amountPaid ? '' : 'Amount Paid is required';
    tempErrors.paymentBy = formValues.paymentBy ? '' : 'Payment Method is required'; // Corrected from paymentMethod to paymentBy
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === '');
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      const postData = {
        items: cart.map(product => ({
          product: product._id,
          quantity: product.quantity
        })),
        totalAmount: totalCartValue,
        shippingFee: Number(formValues.shippingFee),
        paymentBy: formValues.paymentBy,
        amountPaid: Number(formValues.amountPaid),
        balanceDue: formValues.pendingPayment,
        specialNote: formValues.specialNote,
        customer: formData
      };
  
      try {
        // Simulate the API call with a promise
        const promise = fetch('http://localhost:3000/sale', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(postData),
        }).then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        });
  
        toast.promise(
          promise,
          {
            pending: 'Processing payment...',
            success: 'Payment done successfully! Reloading...',
            error: 'Failed to process payment!',
          }
        ).then(() => {
          setTimeout(() => {
            window.location.reload();
            navigate("/Home");
          }, 2000); 
        }).catch((error) => {
          console.error('Error during the fetch operation:', error);
        });
      } catch (error) {
        toast.error('An unexpected error occurred.');
        console.error('Error:', error);
      }
    } else {
      console.log("Validation failed");
    }
  };
  
  

  const setPaymentMethodHandle = (method) => {
    setFormValues({ ...formValues, paymentBy: method });
  };



  
 
  
  

  

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <Sidebar />
      <div className="flex-1" style={{ marginLeft: '100px' }}>
        <div className="flex flex-col md:flex-row h-full">
          

           <div className="w-full md:w-40p p-3 bg-lightNavy dark:bg-offWhite h-full">
            <div className="flex-1" >
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-60p p-4 bg-lightNavy dark:bg-offWhite">
                     <h1 className="text-pink text-2xl dark:text-black">Orders #34562</h1>
                  </div>
                </div>
            </div>
            <div className="mx-auto bg-navy dark:bg-white dark:text-pink rounded-lg p-3 w-full md:max-w-4xl mt-4">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl text-pink mb-5">Personal Information</h2>
                <button
                    onClick={toggleForm}
                    className={`text-sm p-2 rounded-full ${isFormVisible ? 'bg-red-600' : 'bg-red-500'}`}
                  >
                    {isFormVisible ? (
                      <i className="fas fa-angle-up text-pink text-2xl px-2 border border-pink inline-block"></i>
                    ) : (
                      <i className="fas fa-angle-down text-pink text-2xl px-2 border border-pink inline-block"></i>
                    )}
                </button>
              </div>
              {isFormVisible && (
                <form className="w-full">
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3 mb-6 md:mb-0 md:w-1/2"> 
                      <label className="block tracking-wide text-white text-xl md:text-lg font-semibold mb-2 dark:bg-white dark:text-black" htmlFor="grid-first-name">
                        Name
                      </label>
                      <input 
                        className="appearance-none block w-full bg-navy text-white border border-pink rounded py-3 dark:bg-white dark:text-black px-4 leading-tight focus:outline-none" 
                        id="grid-first-name" 
                        type="text" 
                        placeholder="Name" 
                        name="name" 
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="w-full px-3 md:w-1/2">
                      <label className="block tracking-wide text-white text-xl md:text-lg font-semibold mb-2 dark:bg-white dark:text-black" htmlFor="grid-last-name">
                        Phone Number
                      </label>
                      <input 
                        className="appearance-none block w-full bg-navy text-white border border-pink rounded py-3 px-4 leading-tight dark:bg-white dark:text-black focus:outline-none" 
                        id="grid-last-name" 
                        type="text" 
                        placeholder="Phone Number" 
                        name="phoneNumber" 
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                      <label className="block tracking-wide text-white text-xl dark:bg-white dark:text-black font-semibold mb-2" htmlFor="grid-password">
                        Email Address
                      </label>
                      <input className="appearance-none block w-full bg-navy dark:bg-white dark:text-black text-white border border-pink rounded py-3 px-4 leading-tight focus:outline-none" id="grid-password" type="text" placeholder="Email Address" name="email" onChange={handleInputChange}/>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                      <label className="block tracking-wide text-white text-xl dark:bg-white dark:text-black font-semibold mb-2" htmlFor="grid-password">
                        Address
                      </label>
                      <input className="appearance-none block w-full bg-navy dark:bg-white dark:text-black text-white border border-pink rounded py-3 px-4 leading-tight focus:outline-none" id="grid-password" type="text" placeholder="Address" name="address" onChange={handleInputChange} />
                    </div>
                  </div>
                </form>
              )}
            </div>

  
              <div className="mx-auto bg-navy rounded-lg p-3 dark:bg-white dark:text-black w-full mt-3 md:max-w-4xl">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl text-pink mb-3">Billing Information</h2>
              <button onClick={toggleForm2} className={`text-sm p-2 rounded-full ${isFormVisible2 ? 'bg-red-600' : 'bg-red-500'}`}>
                {isFormVisible2 ? (
                  <i className="fas fa-angle-up text-pink text-2xl px-2 border border-pink inline-block"></i>
                ) : (
                  <i className="fas fa-angle-down text-pink text-2xl px-2 border border-pink inline-block"></i>
                )}
              </button>
            </div>
            {isFormVisible2 && (
              <form className="w-full" onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3 mb-6 md:mb-0 md:w-1/2"> 
                    <label className="block tracking-wide text-white text-xl font-semibold dark:bg-white dark:text-black  mb-2" htmlFor="grid-first-name">
                      Shipping Fee
                    </label>
                    <input className="appearance-none block dark:bg-white dark:text-black w-full bg-navy text-white border border-pink rounded py-3 px-4 leading-tight focus:outline-none" id="grid-first-name" type="text" placeholder="Shipping Fee" name="shippingFee" onChange={handleInputform2Change}/>
                    {errors.shippingFee && <p className="text-pink text-xs mt-1 italic">{errors.shippingFee}</p>}
                  </div>
                  <div className="w-full px-3 md:w-1/2">
                    <label className="block tracking-wide text-white dark:bg-white dark:text-black text-xl font-semibold mb-2" htmlFor="grid-last-name">
                      Payment By
                    </label>
                    <div className="flex items-center custom-checkbox">
                                    <label className="flex items-center space-x-2  dark:bg-white dark:text-black text-pink custom-checkbox">
                                    <Checkbox
                                        checked={formValues.paymentBy === 'ATM'}
                                        onChange={() => setPaymentMethodHandle('ATM')}
                                        sx={{
                                          height: '30px', // Set height
                                          width: '30px', // Set width
                                          padding: '2px',
                                          border: '3px solid', // Specify border width and style
                                          borderColor: 'pink', // Set border color to pink
                                          borderRadius: '4px', // Optionally add border radius if you want rounded corners
                                          '& .MuiSvgIcon-root': { // Target the inner SVG icon for resizing if needed
                                            fontSize: '2.5rem', // Adjust the icon size to match the checkbox size
                                          },
                                          '&.Mui-checked': {
                                            color: '#FA8072', // Set the color when checked
                                            '&:after': {
                                              content: '""',
                                              position: 'absolute',
                                              backgroundColor: 'pink',
                                            },
                                          },
                                        }}
                                      />
                                      <span className="text-pink text-lg">ATM</span>
                                    </label>

                                    <label className="flex items-center space-x-2 ml-4 custom-checkbox">
                                       <Checkbox
                                        checked={formValues.paymentBy === 'Cash'}
                                        onChange={() => setPaymentMethodHandle('Cash')}
                                        sx={{
                                          height: '30px', // Set height
                                          width: '30px', // Set width
                                          padding: '2px',
                                          border: '3px solid', // Specify border width and style
                                          borderColor: 'pink', // Set border color to pink
                                          borderRadius: '4px', // Optionally add border radius if you want rounded corners
                                          '& .MuiSvgIcon-root': { // Target the inner SVG icon for resizing if needed
                                            fontSize: '2.5rem', // Adjust the icon size to match the checkbox size
                                          },
                                          '&.Mui-checked': {
                                            color: '#FA8072', // Set the color when checked
                                            '&:after': {
                                              content: '""',
                                              position: 'absolute',
                                              backgroundColor: 'pink',
                                            },
                                          },
                                        }}
                                      />
                                      <span className="text-pink">Cash</span>
                                    </label>
                          </div>
                    {errors.paymentMethod && <p className="text-pink text-xs mt-4 italic">{errors.paymentMethod}</p>}
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3 mb-6 md:mb-0 md:w-1/2"> 
                    <label className="block tracking-wide dark:bg-white dark:text-black text-white text-xl font-semibold mb-2" htmlFor="amount-paid">
                      Amount Paid
                    </label>
                    <input className="appearance-none block w-full bg-navy dark:bg-white dark:text-black text-white border border-pink rounded py-3 px-4 leading-tight focus:outline-none" id="amount-paid" type="text" placeholder="Amount Paid" name="amountPaid" onChange={handleInputform2Change} />
                    {errors.amountPaid && <p className="text-pink text-xs mt-1 italic">{errors.amountPaid}</p>}
                  </div>
                  <div className="w-full px-3 md:w-1/2">
                    <label className="block tracking-wide text-white dark:bg-white dark:text-black text-xl font-semibold mb-2" htmlFor="pending-payment">
                      Pending Payment
                    </label>
                    <input className="appearance-none block w-full bg-navy dark:bg-white dark:text-black text-white border border-pink rounded py-3 px-4 leading-tight focus:outline-none" id="pending-payment" type="text" placeholder="0" name="pendingPayment" value={formValues.pendingPayment} readOnly />
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label className="block tracking-wide text-white dark:bg-white dark:text-black text-xl font-semibold mb-2" htmlFor="special-note">
                      Special Note
                    </label>
                    <input className="appearance-none block w-full bg-navy dark:bg-white dark:text-black text-white border border-pink rounded py-3 px-4 leading-tight focus:outline-none" id="special-note" type="text" placeholder="Special Note" name="specialNote" onChange={handleInputform2Change}/>
                  </div>
                </div>
              </form>
            )}
          </div>

          </div>

          


          


          <div className="w-full h-full md:w-60p p-4 bg-lightNavy dark:bg-offWhite" >
            <div className='bg-navy dark:bg-white  p-3 px-7 pt-5 mt-20' style={{"height" : "80%"}}>
          <p className="mt-3 text-lg font-semibold text-gray-500 mb-1 dark:text-gray-500">Selector</p>
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
              <OrderPaymentSummary shippingFee={formValues.shippingFee}></OrderPaymentSummary>
              </div>

              <div className="flex justify-start items-center space-x-4 mt-7 md:space-x-4" style={{"width" : "100%"}}>
                    <button
                      className="bg-lightNavy text-pink font-bold py-2 px-4 rounded inline-flex dark:bg-offWhite border border-2 border-pink items-center"
                      style={{"width" : "50%"}}
                    >
                      <FontAwesomeIcon className="text-3xl mb-2 ml-10 mr-7 mt-1 text-pink" icon={faPrint} />
                      <p className='text-lg'>Print Receipt</p>
                    </button>

                    <div className="w-1"></div> 

          
                    <button
                      className="bg-pink text-white font-bold py-2 px-4 rounded inline-flex border border-pink items-center"
                      style={{"width" : "45%"}}
                      onClick={handleSubmit}
                    >
                      <FontAwesomeIcon className="text-3xl mb-2 ml-3 mr-7 mt-1 text-white" icon={faCheck} />
                      <p className='text-lg'>Confirm Order</p>
                    </button>
              </div>
              
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;