import './App.css';
import QuestionCard from './components/QuestionCard/QuestionCard';
import Welcome from './pages/Landing/Landing';
import Main from './pages/Main/Main';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/'>
            <Main />
          </Route>
          <Route path='/glossary'>

          </Route>

        </Routes>

        {/* <Welcome /> */}
        {/* <QuestionCard bannerImage={'/compass.png'} popupPrompt={"What's credit? And credit history?"} text1={'Complete the following sentence...'} text2={'My credit history is: '} option1={'Nonexistent'} option2={'Limited'} option3={'Moderate'} option4={'Extensive'} statusBarValue={'25'}/> */}
      </div>
    </Router>

  );
}

export default App;
