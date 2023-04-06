
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import SudokuGrid from './components/SudokuGrid/SudokuGrid';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path = "/" element= {<Landing/>}/>
            <Route exact path = "/play" element = {<SudokuGrid />} />
          </Routes>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
