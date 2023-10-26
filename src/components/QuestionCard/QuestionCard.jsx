/* eslint-disable eqeqeq */
import Button from "../Button/Button";
import StatusBar from "../StatusBar/StatusBar";
import { useState, useEffect } from "react";
import SubmitButton from "../SubmitButton/SubmitButton";
import { Modal } from "flowbite-react";
import CardModal from "../Modal/CardModal";



function QuestionCard({text1, text2, text3, options, popupPrompt, bannerImage,questionType, statusBarValue, changeQuestion, isSidebarOpen}){
  const [popUpText, setPopUpText] = useState(false)
  const [isGreen, setIsGreen] = useState(false)
  const [isFocused, setFocused] = useState()

  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [cards, setCards] = useState([]);

  const modalHeaderSample = "Sample Header"
  const modalContentSample = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

const openModal = (content) => {
    setModalContent(content);
    setModalVisible(true);
};

const closeModal = () => {
    setModalVisible(false);
    setModalContent(null);
}


  useEffect(() => {
    if (!!popupPrompt) { setPopUpText(true) }
    else { setPopUpText(false) }
  }, [popupPrompt])

  function handleClick(e) {
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
            <div className="flex justify-center items-center gap-2" onClick={() => {
              openModal(
                  <CardModal content={modalContentSample}/>)}}>
              <img src='/icon.png' width={15} style={{ height: 15, }} alt="I icon" />
              <p className="text-xs text-gray-500">{popupPrompt}</p>
            </div>
          }
        </div>

          <SubmitButton text={"Onward"} resetFocus={resetFocus} changeQuestion={changeQuestion} handleGreen={setIsGreen} isGreen={isGreen}/>
      </div>
      {modalVisible && (
          <div className="flex flex-wrap gap-4">
            <Modal
              dismissible
              show={modalVisible}
              size={"xl"}
              onClose={closeModal}>
              <Modal.Header>Header</Modal.Header>
              <Modal.Body>
              <div className="space-y-6 p-6">
                {modalContent}
              </div>
              </Modal.Body>
            </Modal>
            </div>
          )}
    </div>

    
  )
}

export default QuestionCard;
