
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing/Landing';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path = "/" element= {<Landing/>}/>
           
          </Routes>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
