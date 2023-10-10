import { useState } from "react";
import QuestionCard from "../../components/QuestionCard/QuestionCard";

function Main(){
    const [currentStage, setCurrentStage] = useState('landing');

    const goToWelcome = () => setCurrentStage('welcome');
    const goToQuiz = () => setCurrentStage('quiz');

    return (
        <div>
            {currentStage === 'landing' && (
                <div>
                    <h1>Credit Hike</h1>
                    <button onClick={goToWelcome}>Let's Go!</button>
                </div>
            )}

            {currentStage === 'welcome' && (
                <div>
                    <h1>Welcome to Credit Hike! Explore the peaks and valleys of using a credit card, without the real-life risks.</h1>
                    <button onClick={goToQuiz}>Let's do this</button>
                </div>
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