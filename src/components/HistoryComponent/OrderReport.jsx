import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';

const OrderReport = () => {
  return (
    <div className="bg-navy p-4 md:p-8 rounded-lg ml-3.5 mt-1 w-full dark:bg-white dark:text-black md:w-auto">
      {/* Header container */}
      <div className="flex justify-between mb-6">
        <h1 className="text-white text-xl md:text-2xl font-semibold dark:bg-white dark:text-black">Order Report</h1>
        <button className="bg-navy dark:bg-white dark:text-pink dark:border-pink hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded flex items-center justify-center w-full sm:w-auto mb-4 md:mb-0 md:w-1/5 p-3 border border-white" onClick={() => {console.log("filter order")}}>
                  <FontAwesomeIcon icon={faSlidersH} className="w-4 h-4 mr-2" />
                  <span>Filter Order</span>
         </button>
      </div>
      <div className="overflow-x-auto" style={{ maxHeight: '430px' }}>
        <table className="w-full text-sm md:text-base">
          <thead>
            <tr className="text-white dark:bg-white dark:text-black">
              <th className="px-2 py-3">Order ID</th>
              <th className="px-2 md:px-4 py-3">Items</th>
              <th className="px-2 md:px-4 py-3">Total Payment</th>
              <th className="px-2 md:px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr key="separator"><td className="pt-3 pb-7" colSpan="4"><hr className="border-t-1 border-gray-500 w-full" /></td></tr>
            {[...Array(20)].map((_, index) => (
              <tr className="text-gray-200 dark:bg-white dark:text-black" key={index}>
                <td className="px-2 md:px-4 py-3">#127383750381738</td>
                <td className="px-2 md:px-4 py-3">Beds with side table</td>
                <td className="px-2 md:px-4 py-3">$125</td>
                <td className="px-2 md:px-4 py-3">
                  <span className="px-2 md:px-4 py-1 rounded-full bg-lightRed dark:bg-lightestRed font-semibold text-pink text-xs md:text-sm">
                    Completed
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderReport;
