import {getSudoku} from  "../../redux/actions";
import { setSudokuForSolving, createSudoku, sudokuGrid } from "../SudokuCreator/SudokuCreator"
import { useEffect, useState, useMemo, useCallback } from "react"
import {useDispatch, useSelector} from "react-redux";
export default  function(){
    
    //const [sudoku, setSudoku] = useState()
    const random = []
    const dispatch = useDispatch()
    const sudoku = useSelector((state) => state.sudokuGrid)
    console.log(sudoku)

    const row1 = sudoku[0]
    const row2 = sudoku[1]
    const row3 = sudoku[2]
    const row4 = sudoku[3]
    const row5 = sudoku[4]
    const row6 = sudoku[5]
    const row7 = sudoku[6]
    const row8 = sudoku[7]
    const row9 = sudoku[8]
    
    
    
    
    useEffect(() => {
       dispatch(getSudoku())
    },[])
    
    return (
        <>
            <h1>Here goes the grid</h1>
            
        </>
    )
}