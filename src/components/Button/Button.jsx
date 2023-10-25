/* eslint-disable eqeqeq */
function Button({text, id, focusId, handleClick, questionType}){
  let buttonStyle 
  let singleButton
  let imageStyle = 'opacity-100'
  // eslint-disable-next-line eqeqeq
  if(focusId != id){
    singleButton = 'w-6/12 h-32 rounded-lg bg-gray-200 flex items-center justify-center'
    buttonStyle = 'w-11/12 h-11 rounded-lg bg-gray-200 flex items-center justify-center'
    imageStyle = 'opacity-50'
    if(focusId == null){
      imageStyle = 'opacity-100'
    }
  } 
  else if(focusId == id){
    singleButton = 'w-6/12 h-32 rounded-lg bg-violet-200 flex items-center justify-center shadow-indigo-500/50'
    buttonStyle = 'w-11/12 h-11 rounded-lg bg-violet-200 flex items-center justify-center shadow-indigo-500/50'
    imageStyle = 'opacity-100'
  }



  if(questionType == 'twoImages'){
      return(
      <div>
        <img src={text} className={imageStyle}  id={id} onClick={handleClick} alt="imageText"/>
      </div>
      )
  }
  else if(questionType == 'regular'){
    return(
      <div id={id} onClick={handleClick} className={buttonStyle}>
        <p id={id} className="text-indigo-950 font-semibold">{text}</p>
      </div>
      )
  }
  else if(questionType == 'singleOption'){
      return(
      <div id={id} onClick={handleClick} className={singleButton}>
        <p id={id} className="text-indigo-950 font-semibold">{text}</p>
      </div>
      )
  }
}

export default Button;
