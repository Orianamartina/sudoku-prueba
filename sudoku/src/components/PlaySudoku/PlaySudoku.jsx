import { useState, useRef, useEffect } from "react"
import style from "../SudokuGrid/sudokuGrid.module.css"


export default function(sudokuGrid){
    console.log(sudokuGrid.sudokuGrid)
    const [grid, setGrid] = useState(sudokuGrid.sudokuGrid)
    const [solvedGrid, setSolvedGrid] = useState(sudokuGrid.solved)
    const inputs = useRef([]);
    const [finished, setFinished] = useState()
   

    useEffect(() => {
        // Focus on the first input when the component mounts
        inputs.current[0].focus();
      }, []);
    //console.log(grid)
    function handleChange(event, row, col) {
        const { value } = event.target;
        const newGrid = [...grid];
        newGrid[row][col] = value ? value : 0;
        setGrid(newGrid); 
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
  
    return (
        <div>
            {grid.map((row, rowIndex) => (
                <div key={rowIndex}>
                    {row.map((cell, colIndex) => (
                        <input
                        className={style.input}
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
        <button onClick={checkSolution}>Check solution</button>
        {finished? <h1>finished</h1>: <h1>not finished</h1>}





        </div>
    )




}