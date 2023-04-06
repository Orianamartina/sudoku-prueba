
// Square name

var sudokuGrid = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0
  ]
 const positionSudokuGrid = [
    1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12,
   13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
   25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
   37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
   49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
   61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72,
   73, 74, 75, 76, 77, 78, 79, 80, 81
 ]
const getColumnIndexes = (columnNumber) => {
    let rowIndexes = []
    for (let index = 0; index < 9; index++) {
        rowIndexes.push(columnNumber -1 + index * 9)
        
    }
    return rowIndexes
}


const getRowIndexes = (rowNumber) => {
    let columIndexes = []

    for (let index = 0; index < 9; index++) {
    let element = 9 * (rowNumber - 1) + index
    columIndexes.push(element)

    }
    
    return columIndexes
}
const getSquare = (box) => {
    let squares = 
    [ 
    [1, 2, 3, 10, 11, 12, 19, 20, 21],
    [4, 5, 6, 13, 14, 15, 22, 23, 24],
    [7, 8, 9, 16, 17, 18, 25, 26, 27],
    [28, 29, 30, 37, 38, 39, 46, 47, 48],
    [31,32,33, 40, 41, 42, 49, 50, 51 ],
    [34, 35, 36, 43, 44, 45, 52, 53, 54],
    [55, 56, 57, 64, 65, 66, 73, 74, 75],
    [58, 59, 60, 67, 68, 69, 76, 77, 78],
    [61, 62, 63, 70, 71, 72, 79, 80, 81]]
    for (let index = 0; index < squares.length; index++) {
        if (squares[index].includes(box)) return squares[index]
        
    }
}


const shuffleArray =() => {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array 
}

const fillSquare = (square) => {
    let numbersArray = shuffleArray()
    for (let index = 0; index < square.length; index++) {
        let position = square[index]
    
        sudokuGrid[position -1] = numbersArray[index]
        
    }
    
}

const getRow = (row) => {
    let rowIndexes = getRowIndexes(row)
    let rowResult = []
    for (let index = 0; index < rowIndexes.length; index++) {
        element = sudokuGrid[rowIndexes[index]]
        rowResult.push(element)        
    }
    return rowResult
}
const getColumn = (column) => {
    let columIndexes = getColumnIndexes(column)
    let columResult = []
    for (let index = 0; index < columIndexes.length; index++) {
        element = sudokuGrid[columIndexes[index]]
        columResult.push(element)
        
    }
    return columResult
}

const setFirstRow= () => {
    let rowIndexes = getRowIndexes(1).slice(3, 10)

    return rowIndexes

}
console.log(setFirstRow())


const setGrid = () => {
    fillSquare(getSquare(1))
    fillSquare(getSquare(31))
    fillSquare(getSquare(81))
   console.log(getColumn(3))
   console.log(getColumn(2))
   console.log(getColumn(1))
   
    return sudokuGrid

}
console.log(setGrid())






