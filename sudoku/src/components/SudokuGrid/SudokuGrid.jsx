import {getSudokuEasy, getSudokuHard, getSudokuMedium, getSudokuExpert} from  "../../redux/actions";
import { useEffect, useState, useMemo, useCallback } from "react"
import {useDispatch, useSelector} from "react-redux";
import style from "./sudokuGrid.module.css"
import PlaySudoku from "../PlaySudoku/PlaySudoku";
import { Link } from "react-router-dom"


export default  function(){
    const root = document.documentElement.style;
    const random = []
    const dispatch = useDispatch()
    const sudoku = useSelector((state) => state.sudokuGrid)
    const solvedSudoku = useSelector((state) => state.solvedSudokuGrid)

    
    
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
    
    const  handleColorStateGreen = () => {
        root.setProperty('--Darkest', '#1d2d27');
        root.setProperty('--LightColor', '#f4f1e9');
        root.setProperty('--BrightColor', '#688f4e');
        root.setProperty('--DarkBrightColor', '#4a6934')
        root.setProperty('--BrightColorLighter', '#84d350')
        root.setProperty('--backgroundInput', 'var(--backgroundInputGreen)')
        root.setProperty('--bodyBackground', 'var(--bodyBackgroundGreen)')
    }
    const handleColorStatePink = () => {
        root.setProperty('--Darkest', '#3f2d51');
        root.setProperty('--LightColor', '#fedcbe');
        root.setProperty('--BrightColor', '#cb7d99');
        root.setProperty('--BrightColorLighter', '#deacaa')
        root.setProperty('--DarkBrightColor', '#a34c6b')
        root.setProperty('--backgroundInput', 'var(--backgroundInputPink)')
        root.setProperty('--bodyBackground', 'var(--bodyBackgroundPink)')
    }
    const handleColorStateBlue = () => {
        root.setProperty('--Darkest', '#161a2a');
        root.setProperty('--LightColor', '#f7f0c6');
        root.setProperty('--BrightColor', '#dadada');
        root.setProperty('--BrightColorLighter', '#abb6c8')
        root.setProperty('--DarkBrightColor', '#f7f0c6')
        root.setProperty('--backgroundInput', 'var(--backgroundInputBlue)')
        root.setProperty('--bodyBackground', 'var(--bodyBackgroundBlue)')
    }
    
    return (
        <div className={style.sudokuContainer}>
            {level? " " :<h1 className={style.title}>SUDOKU</h1>}
            <button className={ style.buttonSelectPink} onClick={() => handleColorStatePink()}>  </button>
             <button className={ style.buttonSelectTeal} onClick={() => handleColorStateBlue()}></button>
             <button className={ style.buttonSelectGreen} onClick={() => handleColorStateGreen()}></button>
            
            {
                level? <button onClick={() => setLevel(null)} className={style.button}>Back</button>:
                <div> 
                    <Link to="/howtoplay">
                        <button className={style.howToButton}>
                        How To Play</button></Link>
                    <h1 className={style.smallTitle}>select a level</h1>
                    <div className={style.buttonContainer}>
                         <button className={style.levelButton} onClick={handleLevelEasy}>Easy</button>
                        <button className={style.levelButton} onClick={handleLevelMedium}>Medium</button>
                        <button className={style.levelButton} onClick={handleLevelHard}>Hard</button>
                        <button className={style.levelButton} onClick={handleLevelExpert}>Expert</button>
                    </div>
                   
                </div>
                
            }
            
            
            {level?
                <PlaySudoku solved = {solvedSudoku} sudokuGrid = {sudoku} level = {level} />:
                 <h1></h1>
            }
            
        </div>
    )
}