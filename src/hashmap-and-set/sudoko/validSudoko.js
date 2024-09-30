function validSudoko(board) {

    const hasDuplicates = (arr) => {
        let map = {}
        for(let i = 0 ; i < arr.length ; i++){
            const target = arr[i];
            const tarInMap = target in map;
            if(target !== '.' && tarInMap){
                return true;
            }
            map[target] = i;
        }
    }ws
    //row check
    for (let i = 0; i< board.length; i++) {
        if(hasDuplicates(board[i])) {
            return false;
        };
    }
    
    //column check
    const columns = board[0].map((_, colIndex) => board.map(row => row[colIndex]));

    for (let i = 0; i< columns.length; i++) {
        if(hasDuplicates(columns[i])) {
            return false;
        };
    }

    //box check

    let starts = [[0, 0], [0, 3], [0, 6],
                  [3, 0], [3, 3], [3, 6],
                  [6, 0], [6, 3], [6, 6]];

    for (let [startRow, startCol] of starts) {
        let set = new Set();
        for (let row = startRow; row < startRow + 3; row++) {
            for (let col = startCol; col < startCol + 3; col++) {
                let item = board[row][col];
                if (item !== '.' && set.has(item)) {
                    return false;
                }
                set.add(item);
            }
        }
    }
    return true;
}

const t = validSudoko([
     ["8","3",".",        ".","7",".",        ".",".","."]
    ,["6",".",".",        "1","9","5",        ".",".","."]
    ,[".","9","8",        ".",".",".",        ".","6","."]

    ,["8",".",".",        ".","6",".",        ".",".","3"]
    ,["4",".",".",        "8",".","3",        ".",".","1"]
    ,["7",".",".",        ".","2",".",        ".",".","6"]

    ,[".","6",".",        ".",".",".",        "2","8","."]
    ,[".",".",".",        "4","1","9",        ".",".","5"]
    ,[".",".",".",        ".","8",".",        ".","7","9"]
]);
console.log(t);