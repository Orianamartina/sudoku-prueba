import { useState, useRef, useEffect } from "react"
import style from "./sudokuGrid.module.css"
import UnderButtons from "../UnderButtons/UnderButtons";
import SudokuCompleted from "../SudokuCompleted/SudokuCompleted";

export default function(props){
    const [startingGrid, setStartingGrid] = useState(JSON.parse(JSON.stringify(props.sudokuGrid)));
    const [grid, setGrid] = useState(props.sudokuGrid)
    const [solvedGrid, setSolvedGrid] = useState(props.solved)
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
      if(startingGrid[row][col] == " "){
        const newGrid = [...grid];
        newGrid[row][col] = currentNumber
        setGrid(newGrid)
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
            
            {grid.map((row, rowIndex) => (
                <div key={rowIndex}>
                    {row.map((cell, colIndex) => (
                       <div className={style.inputContainer} 
                            key={`${rowIndex}-${colIndex}`}
                            ref={(el) => inputs.current[rowIndex * 9 + colIndex] = el}
                            onClick={() => handleClick(rowIndex, colIndex)}
                       >{cell || ' '} </div>
                        
                       
                    ))}
                </div>
            ))}

          
            <UnderButtons 
              resetGrid = {resetGrid} 
              solveGrid={solveGrid} 
              checkSolution = {checkSolution} 
              finished = {finished} 
              setButton = {setButton}
            />
          </> )}
        </div>
    )




}