import { GET_SUDOKU_EASY, GET_SUDOKU_MEDIUM, GET_SUDOKU_HARD, GET_SUDOKU_EXPERT } from "../actionTypes";
import { sudokuGridEasy, sudokuGridMedium,sudokuGridHard, sudokuGridExpert } from "../../components/SudokuCreator/SudokuCreator";

export const getSudokuEasy = () => {
    return  function(dispatch){
        let sudoku = sudokuGridEasy
        return dispatch({type: GET_SUDOKU_EASY, payload:sudoku})
    }
}
export const getSudokuMedium = () => {
    return  function(dispatch){
        let sudoku = sudokuGridMedium
        return dispatch({type: GET_SUDOKU_MEDIUM, payload:sudoku})
    }
}

export const getSudokuHard = () => {
    return  function(dispatch){
        let sudoku = sudokuGridHard
        return dispatch({type: GET_SUDOKU_HARD, payload:sudoku})
    }
}
export const getSudokuExpert = () => {
    return  function(dispatch){
        let sudoku = sudokuGridExpert
        return dispatch({type: GET_SUDOKU_EXPERT, payload:sudoku})
    }
}

