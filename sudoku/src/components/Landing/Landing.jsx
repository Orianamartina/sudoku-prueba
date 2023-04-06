import { Link } from "react-router-dom"

export default function(){

    return (
        <>
            <h1> Welcome to Sudoku </h1>
            <Link to="/play">
                <h1>
                    Play
                </h1>
            </Link>

        </>
    )
}