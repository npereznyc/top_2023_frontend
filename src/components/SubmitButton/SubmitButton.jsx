function SubmitButton({text, isGreen}){
  let color = 'bg-stone-300 w-7/12 h-14 rounded-lg flex items-center justify-center'
  if(isGreen){
    color = 'bg-lime-600 w-7/12 h-14 rounded-lg flex items-center justify-center'
  }

  return(
    <a href="/#" className={color}>
      <div className="flex items-center justify-center gap-2">
        <p className="text-white font-semibold">{text}</p>
        <img src="/rightArrow.png" alt="arrow" style={{height: '30px', width: '20px'}}/>
      </div>
    </a>
  )
}

export default SubmitButton;
