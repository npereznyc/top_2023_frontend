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
  const [selectedCards, setSelectedCards] = useState([]);// CardSelection
  const [chosenCard, setChosenCard] = useState();


  const modalHeaderCreditScore = "What's a credit score?";
  const modalContentCreditScore = (
    <div>
      <p>
        A credit score is like a numerical grade that tells lenders how risky it
        might be to lend you money. It's based on your financial history, like
        how reliably you've paid bills and managed debt.
      </p>
      <br />
      <p>
        A higher score means you're seen as less risky, making it easier to get
        loans or credit cards with better terms. In simple terms, it's a number
        that summarizes how good you are at managing money and affects your
        ability to borrow.
      </p>
      <br />
      <p>
        Keep in mind that you might not always have access to credit score
        monitoring. You do have the right to request a free credit report every
        year each from Equifax, Experian, and TransUnion, which are the major
        consumer reporting companies. Additionally, your credit card issuer may
        offer free credit reports.
      </p>
    </div>
  );

  useEffect(function () {
    async function getCards() {
      const cards = await cardsAPI.getAll();
      setCards(cards);
    }

    getCards();
  }, []);

  const handleCreditSelect = (option) => {
    setSelectedOption(option);

    if (option === "Just getting started (0-619)") {
      const poorFairCards = cards.filter((card) => card.creditGroup != "Great");
      setSelectedCards(poorFairCards);
    } else if (option === "On it's way up (620-719)") {
      const goodCards = cards.filter((card) => card.creditGroup != "Great");
      setSelectedCards(goodCards);
    } else if (option === "Pro status (720-850)") {
      const greatCards = cards.filter(
        (card) => card.creditGroup != "Poor-Fair"
      );
      setSelectedCards(greatCards);
    }
  };

  const handleCardSelect = (option) => {
    if (option === '/cardOne.png' && selectedCards.length > 0) {
      const cardOne = selectedCards.find((card) => card.name === "CARD 1");;
      setChosenCard(cardOne);
    } else if (option === '/cardTwo.png' && selectedCards.length > 0) {
      const cardTwo = selectedCards.find((card) => card.name === "CARD 2");
      setChosenCard(cardTwo);
    }
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
              />
            ))}
        </div>

        <div className="flex flex-col justify-center items-center gap-10">
          {popUpText && (
            <div
              className="flex justify-center items-center gap-2"
              onClick={() => {
                openModal(<CardModal content={modalContentCreditScore} />);
              }}
            >
              <img
                src="/icon.png"
                width={15}
                style={{ height: 15 }}
                alt="I icon"
              />
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

      {selectedCards && selectedCards.length > 0 && (
        <div>
          {selectedCards.map((card, index) => (
            <div key={index}>
              <h3>{card.name}</h3>
              <p>APR: {(card.apr["Poor-Fair"] * 100).toFixed(1)}%</p>
              <p>Grace Period: {card.gracePeriod} days</p>
              <p>Late Fee: ${card.lateFee}</p>
              <p>Rewards: {card.rewards}</p>
              <br />
            </div>
          ))}
        </div>
      )}

      {modalVisible && (
        <div className="flex flex-wrap gap-4">
          <Modal dismissible show={modalVisible} onClose={closeModal}>
            <div className="custom-modal">
              <Modal.Header className="modal-header">
                <img src="/question-mark.png" alt="question-mark logo" />
                <span>{popupPrompt}</span>
              </Modal.Header>
              <Modal.Body>
                <div className="modal-body">{modalText}</div>
              </Modal.Body>
            </div>
          </Modal>
        </div>
      )}
    </div>
  );
}

export default QuestionCard;
