import { useState, useCallback } from "react"
import style from "./playSudokuCell.module.css"
import UnderButtons from "../UnderButtons/UnderButtons";
import SudokuCompleted from "../SudokuCompleted/SudokuCompleted";

export default function(props){
    const [startingGrid, setStartingGrid] = useState(JSON.parse(JSON.stringify(props.sudokuGrid)));
    const [grid, setGrid] = useState(props.sudokuGrid)
    const [solvedGrid, setSolvedGrid] = useState(props.solved)
    const [selectedCell, setSelectedCell] = useState({row: null, col:null})
    const [finished, setFinished] = useState()
    const [currentNumber, setCurrentNumber] = useState(0)
   
    const handleCellChange = useCallback((row, col, value) => {
      const newGrid = [...grid];
      newGrid[row][col] = value > 0 ? value : '';
      setGrid(newGrid);
    }, [grid]);
  
    function handleClick(row, col) {
      if (startingGrid[row][col] === " ") {
        handleCellChange(row, col, currentNumber);
        setSelectedCell({ row, col })
      }
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
    
    const setButton = (number) => {
        if (currentNumber == number){
            setCurrentNumber(0)
        } 
        
        setCurrentNumber(number)
        console.log(currentNumber)
    }
    function resetGrid(){
      setGrid(startingGrid)
    }
    function solveGrid(){
      setGrid(solvedGrid)
    }
    return (
        <div>
          {finished? <SudokuCompleted/>:(
          <>
          <div className={style.sudokuContainer}>
            
            {grid.map((row, rowIndex) => (
                <div className= {style.sudokuRow} key={rowIndex}>
                    {row.map((cell, colIndex) => (
                       <div className={`

                          ${style.input} 

                          ${(selectedCell.row === rowIndex || selectedCell.col === colIndex)? style.selected: " " }
                          ${startingGrid[rowIndex][colIndex] ==  " "   ? style.input : style.fixedInput}
                          ${selectedCell.row === rowIndex && selectedCell.col === colIndex ? style.selectedCurrent: " "}

                          ` }
                              key={`${rowIndex}-${colIndex}`}
                              onClick={() => handleClick(rowIndex, colIndex)}
                        >{cell || ' '} 
                       </div>
                        
                       
                    ))}
                </div>
            ))}
          </div> 
          
            <UnderButtons 
              resetGrid = {resetGrid} 
              solveGrid={solveGrid} 
              checkSolution = {checkSolution} 
              finished = {finished} 
              setButton = {setButton}
            />
         
          
        </>)}
      </div>
    )




}