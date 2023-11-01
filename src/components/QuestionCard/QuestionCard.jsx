/* eslint-disable eqeqeq */
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
  isSidebarOpen,
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

  const [spend, setSpend] = useState()

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

  // useEffect(() => {
  //   console.log("spend has been updated:", spend);
  // }, [spend]);

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

    setCardAPR(aprValues);
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
  }

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
  } else if (questionType == "singleOption") {
    currentStyle = "w-10/12 flex items-center flex-col gap-5";
  }

  return (
    <div className="flex items-center h-screen w-full flex-col">
      <StatusBar value={statusBarValue} />
      <div className="flex flex-col pt-10 pb-20 gap-10 items-center h-full w-full">
        <img src={bannerImage} alt="compass" />
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="w-3/4 text-lg text-center">{text1}</p>
          <p className="w-3/4 text-xl text-center font-bold">{text2}</p>
          <p className="w-3/4 text-lg text-center">{text3}</p>
        </div>

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

        {questionType === 'none' && (
          <div className="bg-gray-300 rounded-lg h-100 w-80 p-4">
            <p>Your Statement</p>
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
                <div key={i} className="bg-white rounded-lg h-12 w-full mb-2 p-2 flex flex-col justify-around">
                  <div className="flex justify-between">
                    <span>{date}</span>
                    <span>{costMap[spend] ? costMap[spend][i] : ''}</span>
                  </div>
                  <span className="text-left">{spendMap[spend] ? spendMap[spend][i] : ''}</span>
                </div>
              )
            })}
          </div>
        )}
          
        <div className="flex flex-col justify-center items-center gap-10">
          {popUpText && (
            <div
              className="flex justify-center items-center gap-2"
              onClick={() => {
                openModal(<CardModal content={modalText} />);
              }}
            >
              {questionType === "regular" || "none" && (
                <img
                  src="/icon.png"
                  width={15}
                  style={{ height: 15 }}
                  alt="I icon"
                />
              )}
              <p className="text-xs text-gray-500">{popupPrompt}</p>
            </div>
          )}
        </div>

        <SubmitButton
          text={"Onward"}
          resetFocus={resetFocus}
          changeQuestion={changeQuestion}
          handleGreen={setIsGreen}
          isGreen={isGreen}
        />
      </div>

      {modalVisible && (
        <div className="flex flex-wrap gap-4">
          <Modal dismissible show={modalVisible} onClose={closeModal}>
            <div className="custom-modal">
              <Modal.Header className="modal-header">
                {questionType === "regular" && (
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
                <span>
                  {questionType === "regular" || "none" && [popupPrompt]}
                  {questionType === "twoImages" &&
                    (aprValues[0] === cardAPR ? "Card One" : "Card Two")}
                </span>
              </Modal.Header>
              <Modal.Body>
                <div className="modal-body-regular">
                  {questionType === "regular" || "none" && (
                    <div>
                      <p>{modalText ? modalText[0] : ''}</p><br />
                      <p>{modalText ? modalText[1] : ''}</p><br />
                      <p>{modalText ? modalText[2] : ''}</p>
                    </div>
                  )}
                </div>
                <div className="modal-body-twoImages">
                  {questionType === "twoImages" &&
                    chosenCard &&
                    chosenCard.name && (
                      <div>
                        <p>APR: {(cardAPR * 100).toFixed(1)}%</p>
                        <p>Late Fee: ${chosenCard.lateFee}</p>
                        <p>Grace Period: {chosenCard.gracePeriod} days</p>
                        <p>Rewards: {chosenCard.rewards}</p>
                        <br />
                        <p>{cardDescriptions[chosenCard.creditGroup]}</p>
                      </div>
                    )}
                </div>
              </Modal.Body>
            </div>
          </Modal>
        </div>
      )}
    </div>
  );
}

export default QuestionCard;
