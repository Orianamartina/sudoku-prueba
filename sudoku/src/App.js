
import './App.css';
import {Route, Routes } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import SudokuScreen from './components/Screens/SudokuScreen';
import Tutorial from './components/Tutorial/Tutorial';

function App() {
  return (
    <div className="App">
        
          <Routes>
            <Route exact path = "/" element= {<Landing/>}/>
            <Route exact path = "/play" element = {<SudokuScreen />} />
            <Route exact path ="/howtoplay" element={<Tutorial/>} />
          </Routes>
       
        
    </div>
  );
}

export default App;
