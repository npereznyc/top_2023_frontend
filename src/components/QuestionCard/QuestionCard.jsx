/* eslint-disable eqeqeq */
import Button from "../Button/Button";
import StatusBar from "../StatusBar/StatusBar";
import { useState, useEffect } from "react";
import SubmitButton from "../SubmitButton/SubmitButton";


function QuestionCard({text1, text2, text3, options, popupPrompt, bannerImage,questionType, statusBarValue, changeQuestion, isSidebarOpen}){
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
  function resetFocus(){
    setFocused(null)
  }
  let currentStyle = ''
  if(questionType == 'regular'){
    currentStyle = "w-10/12 flex items-center flex-col gap-5"
  }else if(questionType == 'twoImages'){
    currentStyle = "flex flex-row gap-5"
  }
  else if(questionType == 'singleOption'){
    currentStyle = "w-10/12 flex items-center flex-col gap-5"
  }
  

  
  return(
    <div className="flex items-center h-screen w-full flex-col">
        <StatusBar value={statusBarValue}/>
        <div className="flex flex-col pt-10 pb-20 gap-10 items-center h-full w-full">
        <img src={bannerImage} alt="compass"/>
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="w-3/4 text-lg text-center">{text1}</p>
          <p className="w-3/4 text-xl text-center font-bold">{text2}</p>
          <p className="w-3/4 text-lg text-center">{text3}</p>
        </div>
        <div className={currentStyle} >
          {options && options.map((option, idx)=>
            <Button key={idx} text={option} questionType={questionType} handleClick={handleClick} focusId={isFocused} id={idx+1} />
          )}

        </div>
        <div className="flex flex-col justify-center items-center gap-10">
          {popUpText && 
            <div className="flex justify-center items-center gap-2">
              <img src='/icon.png' width={15} style={{height: 15,}} alt="I icon" /> 
              <p className="text-xs text-gray-500">{popupPrompt}</p>
            </div>
          }
        </div>
          <SubmitButton text={"Onward"} resetFocus={resetFocus} changeQuestion={changeQuestion} handleGreen={setIsGreen} isGreen={isGreen}/>
      </div>
    </div>
  )
}

export default QuestionCard;
