
import { GET_SUDOKU_EASY, GET_SUDOKU_MEDIUM, GET_SUDOKU_HARD, GET_SUDOKU_EXPERT } from "../actionTypes";

const initialState = {
    sudokuGrid: [],
    solvedSudokuGrid: []
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case GET_SUDOKU_EASY:
            return {
            sudokuGrid: action.payload.board,
            solvedSudokuGrid: action.payload.solvedBoard
        }
        case GET_SUDOKU_MEDIUM:{
            return {
                sudokuGrid: action.payload.board,
                solvedSudokuGrid: action.payload.solvedBoard
        }}
        case GET_SUDOKU_HARD:{
            return {
                sudokuGrid: action.payload.board,
                solvedSudokuGrid: action.payload.solvedBoard}
        }
        case GET_SUDOKU_EXPERT: {
            return {
                sudokuGrid: action.payload.board,
                solvedSudokuGrid: action.payload.solvedBoard}
        }

        default: return state
    }
}

export default reducer;