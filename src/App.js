import './App.css';
import QuestionCard from './components/QuestionCard/QuestionCard';
import Welcome from './pages/Welcome/Welcome';
import Main from './pages/Main/Main';

function App() {
  return (
    <div className="App">
     
      {/* <Welcome /> */}
      {/* <QuestionCard bannerImage={'/compass.png'} popupPrompt={"What's credit? And credit history?"} text1={'Complete the following sentence...'} text2={'My credit history is: '} option1={'Nonexistent'} option2={'Limited'} option3={'Moderate'} option4={'Extensive'} statusBarValue={'25'}/> */}
      <Main />
    </div>
  );
}

export default App;
