import DancingDog from "./dance-dancing.gif"
import style from "../SudokuGrid/sudokuGrid.module.css"
export default function(){



    return(
        <div>
            <h1 className={style.smallTitle}>You've completed the Sudoku!</h1>
            <img src={DancingDog} alt="" />

        </div>
    )
}