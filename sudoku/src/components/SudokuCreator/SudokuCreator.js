const b = null

let board1 = [
    [b, b, b, b, b, b, b, b, b],
    [b, b, b, b, b, b, b, b, b],
    [b, b, b, b, b, b, b, b, b],
    [b, b, b, b, b, b, b, b, b],
    [b, b, b, b, b, b, b, b, b],
    [b, b, b, b, b, b, b, b, b],
    [b, b, b, b, b, b, b, b, b],
    [b, b, b, b, b, b, b, b, b],
    [b, b, b, b, b, b, b, b, b],
]


const board2 = [
    [b, b, b, b, b, b, b, b, b],
    [b, b, b, b, b, b, b, b, b],
    [b, b, b, b, b, b, b, b, b],
    [b, b, b, b, b, b, b, b, b],
    [b, b, b, b, b, b, b, b, b],
    [b, b, b, b, b, b, b, b, b],
    [b, b, b, b, b, b, b, b, b],
    [b, b, b, b, b, b, b, b, b],
    [b, b, b, b, b, b, b, b, b],
]

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


const setBox1 = () => {
    const numbers = shuffleArray()
    for (let i = 0; i < 3; i++) {    
        board2[0][i] = numbers[i]
    }
    for (let i = 0; i < 3; i++) {    
        board2[1][i] = numbers[i + 3]
    }
    for (let i = 0; i < 3; i++) {    
        board2[2][i] = numbers[i + 6]
    }
 
}
const setBox2 = () => {
    const numbers = shuffleArray()
    for (let i = 0; i < 3; i++) {    
        board2[3][i+3] = numbers[i]
    }
    for (let i = 0; i < 3; i++) {    
        board2[4][i+3] = numbers[i + 3]
    }
    for (let i = 0; i < 3; i++) {    
        board2[5][i+3] = numbers[i + 6]
    }
 
}
const setBox3 = () => {
    const numbers = shuffleArray()
    for (let i = 0; i < 3; i++) {    
        board2[6][i+6] = numbers[i]
    }
    for (let i = 0; i < 3; i++) {    
        board2[7][i+6] = numbers[i + 3]
    }
    for (let i = 0; i < 3; i++) {    
        board2[8][i+6] = numbers[i + 6]
    }
 
}
const setBoxes = () => {
    setBox1();
    setBox2();
    setBox3()
}

function solve(board) {
    // THIS FUNCTION WORKS.
    // Board -> Board
    // solves the given sudoku board
    // ASSUME the given sudoku board is valid
    if (solved(board)) {
        return board
    }
    else {
        const possibilities = nextBoards(board)
        const validBoards = keepOnlyValid(possibilities)
        return searchForSolution(validBoards)
    }
}


function searchForSolution(boards){
    // List[Board] -> Board or false
    // finds a valid solution to the sudoku problem
    if (boards.length < 1){
        return false
    }
    else {
        // backtracking search for solution
        var first = boards.shift()
        const tryPath = solve(first)
        if (tryPath !== false){
            return tryPath
        }
        else{
            return searchForSolution(boards)
        }
    }
}


function solved(board){
    // THIS FUNCTION WORKS.
    // Board -> Boolean
    // checks to see if the given puzzle is solved
    for (var i = 0; i < 9; i++){
        for (var j = 0; j < 9; j++){
            if (board[i][j] == null){
                return false
            }
        }
    }
    return true
}



function nextBoards(board){ 
    // THIS FUNCTION WORKS.
    // Board -> List[Board]
    // finds the first emply square and generates 9 different boards filling in that square with numbers 1...9
    var res = []
    const firstEmpty = findEmptySquare(board)
    if (firstEmpty !== undefined){
        const y = firstEmpty[0]
        const x = firstEmpty[1]
        for (var i = 1; i <= 9; i++){
            var newBoard = [...board]
            var row = [...newBoard[y]]
            row[x] = i
            newBoard[y] = row
            res.push(newBoard)
        }
    }
    return res
}

function findEmptySquare(board){
    // THIS FUNCTION WORKS.
    // Board -> [Int, Int] 
    // (get the i j coordinates for the first empty square)
    for (var i = 0; i < 9; i++){
        for (var j = 0; j < 9; j++){
            if (board[i][j] == null) {
                return [i, j]
            }
        }
    }
}

// ______TESTS______ //
// console.log(nextBoards(bd3))
// console.log(findEmptySquare(bd3))
// ______TESTS______ //

