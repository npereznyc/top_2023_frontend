import Button from "../Button/Button";

function QuestionCard({text1, text2, option1, option2, option3, option4}){
  return(
    <>
      <div>
        <p>{text1}</p>
        <p>{text2}</p>
        <Button text={option1}/>
        <Button text={option2}/>
        <Button text={option3}/>
        <Button text={option4}/>
      </div>
    </>
  )
}

export default QuestionCard;
