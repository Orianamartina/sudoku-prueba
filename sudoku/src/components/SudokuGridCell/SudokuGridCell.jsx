import {getSudokuEasy, getSudokuHard, getSudokuMedium, getSudokuExpert} from  "../../redux/actions";
import { useEffect, useState, useMemo, useCallback } from "react"
import {useDispatch, useSelector} from "react-redux";
import style from "./sudokuGrid.module.css"
import PlaySudoku from "../PlaySudoku/PlaySudoku";
import PlaySudokuCell from "../PlaySudokuCell/PlaySudokuCell";

export default  function(){

    //const [sudoku, setSudoku] = useState()
    const random = []
    const dispatch = useDispatch()
    const sudoku = useSelector((state) => state.sudokuGrid)
    const solvedSudoku = useSelector((state) => state.solvedSudokuGrid)
    
    
   
    //console.log(sudoku)
    useEffect(() => {
        
    },[])
    
    const [level, setLevel] = useState(null)
    const [flag, setFlag] = useState(null)

    function handleLevelEasy(){
        dispatch(getSudokuEasy())
        setLevel("easy")
        setFlag(1)
    }
    function handleLevelMedium(){
        dispatch(getSudokuMedium())
        setLevel("medium")
        setFlag(2)
    }
    function handleLevelHard(){
        dispatch(getSudokuHard())
        setLevel("hard")
        setFlag(3)
    }
    function handleLevelExpert(){
        dispatch(getSudokuExpert())
        setLevel("expert")
        setFlag(4)
    }
    
    return (
        <div className={style.sudokuContainer}>
            {
                level? <button onClick={() => setLevel(null)}>Back</button>:
                <div> 
                    <h1>select a level</h1>
                    <button onClick={handleLevelEasy}>Easy</button>
                    <button onClick={handleLevelMedium}>Medium</button>
                    <button onClick={handleLevelHard}>Hard</button>
                    <button onClick={handleLevelExpert}>Expert</button>
                </div>
                
            }
            
            <h1>{level}</h1>
            {level?
                <PlaySudokuCell solved = {solvedSudoku} sudokuGrid = {sudoku} level = {level} />:
                 <h1></h1>
            }
            
        </div>
    )
}