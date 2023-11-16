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

        <div className="main-content flex-grow h-screen flex flex-col space-y-4 p-4 md:pt-20">

          <h1 className="text-3xl font-semibold whitespace-nowrap dark:text-white">Glossary</h1>

          <p>What do all these terms mean? Here’s some simple definitions to help you grow your financial understanding.</p>

          <div className="relative">
            <span onClick={() => toggleDropdown('apr')} className="cursor-pointer">
              APR
            </span>
            {isOpen.apr && (
              <div className="mt-2 p-4">
                {/* Your APR content here */}
                Credit card APR, or Annual Percentage Rate, is the interest rate you'll be charged if you carry a balance on your credit card, and may include added fees. It's essentially the cost of borrowing money from the credit card company.<br /><br />
                If you don't pay your credit card bill in full each month, you'll be charged this interest on the remaining balance, making your purchases more expensive over time. So, a lower APR is better because it means you'll pay less interest if you carry a balance.<br /><br />
                APR gives you a more complete picture of how much a loan or credit card will cost you in total, so you can compare different offers and make informed decisions about your finances.
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
                A credit card balance is the total of all the charges you've made with the card, in other words it’s the amount of money you owe to the credit card company.<br /><br />
                "Carrying a balance" means you haven't paid off the full amount you owe on your credit card by the due date. Instead, you're leaving some or all of the balance unpaid, and the credit card company will usually charge you interest on that unpaid amount.
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
                The term cash back refers to a type of credit card reward. Despite being called ‘cash’ back, this reward can take the form of dollars or points. It is always presented as a percentage and it represents the amount of dollars or points you receive as a bonus when you use your credit card to make a purchase.<br /><br />
                Cash back rewards can be offered in three different ways: flat-rate, in which you receive a fixed percentage of cash back; fixed categories, in which you receive more cash back in specific categories, like travel or groceries; and rotating categories, in which you can choose which categories you receive the most cash back.
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
                Credit is the ability to borrow money or make purchases with the promise to pay for them later. It's like getting a loan or buying something on an "I.O.U." basis, where you agree to settle the debt at a later date.This can take the form of credit cards, loans, mortgages, or other forms of borrowing. <br /><br />
                Building good credit is like earning trust with banks and lenders, making it easier to get loans and credit cards, which can save you money and make it easier to achieve your financial goals, like buying a home or car.
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
                A credit card is a plastic or metal card that you can use to pay for goods or services. When using a credit card, you aren’t directly paying for things from your own funds or bank account, like you would with a debit card or taking cash out of your wallet. Instead, you are temporarily ‘borrowing’ money from the company that issued your credit card, and you will be expected to pay that money back by a certain date.
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
                Credit history is like a financial report card that shows how responsible you've been with borrowing and repaying money. It includes information about your loans, credit cards, and how punctually you've made payments. Lenders use this history to decide whether to approve you for loans or credit cards and what interest rates to offer you.<br /><br />
                To summarize, it’s a record of your financial behavior that affects your ability to borrow money in the future.
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
                Credit card issuers are companies or banks that create and provide credit cards to people. They are the ones who give you the card and allow you to use it to make purchases, whether in stores or online.<br /><br />
                When you use a credit card, you're borrowing money from the credit card issuer, and you'll need to pay them back later, often with added interest or fees if you don't pay your full balance on time.
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
                A credit score is like a numerical grade that tells lenders how risky it might be to lend you money. It's based on your financial history, like how reliably you've paid bills and managed debt. A higher score means you're seen as less risky, making it easier to get loans or credit cards with better terms.<br /><br />
                In simple terms, it's a number that summarizes how good you are at managing money and affects your ability to borrow.<br /><br />
                Keep in mind that you might not always have access to credit score monitoring. You do have the right to request a free credit report every year each from Equifax, Experian and TransUnion, which are the major consumer reporting companies. Additionally, your credit card issuer may offer free credit reports.
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
                A credit card grace period is a specified period of time, typically around 21 to 25 days, during which you can make purchases with your credit card without incurring any interest charges. To avoid paying interest on your credit card balance, you must pay off the full statement balance by the end of the grace period.
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
                Credit card interest is the fee you have to pay when you don't fully pay off your credit card balance every month. Technically, it's the cost of borrowing money from the credit card company.<br /><br />
                When you carry a balance on your credit card, the card issuer charges you interest on the unpaid amount, making your purchases more expensive in the long run. So if you don't want to pay extra, it's best to only spend what you can afford and pay off your credit card balance in full each month.
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
                Introductory APR is a promotional offer given by credit card issuers to new customers. It is a temporary APR of ultra-low to zero percent on purchases for a fixed period of time. An intro APR offer generally lasts between 12-21 months. After this introductory period, the regular APR will be applied to your balance.
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
                A credit card late fee is a penalty imposed by the card issuer when a cardholder doesn't make the minimum payment by the due date. Unlike interest, which accumulates over time, the late fee is a one-time charge added to your balance for failing to make the minimum payment.
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
                A payment processing network, often referred to as a card processing network, is a company that oversees payments made with credit cards. These companies make sure that the money is being securely transferred from your bank or credit card company to the business where you are making a purchase. They also protect both parties from scams. <br /><br />
                Popular payment processing networks include Visa, Mastercard and American Express.
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
                Credit card rewards are perks you earn by using your card, like cash back, points, discounts, or even access to airline lounges. These rewards can be redeemed for gift cards, travel, or cash.<br /><br />
                Be aware that rewards can also be risky, leading to overspending, high interest rates, annual fees, complexity in managing multiple cards, and credit score issues from opening and closing accounts for rewards. While rewards can offer benefits, they should be used cautiously to avoid these pitfalls.
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
                A credit card statement is a monthly bill that tells you how much money you've spent with your credit card, how much you owe, and when you need to make a payment. It also includes a list of your recent transactions and any fees or interest charges.<br /><br />
                Statements are sent either by mail or electronically at least three weeks before the payment is due, but you can find it anytime on your card issuer’s website.
              </div>
            )}
          </div>

        </div>
      </div>
    </>

  )
}

export default Glossary;