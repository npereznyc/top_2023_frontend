import './App.css';
import QuestionCard from './components/QuestionCard/QuestionCard';
import Glossary from './pages/Glossary/Glossary';
import Welcome from './pages/Landing/Landing';
import Main from './pages/Main/Main';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Main isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}></Route>
          <Route path='/glossary' element={<Glossary isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}></Route>
        </Routes>
        {/* <Welcome /> */}
        {/* <QuestionCard bannerImage={'/compass.png'} popupPrompt={"What's credit? And credit history?"} text1={'Complete the following sentence...'} text2={'My credit history is: '} option1={'Nonexistent'} option2={'Limited'} option3={'Moderate'} option4={'Extensive'} statusBarValue={'25'}/> */}
      </div>
    </Router>

  );
}

export default App;
