import NavBar from "../../components/NavBar/NavBar";
import { Dropdown } from 'flowbite-react';
import React, { useState } from 'react';


function Glossary({ isSidebarOpen, toggleSidebar }) {

    const [isOpen, setIsOpen] = useState({ apr: false, balance: false, cashBack: false });

    const toggleDropdown = (key) => {
        setIsOpen({ ...isOpen, [key]: !isOpen[key] });
    };

    return (
        <>
            <div className='flex flex-col sm:flex-row'>
                <NavBar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

            </div>
            <div className="h-screen flex flex-col space-y-4 p-4">
      <div className="relative">
        <span onClick={() => toggleDropdown('apr')} className="cursor-pointer">
          APR
        </span>
        {isOpen.apr && (
          <div className="mt-2 p-4">
            {/* Your APR content here */}
            APR definition goes here.
          </div>
        )}
      </div>

      <hr className="border-gray-300 my-4"/>

      <div className="relative">
        <span onClick={() => toggleDropdown('balance')} className="cursor-pointer">
          Balance
        </span>
        {isOpen.balance && (
          <div className="mt-2 p-4">
            {/* Your Balance content here */}
            Balance definition goes here.
          </div>
        )}
      </div>

      <hr className="border-gray-300 my-4"/>

      <div className="relative">
        <span onClick={() => toggleDropdown('cashBack')} className="cursor-pointer">
          Cash Back
        </span>
        {isOpen.cashBack && (
          <div className="mt-2 p-4">
            {/* Your Cash Back content here */}
            Cash Back definition goes here.
          </div>
        )}
      </div>
    </div>
        </>

    )
}

export default Glossary;