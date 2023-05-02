import { useState } from "react"



export default function(sudokuGrid, solved){

    const [grid, setGrid] = useState(sudokuGrid.sudokuGrid)
    const [solvedGrid, setSolvedGrid] = useState(solved)
    
    //console.log(grid)
    function handleChange(event, row, col) {
        const { value } = event.target;
        const newGrid = [...grid];
        newGrid[row][col] = value ? value : 0;
        setGrid(newGrid); 
      }

  
    return (
        <div>
            {grid.map((row, rowIndex) => (
                <div key={rowIndex}>
                    {row.map((cell, colIndex) => (
                        <input
                        key={`${rowIndex}-${colIndex}`}
                        type="number"
                        value={cell || ''}
                        onChange={(e) => handleChange(e, rowIndex, colIndex)}
                        min="1"
                        max="9"
                        />
                    ))}
                </div>
        ))}






        </div>
    )




}