function keepOnlyValid(boards){
    // THIS FUNCTION WORKS.
    // List[Board] -> List[Board]
    // filters out all of the invalid boards from the list
    var res = []
    for (var i = 0; i < boards.length; i++){
        if (validBoard(boards[i])){
            res.push(boards[i])
        }
    }
    return res
}

// ______TESTS______ //
// console.log(keepOnlyValid([bd1, bd2, bd3]))
// ______TESTS______ //


function validBoard(board){
    // THIS FUNCTION WORKS.
    // Board -> Boolean
    // checks to see if given board is valid
    return rowsGood(board) && columnsGood(board) && boxesGood(board)
}

function rowsGood(board){
    // THIS FUNCTION WORKS.
    // Board -> Boolean
    // makes sure there are no repeating numbers for each row
    for (var i = 0; i < 9; i++){
        var cur = []
        for (var j = 0; j < 9; j++){
            if (cur.includes(board[i][j])){
                return false
            }
            else if (board[i][j] != null){
                cur.push(board[i][j])
            }
        }
    }
    return true
}

function columnsGood(board){
    // THIS FUNCTION WORKS.
    // Board -> Boolean
    // makes sure there are no repeating numbers for each column
    for (var i = 0; i < 9; i++){
        var cur = []
        for (var j = 0; j < 9; j++){
            if (cur.includes(board[j][i])){
                return false
            }
            else if (board[j][i] != null){
                cur.push(board[j][i])
            }
        }
    }
    return true
}


function boxesGood(board){
    // transform this everywhere to update res
    const boxCoordinates = [[0, 0], [0, 1], [0, 2],
                            [1, 0], [1, 1], [1, 2],
                            [2, 0], [2, 1], [2, 2]]
    // THIS FUNCTION WORKS.
    // Board -> Boolean
    // makes sure there are no repeating numbers for each box
    for (var y = 0; y < 9; y += 3){
        for (var x = 0; x < 9; x += 3){
            // each traversal should examine each box
            var cur = []
            for (var i = 0; i < 9; i++){
                var coordinates = [...boxCoordinates[i]]
                coordinates[0] += y
                coordinates[1] += x
                if (cur.includes(board[coordinates[0]][coordinates[1]])){
                    return false
                }
                else if (board[coordinates[0]][coordinates[1]] != null){
                    cur.push(board[coordinates[0]][coordinates[1]])
                }
            }
        }
    }
    return true
}

const createSudoku = function(){
    setBoxes()
    return solve(board2)
}
var random = []
const getRandomNumbers = function(amount){
    if (amount === 0) {
        return random;
      }
      
    let number = Math.floor(Math.random() * 81);
    
    if (!random.includes(number)) {
    random.push(number);
    amount = amount - 1;
    }
    
    return getRandomNumbers(amount, random);
    
    
}

const setEmptySpaces = () =>{
    for (let i = 0; i < random.length; i++) {
        const element = random[i];
        if (element < 9){
            board1[0][element] = " "
        }

        if (element >= 9 && element < 18){
            board1[1][element - 9] = " "
        }
        if (element >= 18 && element < 27 ){
            board1[2][element - 18] = " "
        }
        if (element >= 27 && element < 36 ){
            board1[3][element - 27] = " "
        }
        if (element >= 36 && element < 45 ){
            board1[4][element - 36] = " "
        }
        if (element >= 45 && element < 54 ){
            board1[5][element - 45] = " "
        }
        if (element >= 54 && element < 63 ){
            board1[6][element - 54] = " "
        }
        if (element >= 63 && element < 72 ){
            board1[7][element - 63] = " "
        }
        if (element >= 72 && element < 81 ){
            board1[8][element - 72] = " "
        }

    }
}
const setSudokuForSolving =  function(level){
    setBoxes()
    const solvedBoard = solve(board2)
    board1 = solve(board2)
    if (level === 1){
        random = []
        getRandomNumbers(36)
        setEmptySpaces()
        
    }
    if (level === 2){
        random = []
        getRandomNumbers(45)
        setEmptySpaces()
    }
    if (level === 3){
        random = []
        getRandomNumbers(51)
        setEmptySpaces()
    }
    if (level === 4){
        random = []
        getRandomNumbers(56)
        setEmptySpaces()
    }
    return {board: board1, solvedBoard: solvedBoard}
    
}

export const sudokuGridEasy = setSudokuForSolving(1)
export const sudokuGridMedium = setSudokuForSolving(2)
export const sudokuGridHard = setSudokuForSolving(3)
export const sudokuGridExpert = setSudokuForSolving(4)


