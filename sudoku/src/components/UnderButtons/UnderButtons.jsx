import style from "./UnderButtons.module.css"

export default function(props){




    return(
        <div className={style.buttonsContainer}>
            <div >
                <button className={style.buttonsNumber } onClick={() => props.setButton(1)}>1</button>
                <button className={style.buttonsNumber } onClick={() => props.setButton(2)}>2</button>
                <button className={style.buttonsNumber } onClick={() => props.setButton(3)}>3</button>
                <button className={style.buttonsNumber } onClick={() => props.setButton(4)}>4</button>
                <button className={style.buttonsNumber } onClick={() => props.setButton(5)}>5</button>
                <button className={style.buttonsNumber } onClick={() => props.setButton(6)}>6</button>
                <button className={style.buttonsNumber } onClick={() => props.setButton(7)}>7</button>
                <button className={style.buttonsNumber } onClick={() => props.setButton(8)}>8</button>
                <button className={style.buttonsNumber } onClick={() => props.setButton(9)}>9</button>
               
            </div>
            <div>
            <button className={style.buttons} onClick={() => props.setButton(0)}>Erase</button>
            </div>
            <button className={style.buttons} onClick={props.resetGrid}>Reset</button>
            <button className={style.buttons} onClick={props.solveGrid}>Solve</button>
            <button className={style.buttons} onClick={props.checkSolution}>Check solution</button>
            

        </div>
    )
}