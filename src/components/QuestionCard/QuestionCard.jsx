import Button from "../Button/Button";
import StatusBar from "../StatusBar/StatusBar";
import { useState, useEffect } from "react";
import SubmitButton from "../SubmitButton/SubmitButton";

function QuestionCard({text1, text2, option1, option2, option3, option4, popupPrompt, bannerImage}){
  const [popUpText, setPopUpText] = useState(false)
  const [isGreen, setIsGreen] = useState(false)
  const [isFocused, setFocused] = useState()

  useEffect(()=>{
    if(!!popupPrompt){setPopUpText(true)}
    else{setPopUpText(false)}
  }, [popupPrompt])
  
  function handleClick(e){
    console.log('handleCLick:', e.target.id)
    changeFocusColor(e.target.id)
    setIsGreen(true)
  }

  function changeFocusColor(id){
    setFocused(id)
    console.log('focus State', isFocused)
  }

  return(
    <div className="flex items-center h-screen w-full flex-col">
        <StatusBar value={'100'}/>
        <div className="flex flex-col pt-10 pb-20 gap-10 items-center h-full w-full">
        <img src={bannerImage} alt="compass"/>
        <div className="flex flex-col gap-4">
          <p>{text1}</p>
          <p>{text2}</p>
        </div>
        <div className="w-10/12 flex items-center flex-col gap-5" >
          <Button text={option1} handleClick={handleClick} focusId={isFocused} id={1}/>
          <Button text={option2} handleClick={handleClick} focusId={isFocused} id={2}/>
          <Button text={option3} handleClick={handleClick} focusId={isFocused} id={3}/>
          <Button text={option4} handleClick={handleClick} focusId={isFocused} id={4}/>
        </div>
        <div className="flex flex-col justify-center items-center gap-10">
          {popUpText && 
            <div className="flex justify-center items-center gap-2">
              <img src='/icon.png' width={15} style={{height: 15,}} alt="I icon" /> 
              <p className="text-xs text-gray-500">{popupPrompt}</p>
            </div>
          }
        </div>
          <SubmitButton text={"Onward"} isGreen={isGreen}/>
      </div>
    </div>
  )
}

export default QuestionCard;
