import { useState, useRef, useEffect } from "react"
import style from "./PlaySudoku.module.css"
import SudokuCompleted from "../SudokuCompleted/SudokuCompleted";


export default function(props){
    const [startingGrid, setStartingGrid] = useState(JSON.parse(JSON.stringify(props.sudokuGrid)));
    const [grid, setGrid] = useState(props.sudokuGrid)
    const [solvedGrid, setSolvedGrid] = useState(props.solved)
    const [selectedCell, setSelectedCell] = useState({row: 0, col: 0})
    const [finished, setFinished] = useState()
    const [colorState, setColorState] = useState("blue")
    const inputs = useRef([]);
    useEffect(() => {
        
      //Focus on the first input when the component mounts
      inputs.current[0].focus();
       
    }, []);
 


    function handleChange(event, row, col) {
        if (startingGrid[row][col] == " "){
          const { value } = event.target;
          const newGrid = JSON.parse(JSON.stringify(grid));
          newGrid[row][col] = value ? value : " ";
          setGrid(newGrid); 
          
        }
        
    }
    function resetGrid(){
      setGrid(startingGrid)
    }
    function solveGrid(){
      setGrid(solvedGrid)
    }
    function checkSolution() {
        for (let row = 0; row < 9; row++) {
          for (let col = 0; col < 9; col++) {
            if (grid[row][col] !== solvedGrid[row][col]) {
              setFinished(false) 
              return setFinished// If the values don't match, the solution is incorrect
            }
          }
        }
        setFinished(true);
        return setFinished // All values match, the solution is correct
    }
    const handleKeyDown = (e, rowIndex, colIndex) => {
        const inputsPerRow = 9;
        switch (e.key) {
          case "ArrowUp":
            e.preventDefault();
            if (rowIndex > 0) {
              setSelectedCell({ row: rowIndex - 1, col: colIndex });
              inputs.current[(rowIndex - 1) * inputsPerRow + colIndex].focus();
              
            }
            break;
          case "ArrowDown":
            e.preventDefault();
            if (rowIndex < 8) {
              setSelectedCell({ row: rowIndex + 1, col: colIndex });
              inputs.current[(rowIndex + 1) * inputsPerRow + colIndex].focus();
              
            }
            break;
          case "ArrowLeft":
            if (colIndex > 0) {
              setSelectedCell({ row: rowIndex, col: colIndex - 1 });
              inputs.current[rowIndex * inputsPerRow + colIndex - 1].focus();
            }
            break;
          case "ArrowRight":
            if (colIndex < 8) {
              setSelectedCell({ row: rowIndex, col: colIndex + 1 });
              inputs.current[rowIndex * inputsPerRow + colIndex + 1].focus();
            }
            break;
          default:
            break;
        }
      };

    const  handleColorState = (color) => {
      setColorState(color)
    }
  
    return (
        
        <>
            {finished? (<SudokuCompleted />):(
            <div>
              <button onClick={() => handleColorState("pink")}>Pink</button>
              <button onClick={() => handleColorState("blue")}>Blue</button>
              <button onClick={() => handleColorState("green")}>Green</button>
              {grid.map((row, rowIndex) => (
                  
                  <div key={rowIndex}>
                      {row.map((cell, colIndex) => (
                          <input
                          className={`
                          ${style.input} 
                          ${colorState == "blue"? style.inputBlue: colorState == "pink"? style.inputPink: style.inputGreen} 
                          ${selectedCell.row === rowIndex || selectedCell.col === colIndex && colorState == "blue" ? style.selectedBlue : ''}
                          ${selectedCell.row === rowIndex || selectedCell.col === colIndex && colorState == "pink" ? style.selectedPink : ''}
                          ${selectedCell.row === rowIndex || selectedCell.col === colIndex && colorState == "green" ? style.selectedGreen : ''}
                          ${startingGrid[rowIndex][colIndex] ===  " "  && colorState == "blue" ? style.changingInputBlue : style.fixedInputBlue}
                          ${startingGrid[rowIndex][colIndex] ===  " "  && colorState == "pink" ? style.changingInputPink : style.fixedInputPink}
                          ${startingGrid[rowIndex][colIndex] ===  " "  && colorState == "blue" ? style.changingInputGreen : style.fixedInputGreen}
                          ` }
                        
                

                          key={`${rowIndex}-${colIndex}`}
                          type="number"
                          value={cell || ' '}
                          onChange={(e) => handleChange(e, rowIndex, colIndex)}
                          onKeyDown={(e) => handleKeyDown(e, rowIndex, colIndex)}
                          ref={(el) => inputs.current[rowIndex * 9 + colIndex] = el}
                          onInput={(event)=>event.target.value=event.target.value.slice(0,event.target.maxLength)} 
                          maxLength="1"
                          
                          />
                      ))}
                  </div>
          ))}
            <button onClick={resetGrid}>Reset</button>
            <button onClick={checkSolution}>Check solution</button>
            <button onClick={solveGrid}>Solve</button>
          </div>)}
      </>)
    




}