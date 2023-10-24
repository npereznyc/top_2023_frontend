import { useState } from "react";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import Landing from "../Landing/Landing";
import Welcome from '../Welcome/Welcome'
import Onboarding from "../Onboarding/Onboarding";
import NavBar from "../../components/NavBar/NavBar";

function Main({isSidebarOpen, toggleSidebar}) {
    const [currentStage, setCurrentStage] = useState('landing');
    // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // const toggleSidebar = () => {
    //     setIsSidebarOpen(!isSidebarOpen);
    // };

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
                        bannerImage={'/compass.png'}
                        popupPrompt={"What's credit? And credit history?"}
                        text1={'Complete the following sentence...'}
                        text2={'My credit history is: '}
                        option1={'Nonexistent'}
                        option2={'Limited'}
                        option3={'Moderate'}
                        option4={'Extensive'}
                        statusBarValue={'25'} />
                        </div>
                </div>

            )}
        </div>
    )
}

export default Main;