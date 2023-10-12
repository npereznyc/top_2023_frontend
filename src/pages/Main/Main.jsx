import { useState } from "react";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import Landing from "../Landing/Landing";
import Welcome from '../Welcome/Welcome'

function Main(){
    const [currentStage, setCurrentStage] = useState('landing');

    const goToWelcome = () => setCurrentStage('welcome');
    const goToQuiz = () => setCurrentStage('quiz');

    return (
        <div>
            {currentStage === 'landing' && (
                <Landing goToWelcome={goToWelcome}/>
                // <div>
                //     <h1>Credit Hike</h1>
                //     <button onClick={goToWelcome}>Let's Go!</button>
                // </div>
            )}

            {currentStage === 'welcome' && (
                <Welcome goToQuiz={goToQuiz}/>
            )}

            {currentStage === 'quiz' && (
                <QuestionCard 
                bannerImage={'/compass.png'} 
                popupPrompt={"What's credit? And credit history?"} 
                text1={'Complete the following sentence...'} 
                text2={'My credit history is: '} 
                option1={'Nonexistent'} 
                option2={'Limited'} 
                option3={'Moderate'} 
                option4={'Extensive'} 
                statusBarValue={'25'}/>
            )}
        </div>
    )
}

export default Main;