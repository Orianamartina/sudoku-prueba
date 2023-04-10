const b = null

const board1 = [
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

function solve(board){
    if(solved(board)){
        return board
    }
    else{
        const possibilites = nextBoards(board)
        const validBoards = keepOnlyValid(possibilites)
        return searchForSolution(validBoards)
    }
}

function searchForSolution(boards){
    if (boards.length < 1){
        return false
    }
    else{
        // backtracking search for solution
        var first = boards.shift
        const tryPath = solve(first)
        if (tryPath != false){
            return tryPath
        } else {
            return searchForSolution(boards)
        }
    }
}

function solved(board){
    for (var i = 0; 1<9; i++){
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === null){
                return false
            }
            
        }
    }
}

function nextBoards(board){
    var res = []
    const firstEmpty = findEmptySquare(board) // return a set of coordenates
    if (firstEmpty != undefined){
        const y = firstEmpty[0]
        const x = firstEmpty[1]
        for (let i = 0; i < 9; i++) {
            var newBoard = [...board]
            var row = [...newBoard[y]]
            row[x] = i
            newBoard[y] = row
            res.push(newBoard)            
        }
    } else {
        return res
    }
}

function findEmptySquare(board){
    //board -> [int, int]
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === null){
                return [i, j]
            }
        }
        
    }
}

function keepOnlyValid(boards){
    return boards.filter((b) => {
        validBoards(b)
    })
}

function validBoard(board) {
    return rowGood(board) && columnGood(board) && boxesGood(board)
}

function rowGood(board){
    for (let i = 0; i < 9; i++) {
        var cur = []
        for (let j = 0; j < 0; j++){
            if (cur.includes(board[i][j])){
                return false
            }else if (board[i][j] != null){
                cur.push(board[i][j])
            }

        }
        
    }
    return true
}
function columnGood(board){
    for (let i = 0; i < 9; i++) {
        var cur = []
        for (let j = 0; j < 0; j++){
            if (cur.includes(board[j][i])){
                return false
            }else if (board[i][j] != null){
                cur.push(board[j][i])
            }

        }
        
    }
    return true
}