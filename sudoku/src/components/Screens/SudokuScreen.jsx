import SudokuGrid from "../SudokuGrid/SudokuGrid";
import SudokuGridCell from "../SudokuGridCell/SudokuGridCell";

export default function(){

    const width = window.innerWidth;
    // The width below which the mobile view should be rendered
    const breakpoint = 1000;
    
    /* If the viewport is more narrow than the breakpoint render the
       mobile component, else render the desktop component */
    return width < breakpoint ? <SudokuGridCell /> : <SudokuGrid />;
}