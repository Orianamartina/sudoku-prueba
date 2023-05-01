import { GET_SUDOKU } from "../actionTypes";
import { sudokuGrid } from "../../components/SudokuCreator/SudokuCreator";

export const getSudoku = () => {
    return  function(dispatch){
        let sudoku = sudokuGrid
        return dispatch({type: GET_SUDOKU, payload:sudoku})
    }
}
