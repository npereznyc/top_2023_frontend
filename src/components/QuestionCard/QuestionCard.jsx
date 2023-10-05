import Button from "../Button/Button";
import StatusBar from "../StatusBar/StatusBar";
import { useState, useEffect } from "react";

function QuestionCard({text1, text2, option1, option2, option3, option4, popupPrompt, bannerImage}){
  const [popUpText, setPopUpText] = useState(false)
  useEffect(()=>{
    if(!!popupPrompt){setPopUpText(true)}
    else{setPopUpText(false)}
  }, [])
  

  return(
    <div className="flex items-center h-screen flex-col">
        <StatusBar value={'100'}/>
        <div className="flex flex-col pt-10 pb-20 gap-20 items-center h-full">
        <img src={bannerImage} alt="compass"/>
        <div>
          <p>{text1}</p>
          <p>{text2}</p>
        </div>
        <div>
          <Button text={option1}/>
          <Button text={option2}/>
          <Button text={option3}/>
          <Button text={option4}/>
        </div>
        <div className="flex flex-col justify-center items-center gap-10">
          {popUpText && 
            <div className="flex justify-center items-center gap-2">
              <img src='/icon.png' width={20} style={{height: 20,}} alt="I icon" /> 
              <p>{popupPrompt}</p>
            </div>
          }
          <Button text={"Onward"} />
        </div>
      </div>
    </div>
  )
}

export default QuestionCard;
