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
    // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // const toggleSidebar = () => {
    //     setIsSidebarOpen(!isSidebarOpen);
    // };q

    function changeQuestion(){
        let newQuestion = currentQuestion + 1
        setCurrentQuestion(newQuestion)
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
                        text1={questions[currentQuestion].headerText}
                        text2={questions[currentQuestion].questionText}
                        text3={questions[currentQuestion].subText}
                        options={questions[currentQuestion].options}
                        statusBarValue={questions[currentQuestion].statusBarValue} 
                        changeQuestion={changeQuestion}
                        />
                        </div>
                </div>

            )}
        </div>
    )
}

export default Main;