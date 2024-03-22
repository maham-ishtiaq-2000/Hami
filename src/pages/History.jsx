import React,{useState} from 'react';
import OrderReport from '../components/HistoryComponent/OrderReport';
import MostOrdered from '../components/HistoryComponent/MostOrdered';
import Sidebar from '../components/Layouts/SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faDollarSign, faArrowUp, faBookmark, faArrowDown } from '@fortawesome/free-solid-svg-icons';


const History = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchTerm);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <Sidebar />
      <div className="flex-1 overflow-hidden" style={{ marginLeft: '100px' }}>
        <div className="flex flex-col md:flex-row h-full">

        <div className="w-full md:w-61p p-4 bg-lightNavy h-full dark:bg-offWhite">
            {/* Content of the first div */}
            <div className="flex-1" >
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-60p p-4 bg-lightNavy dark:bg-offWhite">
                     <h1 className="text-white text-4xl dark:text-black">History</h1>
                     <h1 className="text-gray-500 font-semibold text-1xl mt-1">SATURDAY, 6 JAN 2024</h1>
                  </div>
                </div>
                <hr className="border-t border-gray-500 ml-4 my-2" style={{"width" : "98%"}} />
            </div>


            <div className="container mx-auto p-4">
             <div className="flex flex-col md:flex-row">

            <div className="flex-1 bg-navy dark:bg-white  text-white p-4 m-2 rounded-lg shadow-md flex flex-col"> 
            
                <div className="flex"> 
                    <div className="bg-lightNavy rounded-lg shadow-md flex items-center justify-center" style={{ width: '50px', height: '50px', position: 'relative' , marginRight : "15%"}}>
                        <div className="rounded-full p-2 border-2 border-purple-500 inline-flex items-center justify-center bg-lightNavy">
                            <FontAwesomeIcon icon={faCircle} className="fa-1x text-lightNavy" />
                        </div>
                        <FontAwesomeIcon icon={faDollarSign} className="fa-xs text-purple-500" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
                    </div>
                    <div className="w-1/3  ml-17">
                        <div className="bg-navy dark:bg-white rounded-lg  flex items-center justify-center" style={{ width: '50px', height: '50px', position: 'relative' }}>
                            <h1 className='text-2xl ml-2 dark:text-black'>+32.40%</h1>
                            <div className="bg-black rounded-full p-2 inline-flex items-center justify-center ml-2">
                                <FontAwesomeIcon icon={faArrowUp} className="text-green-500" />
                            </div>
                        </div>
                    </div>
                </div>
              
                <div className="mt-4 text-3xl dark:text-black font-semibold text-white"> 
                    $ 10,243.00
                </div>

                <div className="mt-4 text-lg font-semibold text-gray-500 font-semibold"> 
                    Total Revenue
                </div>

            </div>

            
            <div className="flex-1 bg-navy dark:bg-white dark:text-black text-white p-4 m-2 rounded-lg shadow-md flex flex-col"> 
            
                <div className="flex"> 
                    <div className="bg-lightNavy rounded-lg shadow-md flex items-center justify-center" style={{ width: '50px', height: '50px', position: 'relative' , marginRight : "15%"}}>
                        <div className="rounded-full p-2 border-2 border-yellow-500 inline-flex items-center justify-center bg-lightNavy">
                            <FontAwesomeIcon icon={faCircle} className="fa-1x text-lightNavy" />
                        </div>
                        <FontAwesomeIcon icon={faBookmark} className="fa-xs text-yellow-500" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
                    </div>
                    <div className="w-1/3  ml-17">
                        <div className="bg-navy dark:bg-white dark:text-black rounded-lg flex items-center justify-center" style={{ width: '50px', height: '50px', position: 'relative' }}>
                            <h1 className='text-2xl ml-2 dark:bg-white dark:text-black'>+32.40%</h1>
                            <div className="bg-black rounded-full p-2 inline-flex items-center justify-center ml-2">
                                <FontAwesomeIcon icon={faArrowDown} className="text-pink" />
                            </div>
                        </div>
                    </div>
                </div>
              
                <div className="mt-4 text-3xl dark:bg-white dark:text-black font-semibold text-white"> 
                    $ 23,456
                </div>

                <div className="mt-4 text-lg font-semibold text-gray-500 font-semibold"> 
                    Total Furniture Ordered
                </div>

            </div>
      </div>
      </div>



            
     


            <OrderReport></OrderReport>

          </div>


          <div className="w-full md:w-40p p-4 bg-lightNavy dark:bg-offWhite dark:text-black h-full">
             <MostOrdered></MostOrdered>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
