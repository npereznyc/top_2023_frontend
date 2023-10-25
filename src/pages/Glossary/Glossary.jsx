import NavBar from "../../components/NavBar/NavBar";
import { Dropdown } from 'flowbite-react';
import React, { useState } from 'react';


function Glossary({ isSidebarOpen, toggleSidebar }) {

  const [isOpen, setIsOpen] = useState({ apr: false, balance: false, cashBack: false, credit: false, creditCard: false, creditHistory: false, issuer: false, creditScore: false, gracePeriod: false, interest: false, introApr: false, lateFees: false, network: false, rewards: false, statement: false });

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

        <hr className="border-gray-300 my-4" />

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

        <hr className="border-gray-300 my-4" />

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

        <hr className="border-gray-300 my-4" />

        <div className="relative">
          <span onClick={() => toggleDropdown('credit')} className="cursor-pointer">
            Credit
          </span>
          {isOpen.credit && (
            <div className="mt-2 p-4">
              {/* Your APR content here */}
              APR definition goes here.
            </div>
          )}
        </div>

        <hr className="border-gray-300 my-4" />

        <div className="relative">
          <span onClick={() => toggleDropdown('creditCard')} className="cursor-pointer">
            Credit Card
          </span>
          {isOpen.creditCard && (
            <div className="mt-2 p-4">
              {/* Your Balance content here */}
              Balance definition goes here.
            </div>
          )}
        </div>

        <hr className="border-gray-300 my-4" />

        <div className="relative">
          <span onClick={() => toggleDropdown('creditHistory')} className="cursor-pointer">
            Credit History
          </span>
          {isOpen.creditHistory && (
            <div className="mt-2 p-4">
              {/* Your Cash Back content here */}
              Cash Back definition goes here.
            </div>
          )}
        </div>

        <hr className="border-gray-300 my-4" />      

        <div className="relative">
          <span onClick={() => toggleDropdown('issuer')} className="cursor-pointer">
            Credit Card Issuer
          </span>
          {isOpen.issuer && (
            <div className="mt-2 p-4">
              {/* Your APR content here */}
               definition goes here.
            </div>
          )}
        </div>

        <hr className="border-gray-300 my-4" />

        <div className="relative">
          <span onClick={() => toggleDropdown('creditScore')} className="cursor-pointer">
            Credit Score
          </span>
          {isOpen.creditScore && (
            <div className="mt-2 p-4">
              {/* Your Balance content here */}
               definition goes here.
            </div>
          )}
        </div>

        <hr className="border-gray-300 my-4" />

        <div className="relative">
          <span onClick={() => toggleDropdown('gracePeriod')} className="cursor-pointer">
            Grace Period
          </span>
          {isOpen.gracePeriod && (
            <div className="mt-2 p-4">
              {/* Your Cash Back content here */}
              Cash Back definition goes here.
            </div>
          )}
        </div>

        <hr className="border-gray-300 my-4" />


        <div className="relative">
          <span onClick={() => toggleDropdown('interest')} className="cursor-pointer">
            Interest
          </span>
          {isOpen.interest && (
            <div className="mt-2 p-4">
              {/* Your APR content here */}
               definition goes here.
            </div>
          )}
        </div>

        <hr className="border-gray-300 my-4" />

        <div className="relative">
          <span onClick={() => toggleDropdown('introApr')} className="cursor-pointer">
            Introductory APR
          </span>
          {isOpen.introApr && (
            <div className="mt-2 p-4">
              {/* Your Balance content here */}
               definition goes here.
            </div>
          )}
        </div>

        <hr className="border-gray-300 my-4" />

        <div className="relative">
          <span onClick={() => toggleDropdown('lateFees')} className="cursor-pointer">
            Late Fees
          </span>
          {isOpen.lateFees && (
            <div className="mt-2 p-4">
              {/* Your Cash Back content here */}
              definition goes here.
            </div>
          )}
        </div>

        <hr className="border-gray-300 my-4" />

        <div className="relative">
          <span onClick={() => toggleDropdown('network')} className="cursor-pointer">
            Payment Processing Network
          </span>
          {isOpen.network && (
            <div className="mt-2 p-4">
              {/* Your APR content here */}
               definition goes here.
            </div>
          )}
        </div>

        <hr className="border-gray-300 my-4" />

        <div className="relative">
          <span onClick={() => toggleDropdown('rewards')} className="cursor-pointer">
            Rewards
          </span>
          {isOpen.rewards && (
            <div className="mt-2 p-4">
              {/* Your Balance content here */}
               definition goes here.
            </div>
          )}
        </div>

        <hr className="border-gray-300 my-4" />

        <div className="relative">
          <span onClick={() => toggleDropdown('statement')} className="cursor-pointer">
            Statement
          </span>
          {isOpen.statement && (
            <div className="mt-2 p-4">
              {/* Your Cash Back content here */}
           definition goes here.
            </div>
          )}
        </div>

      </div>
    </>

  )
}

export default Glossary;