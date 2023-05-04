import style from "./tutorial.module.css"
import { Link } from "react-router-dom"

export default function(){
    


    return(
        <div>
            <Link to="/">

                <button className={style.button}>Back</button>
            </Link>
            
            <h1 className={style.title}>How to play:</h1>
            <p className={style.paragraph}>

                    Sudoku is a number-based logic puzzle that consists of a 9x9 grid, which is further divided into nine 3x3 sub-grids. The objective is to fill each row, column, and sub-grid with the numbers 1-9 without repeating any numbers in the same row, column, or sub-grid.

                    To start the game, some cells are already filled in with numbers. These are called "givens" and they serve as clues to help you solve the puzzle. The more givens there are, the easier the puzzle is.

                    To solve the puzzle, you need to use logic and deduction to determine which numbers should be placed in each cell. One strategy is to start by looking for cells that have only one possible number that can fit, based on the numbers that are already placed in the same row, column, and sub-grid. Once you've filled in all the cells that have only one option, you can move on to cells that have fewer possible options, and so on.

                    It's important to keep track of the numbers that are already placed in each row, column, and sub-grid, to avoid repeating any numbers. You can also use pencil marks to keep track of possible numbers for each cell.

                    As you fill in more cells, the puzzle will become easier to solve, and you'll start to see patterns and relationships between different cells. Eventually, you should be able to fill in all the cells and complete the puzzle.

                    Remember, there is only one unique solution to each Sudoku puzzle, so keep trying until you find it!


            </p>
        </div>
    )
}