
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import SudokuGrid from './components/SudokuGrid/SudokuGrid';
import SudokuScreen from './components/Screens/SudokuScreen';

function App() {
  return (
    <div className="App">
        
          <Routes>
            <Route exact path = "/" element= {<Landing/>}/>
            <Route exact path = "/play" element = {<SudokuScreen />} />
          </Routes>
       
        
    </div>
  );
}

export default App;
