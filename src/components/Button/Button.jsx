function Button({text, id, focusId, handleClick}){
  let buttonStyle 
  // eslint-disable-next-line eqeqeq
  if(focusId != id){
    buttonStyle = 'w-11/12 h-11 rounded-lg bg-gray-200 flex items-center justify-center'
  }
  else{
    buttonStyle = 'w-11/12 h-11 rounded-lg bg-violet-200 flex items-center justify-center shadow-indigo-500/50'
  }
  return(

      <div id={id} onClick={handleClick} className={buttonStyle}>
        <p  id={id} className="text-indigo-950 font-semibold">{text}</p>
      </div>

  )
}

export default Button;
