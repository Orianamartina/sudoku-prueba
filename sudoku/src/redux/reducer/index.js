
import { GET_SUDOKU } from "../actionTypes";

const initialState = {
    sudokuGrid: []
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case GET_SUDOKU:
            return {
            sudokuGrid: action.payload
                
        }

        default: return state
    }
}

export default reducer;