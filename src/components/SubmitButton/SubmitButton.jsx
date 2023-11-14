import React from "react";
import { Link } from "react-router-dom";

function SubmitButton({text, isGreen, changeQuestion, resetFocus, handleGreen, isActive, payment, to}){
  let color = 'bg-stone-300 w-7/12 h-14 rounded-lg flex items-center justify-center'
  
  if(isGreen){
    color = 'bg-lime-600 w-7/12 h-14 rounded-lg flex items-center justify-center'
  }

  function handleClick(){
    if(isGreen || isActive){
      console.log('Click')
      resetFocus()
      handleGreen(false)
      changeQuestion(payment)
    }
  }

  const buttonContent = (
    <div className="flex items-center justify-center gap-2">
      <p className="text-white font-semibold">{text}</p>
      <img src="/rightArrow.png" alt="arrow" style={{ height: '30px', width: '20px' }} />
    </div>
  );

  return(
    <div onClick={handleClick} className={color}>
      {to ? (
        <Link to={to} style={{ textDecoration: 'none' }}>
          {buttonContent}
        </Link>
      ) : (buttonContent)}
    </div>
  );
}

export default SubmitButton;
