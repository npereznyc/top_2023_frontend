import { useState } from "react";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import Landing from "../Landing/Landing";
import Welcome from '../Welcome/Welcome'
import Onboarding from "../Onboarding/Onboarding";
import NavBar from "../../components/NavBar/NavBar";
import { questions } from "../../data/questionData";

function Main({isSidebarOpen, toggleSidebar}) {
    const [currentStage, setCurrentStage] = useState('landing');
    let [currentQuestion, setCurrentQuestion] = useState(0);


    function changeQuestion(payment){
        if(payment=='result-2') {
            let newQuestion = currentQuestion + 2
            setCurrentQuestion(newQuestion) 
        } else {
            let newQuestion = currentQuestion + 1
            setCurrentQuestion(newQuestion) 
        }       
    }

    const goToWelcome = () => setCurrentStage('welcome');
    const goToOnboarding = () => setCurrentStage('onboarding');
    const goToQuiz = () => setCurrentStage('quiz');

    return (
        <div>
            {currentStage === 'landing' && (
                <Landing goToWelcome={goToWelcome} />
            )}

            {currentStage === 'welcome' && (
                <Welcome goToOnboarding={goToOnboarding} />
            )}

            {currentStage === 'onboarding' && (
                <div className='flex flex-col sm:flex-row'>
                    <NavBar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
                    <div className={`main-content flex-grow`}>
                    <Onboarding goToQuiz={goToQuiz} />
                    </div>
                </div>
            )}

            {currentStage === 'quiz' && (
                <div className='flex flex-col sm:flex-row'>
                    <NavBar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
                    <div className={`main-content flex-grow`}>

                    <QuestionCard
                        isSidebarOpen={isSidebarOpen}
                        questionType={questions[currentQuestion].questionType}
                        bannerImage={questions[currentQuestion].image}
                        popupPrompt={questions[currentQuestion].helperText}
                        modalText={questions[currentQuestion].helperPopUp}

                        statementModalHeading1={questions[currentQuestion].helperPopUpHeading1}
                        statementModal1={questions[currentQuestion].helperPopUpText1}
                        statementModalHeading2={questions[currentQuestion].helperPopUpHeading2}
                        statementModal2={questions[currentQuestion].helperPopUpText2}

                        text1={questions[currentQuestion].headerText}
                        text2={questions[currentQuestion].questionText}
                        text3={questions[currentQuestion].subText}
                        options={questions[currentQuestion].options}
                        date={questions[currentQuestion].date}
                        takeoutSpend={questions[currentQuestion].statement1}
                        takeoutCost={questions[currentQuestion].costs1}
                        nightOutSpend={questions[currentQuestion].statement2}
                        nightOutCost={questions[currentQuestion].costs2}
                        weekendSpend={questions[currentQuestion].statement3}
                        weekendCost={questions[currentQuestion].costs3}
                        statusBarValue={questions[currentQuestion].statusBarValue} 
                        changeQuestion={changeQuestion}
                        currentQuestion={currentQuestion}
                        />
                        </div>
                </div>

            )}
        </div>
    )
}

export default Main;