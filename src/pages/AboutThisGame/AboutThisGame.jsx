import { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
function AboutThisGame({ isSidebarOpen, toggleSidebar }){
  const [isOpen, setIsOpen] = useState({ apr: false, balance: false, cashBack: false, credit: false, creditCard: false, creditHistory: false, issuer: false, creditScore: false, gracePeriod: false, interest: false, introApr: false, lateFees: false, network: false, rewards: false, statement: false });

  const toggleDropdown = (key) => {
    setIsOpen({ ...isOpen, [key]: !isOpen[key] });
  };

  return(
    <div className="flex flex-col sm:flex-row w-screen">
      <NavBar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <div className="main-content flex-grow h-screen flex flex-col space-y-4 p-4 flex-1 md:pt-20">
        <h1 className="text-3xl font-semibold whitespace-nowrap dark:text-white">About This Game</h1>
        <div className="flex flex-col gap-6 pb-16">
          <p className="text-lg">CreditHike is a journey that simulates the experience of choosing and using a credit card, and paying your monthly bill. Based on the decisions you make, you'll learn about the benefits and risks of using a credit card, and hopefully learn something new! In real life, you may not encounter all the situations presented by the game, but think of it as a learning opportunity or refresher.</p>
          <p className="text-lg">You're not alone in this journey! Explore screen tips if you're feeling stuck, and check out the glossary to learn more about unfamiliar terms. At the end of the journey you'll find results based on your choices and suggestions for where to grow. Don't like your end result? Play again! Think someone could benefit from CreditHike? Share away!</p>
        </div>
      <p className="text-slate-400 italic">CreditHike was created by a team of UX Designers, Software Engineers, and Data Experts participating in The Opportunity Project’s Fall 2023 design sprint. This sprint was in partnership with the Consumer Financial Protection Bureau, who provided open source federal data to inform product design and direction. The credit cards that you choose from represent aggregate credit cards pulled from the CFPB 2022 credit card data set.</p>
      </div>
    </div>
  )
}

export default AboutThisGame;
