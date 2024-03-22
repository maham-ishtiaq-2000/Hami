import React, { useState } from 'react';
import beds from '../../assets/bedWithSideTable.png';

const MostOrdered = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const items = [
        { name: 'Beds with side table', ordered: 2, img: beds },
        { name: 'Beds with side table', ordered: 2, img: beds },
        { name: 'Beds with side table', ordered: 2, img: beds },
        { name: 'Beds with side table', ordered: 2, img: beds },
        { name: 'Beds with side table', ordered: 2, img: beds },
        { name: 'Beds with side table', ordered: 2, img: beds },
        { name: 'Beds with side table', ordered: 2, img: beds },
        { name: 'Beds with side table', ordered: 2, img: beds },
        { name: 'Beds with side table', ordered: 2, img: beds },
        { name: 'Beds with side table', ordered: 2, img: beds },
        { name: 'Beds with side table', ordered: 2, img: beds },
        { name: 'Beds with side table', ordered: 2, img: beds },
        { name: 'Beds with side table', ordered: 2, img: beds },
        { name: 'Beds with side table', ordered: 2, img: beds },
        { name: 'Beds with side table', ordered: 2, img: beds },
    ];

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    return (
        <div className="bg-navy dark:bg-white dark:text-black text-white p-4 h-90screen mt-5 rounded-lg pt-8 relative">
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold">Most Ordered</h2>
                <div>
                <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="text-white bg-navy dark:bg-white dark:text-black hover:bg-gray-800 border border-gray-500 rounded font-medium rounded-lg text-sm px-6 py-3 mr-2 inline-flex items-center"
                        type="button"
                    >
                        Today
                        <svg className="ml-2 w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            {dropdownOpen ? (
                                <path d="M5 15l7-7 7 7" />
                            ) : (
                                <path d="M19 9l-7 7-7-7" />
                            )}
                        </svg>
                    </button>
                    {dropdownOpen && (
                        <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-10">
                            <a href="#" className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-gray-500 hover:text-white">
                                Today
                            </a>
                            <a href="#" className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-gray-500 hover:text-white">
                                This Week
                            </a>
                            <a href="#" className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-gray-500 hover:text-white">
                                This Month
                            </a>
                        </div>
                    )}
                </div>
            </div>
            <div className="w-full bg-gray-500 h-0.5 mt-7 mb-5"></div>
            <div className="space-y-4 overflow-auto" style={{ maxHeight: 'calc(90vh - 150px)' }}>
                        {items.map((item, index) => (
                            <OrderedItem key={index} name={item.name} ordered={item.ordered} imgSrc={item.img} />
                        ))}
            </div>
            <div className="absolute inset-x-0 bottom-0 p-3">
                    <button className="w-full bg-navy dark:bg-white dark:text-pink text-pink font-semibold py-2  border border-pink rounded hover:bg-red">
                        View All
                    </button>
            </div>
        </div>
    );
};

const OrderedItem = ({ name, ordered, imgSrc }) => {
    return (
        <div className="flex items-center">
            <div className="w-20 h-15 rounded-full overflow-hidden mr-3">
                <img src={imgSrc} alt={name} className="w-full h-full object-cover" />
            </div>
            <div>
                <h3 className="text-lg">{name}</h3>
                <p className="text-md text-gray-500">{ordered} Ordered</p>
            </div>
        </div>
    );
};

export default MostOrdered;
