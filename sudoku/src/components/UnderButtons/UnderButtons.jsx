

export default function(props){




    return(
        <div>
            <div>
                <button onClick={() => props.setButton(1)}>1</button>
                <button onClick={() => props.setButton(2)}>2</button>
                <button onClick={() => props.setButton(3)}>3</button>
                <button onClick={() => props.setButton(4)}>4</button>
                <button onClick={() => props.setButton(5)}>5</button>
                <button onClick={() => props.setButton(6)}>6</button>
                <button onClick={() => props.setButton(7)}>7</button>
                <button onClick={() => props.setButton(8)}>8</button>
                <button onClick={() => props.setButton(9)}>9</button>
                <button onClick={() => props.setButton(0)}>Erase</button>
            </div>
            <button onClick={props.resetGrid}>Reset</button>
            <button onClick={props.solveGrid}>Solve</button>
            <button onClick={props.checkSolution}>Check solution</button>
            

        </div>
    )
}