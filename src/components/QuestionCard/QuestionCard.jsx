/* eslint-disable no-unused-expressions */
/* eslint-disable eqeqeq */
import React from "react";
import Button from "../Button/Button";
import StatusBar from "../StatusBar/StatusBar";
import { useState, useEffect } from "react";
import SubmitButton from "../SubmitButton/SubmitButton";
import { Modal } from "flowbite-react";
import CardModal from "../Modal/CardModal";
import * as cardsAPI from "../../utilities/cards-api";
import "./QuestionCard.css";

function QuestionCard({
  text1,
  text2,
  text3,
  options,
  date,
  takeoutSpend,
  takeoutCost,
  nightOutSpend,
  nightOutCost,
  weekendSpend,
  weekendCost,
  popupPrompt,
  modalText,
  bannerImage,
  questionType,
  statusBarValue,
  changeQuestion,
  statementModalHeading1,
  statementModalHeading2,
  statementModal1,
  statementModal2,
  resetQuiz
}) {
  const [popUpText, setPopUpText] = useState(false);
  const [isGreen, setIsGreen] = useState(false);
  const [isFocused, setFocused] = useState();

  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const [cards, setCards] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedCards, setSelectedCards] = useState([]);
  const [chosenCard, setChosenCard] = useState();
  const [cardAPR, setCardAPR] = useState([]);
  const [aprValues, setAprValues] = useState([]);

  const [spend, setSpend] = useState();
  const [totalBalance, setTotalBalance] = useState(0);
  const [payment, setPayment] = useState(null)

  const [selectedQuestion, setSelectedQuestion] = useState(null)

  const [activeModalContent, setActiveModalContent] = useState(null)
  const [interestText, setInterestText] = useState([]);
  const [isPayFullPage, setIsPayFullPage] = useState(true)

  const cardDescriptions = {
    "Poor-Fair":
      "This card is best suited for people with credit scores of 619 or less. This means that if you have a credit score of 619 or lower, you are most likely to get approved for this card.",
    Good: "This card is best suited for people with credit scores between 620-719. This means that if you have a credit score between 620-719, you are likely to get approved for this card.",
    Great:
      "This card is best suited for people with credit scores between 720 or greater. This means that if you have a credit score of 720 or higher, you are likely to get approved for this card.",
  };

  useEffect(function () {
    async function getCards() {
      const cards = await cardsAPI.getAll();
      setCards(cards);
    }

    getCards();
  }, []);

  useEffect(() => {
    if (questionType === 'none') {
      setIsGreen(true)
    }
  })

  useEffect(() => {
    let newTotal = 0;
    setTotalBalance(newTotal)
  }, [spend])

  useEffect(() => {
    if (['takeout', 'nightOut', 'weekend'].includes(spend)) {
      const costMap = {
        takeout: takeoutCost,
        nightOut: nightOutCost,
        weekend: weekendCost,
      };

      // Use reduce to sum the costs
      if (Array.isArray(costMap[spend])) {
        const newTotal = costMap[spend].reduce((acc, current) => acc + current, 0);
        setTotalBalance(newTotal);
      }
    }
  }, [spend, takeoutCost, nightOutCost, weekendCost]);

  console.log('totalbalance: ', totalBalance, typeof (totalBalance))

  const handleCreditSelect = (option) => {
    setSelectedOption(option);

    if (option === "Just getting started (0-619)") {
      const poorFairCards = cards.filter((card) => card.creditGroup != "Great");
      setSelectedCards(poorFairCards);

      const aprValues = poorFairCards.map((card) => card.apr["Poor-Fair"]);
      setAprValues(aprValues);
    } else if (option === "On it's way up (620-719)") {
      const goodCards = cards.filter((card) => card.creditGroup != "Great");
      setSelectedCards(goodCards);

      const aprValues = goodCards.map((card) => card.apr["Good"]);
      setAprValues(aprValues);
    } else if (option === "Pro status (720-850)") {
      const greatCards = cards.filter(
        (card) => card.creditGroup != "Poor-Fair"
      );
      setSelectedCards(greatCards);

      const aprValues = greatCards.map((card) => card.apr["Great"]);
      setAprValues(aprValues);
    }

    // setCardAPR(aprValues);
  };

  const handleCardSelect = (option) => {
    if (option === "/cardOne.png" && selectedCards.length > 0) {
      const cardOne = selectedCards[0];
      setChosenCard(cardOne);
      setCardAPR(aprValues[0]);
      openModal();
    } else if (option === "/cardTwo.png" && selectedCards.length > 0) {
      const cardTwo = selectedCards[1];
      setChosenCard(cardTwo);
      setCardAPR(aprValues[1]);
      openModal();
    }
  };

  const handleSpend = (option) => {
    if (option === '$ Takeout & TV') {
      setSpend('takeout')
    } else if (option === '$$ Night out with friends') {
      setSpend('nightOut')
    } else if (option === '$$$ Weekend cabin getaway') {
      setSpend('weekend')
    }
    console.log("After setSpend, spend is:", spend);
  };
  console.log('CARD APR = ', cardAPR)

  const openModal = (content) => {
    setModalContent(content);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalContent(null);
  };

  useEffect(() => {
    if (!!popupPrompt) {
      setPopUpText(true);
    } else {
      setPopUpText(false);
    }
  }, [popupPrompt]);

  function handleClick(id) {
    console.log("handleClick:", id);
    changeFocusColor(id);
    setIsGreen(true);
    if (questionType === 'singleOption') {
      setSelectedQuestion(id)
    }
  }

  function changeFocusColor(id) {
    setFocused(id);
    console.log("focus State", isFocused);
  }

  function resetFocus() {
    setFocused(null);
  }

  let currentStyle = "";

  if (questionType == "regular") {
    currentStyle = "w-10/12 flex items-center flex-col gap-5";
  } else if (questionType == "twoImages") {
    currentStyle = "flex flex-row gap-5";
  } else if (questionType == "singleOption" || questionType === 'singleOption2') {
    currentStyle = "w-10/12 flex items-center flex-col gap-5";
  } else if (questionType == 'pay-bill') {
    currentStyle = "w-10/12 flex gap-5"
  }


  const payBill = (option) => {
    console.log(typeof (totalBalance))
    if (option === 'Pay the minimum') {
      questionType == 'none'
      return '($35)'
    } else if (option === 'Pay the whole thing off') {
      return `($${totalBalance.toFixed(2)})`
    }
  }

  const handlePayment = (option) => {
    if (option === 'Pay the minimum') {
      setPayment('result-2')
      setIsPayFullPage(false)
    } else if (option === 'Pay the whole thing off') {
      setPayment('result-1')
      setIsPayFullPage(true)
    }
  }
  console.log('pay full? ', isPayFullPage)

  const openSpecificModal = (contentIndex) => {
    setActiveModalContent(contentIndex)
    let content;
    if (contentIndex === 2) {
      content = calculateInterest()
      const interestTextArray = calculateInterest()
      setInterestText(interestTextArray)
    } else {
      content = modalText[contentIndex]
    }
    openModal(<CardModal content={content} />)
    console.log('interestTextArray = ', interestTextArray)
  }

  const calculateInterest = () => {
    const interestRate = cardAPR * 100
    const interestAmount = totalBalance * cardAPR
    const newBalance = totalBalance + interestAmount
    const interestFees = newBalance - totalBalance

    const text1 = `Balance $${totalBalance.toFixed(2)} + ${interestRate.toFixed(1)}% interest = `
    const text2 = `$${newBalance.toFixed(2)}`
    const text3 = "That's an expensive month!"
    const text4 = `You paid off some of your credit card bill but accrued $${interestFees.toFixed(2)} in interest and fees, making your monthly expenses higher than needed.`

    return [text1, text2, text3, text4]
  }

  const interestTextArray = calculateInterest()


  return (
    <div className="flex items-center h-screen w-full flex-col">
      {(questionType != "result-1" && questionType != "result-2") && (
        <StatusBar value={statusBarValue} />
      )}

      <div className="flex flex-col pt-10 pb-20 gap-10 items-center h-full w-full">
        {(questionType != "result-1" && questionType != "result-2") && (
          <div>
            <img src={bannerImage} alt="compass" className="mx-auto" />
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="w-3/4 text-lg text-center mt-5 mb-5">{text1}</p>
              <p className="w-3/4 text-xl text-center font-bold">{text2}</p>
              <p className="w-3/4 text-lg text-center">{text3}</p>
            </div>
          </div>
        )}

        {(questionType === 'regular' || questionType === 'twoImages') && (
          <div className={currentStyle}>
            {options &&
              options.map((option, idx) => (
                <Button
                  key={idx}
                  text={option}
                  questionType={questionType}
                  handleClick={handleClick}
                  focusId={isFocused}
                  id={idx + 1}
                  handleCreditSelect={handleCreditSelect}
                  handleCardSelect={handleCardSelect}
                  handleSpend={handleSpend}
                />
              ))}
          </div>
        )}

        {(questionType === 'singleOption') && (
          <div className={currentStyle}>
            {options &&
              options.map((option, idx) => (
                <Button
                  key={idx}
                  text={option}
                  questionType={questionType}
                  handleClick={handleClick}
                  focusId={isFocused}
                  id={idx + 1}
                  handleCreditSelect={handleCreditSelect}
                  handleCardSelect={handleCardSelect}
                  handleSpend={handleSpend}
                  changeQuestion={changeQuestion}
                />
              ))}
          </div>
        )}

        {(questionType === 'singleOption2') && (
          <div className={currentStyle}>
            {options &&
              options.map((option, idx) => (
                <Button
                  key={idx}
                  text={option}
                  questionType={questionType}
                  handleClick={handleClick}
                  focusId={selectedQuestion}
                  id={idx + 1}
                  handleCreditSelect={handleCreditSelect}
                  handleCardSelect={handleCardSelect}
                  handleSpend={handleSpend}
                />
              ))}
          </div>
        )}

        {/* Statement Page: */}
        {questionType === 'none' && (
          <div className="bg-[#EBEBEB] rounded-lg h-100 w-80 p-4">
            <p className="statement-title mb-2.5 ml-1.5">Your Statement</p>
            {['takeout', 'nightOut', 'weekend'].includes(spend) && [0, 1, 2].map((_, i) => {
              const costMap = {
                takeout: takeoutCost,
                nightOut: nightOutCost,
                weekend: weekendCost,
              }
              const spendMap = {
                takeout: takeoutSpend,
                nightOut: nightOutSpend,
                weekend: weekendSpend
              }
              return (

                <div key={i} className="bg-white rounded-lg h-18 w-full mb-5 p-2.5 flex flex-col justify-around">
                  <div className="flex justify-between mt-1.5">
                    <span className="text-[#B4B4B4] ml-1.5">{date}</span>
                    <span className="text-[#6846BC] mr-1.5">${costMap[spend] ? costMap[spend][i] : ''}</span>
                  </div>
                  <span className="ml-1.5 font-bold">{spendMap[spend] ? spendMap[spend][i] : ''}</span>
                </div>
              )
            })}
            <div className="bg-white rounded-lg h-12 w-full mb-2 p-2 flex flex-col justify-around border-2 border-solid border-[#A182EB]">
              <p><span className="font-bold ml-1.5">Total Balance:</span> ${totalBalance.toFixed(2)}</p>
            </div>
          </div>
        )}

        {/* Pay-Bill Page: */}
        {questionType === 'pay-bill' && (
          <>
            <p><span className="pay-bill-title">Total Balance:</span> <span className="pay-bill-balance">${totalBalance.toFixed(2)}</span></p>
            <div className={currentStyle}>
              {options &&
                options.map((option, idx) => (
                  <Button
                    className='flex-col'
                    key={idx}
                    text={option}
                    subText={payBill(option, totalBalance.toFixed(2))}
                    questionType={questionType}
                    handleClick={handleClick}
                    focusId={isFocused}
                    id={idx + 1}
                    handleCreditSelect={handleCreditSelect}
                    handleCardSelect={handleCardSelect}
                    handleSpend={handleSpend}
                    handlePayment={handlePayment}
                  />
                ))}
            </div>
          </>
        )}

        {/* Popup Text */}
        {(questionType != "result-1" && questionType != "result-2") && (
          <div className="flex flex-col justify-center items-center gap-10">
            {popUpText && (
              <div
                className="flex justify-center items-center gap-2"
                onClick={() => {
                  openModal(<CardModal content={modalText} />);
                }}
              >
                {questionType != 'twoImages' && questionType != 'none' && questionType != 'pay-bill' && (
                  <img
                    src="/icon.png"
                    width={15}
                    style={{ height: 15 }}
                    alt="I icon"
                  />
                )}
                {questionType === 'none' || questionType === 'pay-bill' && (
                  <img
                    src="/purple-icon.png"
                    width={18}
                    style={{ height: 18 }}
                    alt="purple icon"
                  />
                )}
                {questionType != 'none' && questionType != 'pay-bill' && (
                  <p className="text-xs text-gray-500">{popupPrompt}</p>
                )}
                {questionType === 'none' && (
                  <p className="statement-popup-text">{popupPrompt}</p>
                )}
                {questionType === 'pay-bill' && (
                  <p className="pay-bill-popup-text">{popupPrompt}</p>
                )}
              </div>
            )}
          </div>
        )}

        {/* Submit Button */}
        {(questionType != "result-1" && questionType != "result-2") && (
          <SubmitButton
            text={"Onward"}
            resetFocus={resetFocus}
            changeQuestion={changeQuestion}
            handleGreen={setIsGreen}
            isGreen={questionType === 'singleOption2' || isGreen}
            isActive={questionType === 'none'}
            payment={payment}
          />
        )}

        {/* "Pay Whole Thing Off" Page */}
        {(questionType === "result-1") && (
          <div className="flex flex-col items-center justify-center">
            <div>
              <p className="results">{text1}</p>
              <p className="trail-blazer">{text2}</p>
              <br />
              <img src={bannerImage} alt="compass" className="mx-auto yay" />
              <br />
              <p className="sub-text">{text3}</p>
            </div>
            <br />

            {/* Popup Text #1: Result-1 */}
            <div className="flex flex-col justify-center items-center gap-10">
              {popUpText && popupPrompt[0] === 'What does that mean?' && (
                <div
                  className="flex justify-center items-center gap-2"
                  onClick={() => openSpecificModal(0)}
                >
                  <img src="/purple-icon.png" width={15} style={{ height: 15 }} alt="I icon" />
                  <p className="popup-1">{popupPrompt[0]}</p>
                </div>
              )}
            </div>

            <br />
            <br />
            <br />

            <div className="frame-2 flex flex-col items-center justify-center">
              <br />
              <br />
              <p className="conquer">You’ve conquered your credit score!</p>
              <br />
              <p className="tip-1">Keep using your card wisely to earn credit and unlock future investments like buying a car or home. Keep that score up!</p>
              <br />

              {/* Popup Text #2: Result-1 */}
              <div className="flex flex-col justify-center items-center gap-10">
                {popUpText && popupPrompt[1] === 'Tell me more' && (
                  <div
                    className="flex justify-center items-center gap-2"
                    onClick={() => openSpecificModal(1)}
                  >
                    <img src="/purple-icon.png" width={15} style={{ height: 15 }} alt="I icon" />
                    <p className="popup-1">{popupPrompt[1]}</p>
                  </div>
                )}
              </div>

              <img src="/mountain.png" alt="mountain" className="mx-auto p-10" />
              <p className="tip-1">Some months we navigate tougher terrain. Want to see what you’d owe if you didn’t pay your full bill?</p>

              {/* Popup Text #3: Result-1 */}
              <div className="flex flex-col justify-center items-center gap-10 pb-6">
                {popUpText && popupPrompt[2] === 'Show me!' && (
                  <div
                    className="flex justify-center items-center gap-2"
                    onClick={() => openSpecificModal(2)}
                  >
                    <img src="/purple-icon.png" width={15} style={{ height: 15 }} alt="I icon" />
                    <p className="popup-1">{popupPrompt[2]}</p>
                  </div>
                )}
              </div>
              <br />

              <SubmitButton
                text={"Take the quiz again"}
                resetFocus={resetFocus}
                changeQuestion={resetQuiz}
                handleGreen={setIsGreen}
                isGreen={!isGreen}
                isActive={questionType === 'none'}
              />
              <br />
              <SubmitButton
                text={"Explore glossary"}
                resetFocus={resetFocus}
                isGreen={!isGreen}
                to="/glossary"
                changeQuestion={changeQuestion}
                handleGreen={setIsGreen}
                isActive={questionType === 'none'}
              />
              <br />
              <SubmitButton
                text={"Choosing a card"}
                resetFocus={resetFocus}
                changeQuestion={resetQuiz}
                handleGreen={setIsGreen}
                isGreen={!isGreen}
                isActive={questionType === 'none'}
                to="https://files.consumerfinance.gov/f/documents/cfpb_adult-fin-ed_how-to-find-the-best-credit-card.pdf"
              />
              <br />
            </div>

          </div>
        )}

        {/* "Pay Minimum" Page*/}
        {(questionType === "result-2") && (
          <div className="flex flex-col items-center justify-center">
            <div>
              <p className="results">{text1}</p>
              <p className="trail-blazer">{text2}</p>
              <br />
              <img src={bannerImage} alt="compass" className="mx-auto yay" />
              <br />
              <p className="sub-text">{text3}</p>
            </div>
            <br />

            {/* Popup Text #1: Result-2 */}
            <div className="flex flex-col justify-center items-center gap-10">
              {popUpText && (
                <div
                  className="flex justify-center items-center gap-2"
                  onClick={() => openSpecificModal(0)}

                >
                  <img src="/purple-icon.png" width={15} style={{ height: 15 }} alt="I icon" />
                  <p className="popup-1">{popupPrompt[0]}</p>
                </div>
              )}
            </div>

            <br />
            <br />
            <br />
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 393 162" fill="none">
              <path d="M393 0L393 162H0L393 0Z" fill="#EFE8FF" />
            </svg>
            <div className="frame-1 flex flex-col items-center justify-center">
              <br />
              <br />
              <p className="conquer">Your credit score is low and can use some work! </p>
              <br />
              <p className="tip-1">But with practice, you can achieve those dream home goals.</p>
              <br />

              {/* Popup Text #2: Result-2 */}
              <div className="flex flex-col justify-center items-center gap-10">
                {popUpText && (
                  <div
                    className="flex justify-center items-center gap-2"
                    onClick={() => openSpecificModal(1)}
                  >
                    <img src="/purple-icon.png" width={15} style={{ height: 15 }} alt="I icon" />
                    <p className="popup-1">{popupPrompt[1]}</p>
                  </div>
                )}
              </div>

              <img src="/cloudyMountain.png" alt="cloudy mountain" className="mx-auto p-10" />
              <p className="tip-1">Some months we navigate tougher terrain and can’t pay the full bill. Unfortunately, you’ll be paying for your month, plus some.</p>

              {/* Popup Text #3: Result-2 */}
              <div className="flex flex-col justify-center items-center gap-10 pb-6">
                {popUpText && (
                  <div
                    className="flex justify-center items-center gap-2"
                    onClick={() => openSpecificModal(2)}
                  >
                    <img src="/purple-icon.png" width={15} style={{ height: 15 }} alt="I icon" />
                    <p className="popup-1">{popupPrompt[2]}</p>
                  </div>
                )}
              </div>
              <br />
              <SubmitButton
                text={"Take the quiz again"}
                resetFocus={resetFocus}
                changeQuestion={resetQuiz}
                handleGreen={setIsGreen}
                isGreen={!isGreen}
                isActive={questionType === 'none'}
              />
              <br />
              <SubmitButton
                text={"Explore glossary"}
                resetFocus={resetFocus}
                isGreen={!isGreen}
                to="/glossary"
                changeQuestion={changeQuestion}
                handleGreen={setIsGreen}
                isActive={questionType === 'none'}
              />
              <br />
              <SubmitButton
                text={"Choosing a card"}
                resetFocus={resetFocus}
                changeQuestion={resetQuiz}
                handleGreen={setIsGreen}
                isGreen={!isGreen}
                isActive={questionType === 'none'}
                to="https://files.consumerfinance.gov/f/documents/cfpb_adult-fin-ed_how-to-find-the-best-credit-card.pdf"
              />
              <br />
            </div>
          </div>

        )}

      </div>

      {modalVisible && (
        <div className="flex flex-wrap gap-4">
          <Modal dismissible show={modalVisible} onClose={closeModal}>
            <div className="custom-modal">
              <Modal.Header className="modal-header">

                {(questionType === "regular" || questionType === "none") && (
                  <img src="/question-mark.png" alt="question-mark logo" />
                )}

                {questionType === "twoImages" && chosenCard && (
                  <img
                    src={
                      aprValues[0] === cardAPR ? "/cardOne.png" : "/cardTwo.png"
                    }
                    alt={aprValues[0] === cardAPR ? "card-one" : "card-two"}
                    style={{ width: 75 }}
                  />
                )}

                {questionType === "pay-bill" && (
                  <img src="/exclamation.png" alt="exclamation-mark logo" />
                )}

                <span>
                  {questionType === "regular" && [popupPrompt]}
                  {(questionType === "none" || questionType === "pay-bill") && [statementModalHeading1]}
                  {questionType === "twoImages" &&
                    (aprValues[0] === cardAPR ? "Card One" : "Card Two"
                    )}
                </span>

              </Modal.Header>
              <Modal.Body>
                {console.log("Debug - popupPrompt:", popupPrompt)}

                {(questionType === "regular" || questionType === "pay-bill") && (
                  <div className="modal-body-regular">
                    <p>{modalText ? modalText[0] : ''}</p><br />
                    <p>{modalText ? modalText[1] : ''}</p><br />
                    <p>{modalText ? modalText[2] : ''}</p>
                  </div>
                )}

                {questionType === "twoImages" && chosenCard && chosenCard.name && (
                  <div className="modal-body-twoImages">
                    <p>APR: {(cardAPR * 100).toFixed(1)}%</p>
                    <p>Late Fee: ${chosenCard.lateFee}</p>
                    <p>Grace Period: {chosenCard.gracePeriod} days</p>
                    <p>Rewards: {chosenCard.rewards}</p>
                    <br />
                    <p>{cardDescriptions[chosenCard.creditGroup]}</p>
                  </div>
                )}

                {questionType === "none" && (
                  <div className="modal-body-regular">
                    <p>{statementModal1 ? statementModal1 : ''}</p><br />
                    <p style={{ fontSize: "1.3rem", fontWeight: "600" }}>{statementModalHeading2 ? statementModalHeading2 : ''}</p><br />
                    <p>{statementModal2 ? statementModal2 : ''}</p>
                  </div>
                )}

                {activeModalContent === 0 && (
                  <>
                    <img src="/question-mark.png" alt="question-mark logo" />
                    <div className="modal-body-regular">
                      {isPayFullPage ? (
                        <p>{modalText[0]}</p>
                      ) : (
                        <p>{interestTextArray[interestTextArray.length - 1]}</p>
                      )}
                    </div>
                  </>
                )}
                {activeModalContent === 1 && (
                  <>
                    <img src="/question-mark.png" alt="question-mark logo" />
                    <div className="modal-body-regular">
                      <p>{modalText[1]}</p>
                    </div>
                  </>

                )}
                {activeModalContent === 2 && (
                  <>
                    <img src="/exclamation.png" alt="exclamation-mark logo" />

                    <div className="modal-body-regular">
                      <p>{interestTextArray[0]} {interestTextArray[1]}</p>
                      <p>{interestTextArray[2]} </p>
                    </div>
                  </>
                )}
              </Modal.Body>
            </div>
          </Modal>
        </div>
      )}
    </div>
  );
}

export default QuestionCard;
