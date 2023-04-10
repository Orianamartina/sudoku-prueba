
// Square name

var sudokuGrid = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0
  ]]


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

const getColumnIndexes = (box) => {
    let columns = []
    for (let index = 0; index < 9; index++) {
        let columnArray = []
        for (let i = 0; i < 9; i++) {
            columnArray.push(9 * i + index)
            
        }
        columns.push(columnArray)
    }
    for (let j = 0; j < columns.length; j++) {
        if (columns[j].includes(box)) return columns[j]
    }
    

}
const getRowIndexes = (box) => {
    let rows = []
    for (let index = 0; index < 9; index++ ) {
        let rowArray = []
        for (let i = 0; i < 9; i++) {
            rowArray.push(index * 9 + i)
            
        }
        rows.push(rowArray)
    }
    for (let j = 0; j < rows.length; j++) {
        if (rows[j].includes(box)) return rows[j]
    }
}


const getSquareIndex = (box) => {
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




const fillInitialSquare = (square) => {
    let numbersArray = shuffleArray()
    for (let index = 0; index < square.length; index++) {
        let position = square[index]
    
        sudokuGrid[position -1] = numbersArray[index]
        
    }
}

const getRow = (box) => {
    let rowIndexes = getRowIndexes(box)
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
const getSquare = (index) => {
  let squareIndexes = getSquareIndex(index +1)
  let squareArray = []
  for (let i = 0; i < squareIndexes.length; i++) {
    squareArray.push(sudokuGrid[squareIndexes[i] -1])
    
  }
  return squareArray
}



const validateBox = (index) => {
    let randomNumbers = shuffleArray()
    let column = getColumn(index)
    let row = getRow(index)
    let square = getSquare(index)
    let possible = []
    for (let i = 0; i < randomNumbers.length; i++) {
        const element = randomNumbers[i];
        if (!row.includes(element) && !column.includes(element) && !square.includes(element)){
            possible.push(element)
        }
        
    }
    return possible
}
const validateFirstRow = (index, i1, i2, i3, i4, i5) => {
    if(validateBox(index+1)){
        sudokuGrid[index+1] = validateBox(index+1)[i1]

    }
    else{



    }
}


const setGrid = () => {
    fillInitialSquare(getSquareIndex(1))
    fillInitialSquare(getSquareIndex(31))
    fillInitialSquare(getSquareIndex(81))
    console.log(validateBox(3))
    console.log(validateBox(4))
    console.log(validateBox(5))
    console.log(validateBox(6))
    console.log(validateBox(7))
    console.log(validateBox(8))
    
    validateFirst3Rows(3)
    validateFirst3Rows(12)
    return sudokuGrid

}
console.log(setGrid())







