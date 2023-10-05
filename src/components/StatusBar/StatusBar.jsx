import './StatusBar.css'
function StatusBar({value}){
  return(
    <>
      <div className="w-4/5 h-8 px-1 py-1 flex items-center mb-4 bg-gray-200 rounded-full dark:bg-gray-700 mt-12">
          <div className="h-5 px-3 bg-violet-600 rounded-full dark:bg-blue-500 w-5" style={{width: value + '%'}}>
            <div className="lightColorHeight bg-violet-300 opacity-70 rounded-full " style={{width: '100%'}}></div>
          </div>
        </div>
    </>
  )
}

export default StatusBar;
