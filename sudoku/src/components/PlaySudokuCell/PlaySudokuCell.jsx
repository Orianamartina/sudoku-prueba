import { useState, useRef, useEffect } from "react"
import style from "../SudokuGrid/sudokuGrid.module.css"
import UnderButtons from "../UnderButtons/UnderButtons";


export default function(sudokuGrid){
   
    const [grid, setGrid] = useState(sudokuGrid.sudokuGrid)
    const [solvedGrid, setSolvedGrid] = useState(sudokuGrid.solved)
    const inputs = useRef([]);
    const [finished, setFinished] = useState()
    const [currentNumber, setCurrentNumber] = useState(null)
    

    useEffect(() => {
        // Focus on the first input when the component mounts
        inputs.current[0].focus();
      }, []);
   
    function handleChange(event, row, col) {
        const { value } = event.target;
        const newGrid = [...grid];
        newGrid[row][col] = value ? value : 0;
        setGrid(newGrid); 
    }
    function handleClick (row, col){ 
      const newGrid = [...grid];
      newGrid[row][col] = currentNumber
      setGrid(newGrid)
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
               
                inputs.current[(rowIndex - 1) * inputsPerRow + colIndex].focus();
              
            }
            break;
          case "ArrowDown":
            e.preventDefault();
            if (rowIndex < 8) {
              inputs.current[(rowIndex + 1) * inputsPerRow + colIndex].focus();
            }
            break;
          case "ArrowLeft":
            if (colIndex > 0) {
              inputs.current[rowIndex * inputsPerRow + colIndex - 1].focus();
            }
            break;
          case "ArrowRight":
            if (colIndex < 8) {
              inputs.current[rowIndex * inputsPerRow + colIndex + 1].focus();
            }
            break;
          default:
            break;
        }
      };
    const setButton = (number) => {
        if (currentNumber == number){
            setCurrentNumber(0)
        } 

        setCurrentNumber(number)
        console.log(currentNumber)
    }
 
    return (
        <div>
            <h1 onClick={() => setCurrentNumber(currentNumber+1)}>{currentNumber}</h1>
            {grid.map((row, rowIndex) => (
                <div key={rowIndex}>
                    {row.map((cell, colIndex) => (
                        cell == 1 || cell == 2 || cell == 3 || cell == 4 || cell == 5 || cell == 6 || cell == 7 || cell == 8 || cell == 9?
                        <input
                          className={style.fixedInput}
                          key={`${rowIndex}-${colIndex}`}
                          type="number"
                          value={cell}
                          readOnly
                        />:
                        <input
                          className={style.input}
                          key={`${rowIndex}-${colIndex}`}
                          type="number"
                          value={cell || ' '}
                          //onChange={(e) => handleChange(e, rowIndex, colIndex)}
                          //onKeyDown={(e) => handleKeyDown(e, rowIndex, colIndex)}
                          ref={(el) => inputs.current[rowIndex * 9 + colIndex] = el}
                          //onInput={(event)=>event.target.value=event.target.value.slice(0,event.target.maxLength)} 
                          //maxLength="1"
                          onClick={() => handleClick(rowIndex, colIndex)}
                        
                        />
                    ))}
                </div>
        ))}
        <UnderButtons checkSolution = {checkSolution} finished = {finished} setButton = {setButton}></UnderButtons>
    
        </div>
    )




}