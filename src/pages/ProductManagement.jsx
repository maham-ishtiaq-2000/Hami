import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../components/Layouts/SideBar';
import TabNavigation from '../components/Layouts/TabNavigation';

const Home = () => {
  return (
    <>
    <div className="flex flex-col bg-lightNavy dark:bg-offWhite h-screen">
      <Sidebar />
      <div className="flex-1 pl-5 pr-5 pt-10 overflow-hidden" style={{ marginLeft: "100px"  }}>
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-4 pl-2 dark:text-black">Products Management</h1>
          <div className="w-full rounded-tl rounded-tr bg-navy dark:bg-white" style={{ height: "86vh", marginTop: "10px", padding: "12px", overflow: "auto" }}>
            <div className="text-white p-4">
              <div className="flex justify-between items-center flex-col md:flex-row">
                <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 md:mb-0 dark:text-black">Products Management</h1>
                <button className="bg-navy dark:bg-white hover:bg-gray-600 text-white dark:text-pink dark:border-pink font-semibold py-2 px-4 rounded flex items-center justify-center w-full sm:w-auto mb-4 md:mb-0 md:w-1/5 p-3 border border-white">
                  <FontAwesomeIcon icon={faSlidersH} className="w-4 h-4 mr-2 dark:text-pink dark:text-white" />
                  <span>Manage Categories</span>
                </button>
              </div>
            </div>
            <TabNavigation context="productManagement" searchTerm={""}></TabNavigation>
          </div>
       

       </div>
    </div>
    </>
    
  );
};

export default Home;
