const board = document.getElementById("sudoku-board");
const message = document.getElementById("message");

const puzzle = [
  [5,3,"","",7,"","","",""],
  [6,"","",1,9,5,"","",""],
  ["",9,8,"","","","",6,""],
  [8,"","","",6,"","","",3],
  [4,"","",8,"",3,"","",1],
  [7,"","","",2,"","","",6],
  ["",6,"","","","",2,8,""],
  ["","","",4,1,9,"","",5],
  ["","","","",8,"","",7,9]
];

const solution = [
  [5,3,4,6,7,8,9,1,2],
  [6,7,2,1,9,5,3,4,8],
  [1,9,8,3,4,2,5,6,7],
  [8,5,9,7,6,1,4,2,3],
  [4,2,6,8,5,3,7,9,1],
  [7,1,3,9,2,4,8,5,6],
  [9,6,1,5,3,7,2,8,4],
  [2,8,7,4,1,9,6,3,5],
  [3,4,5,2,8,6,1,7,9]
];

function createBoard() {

  board.innerHTML = "";

  for(let row=0; row<9; row++){

    for(let col=0; col<9; col++){

      const input = document.createElement("input");

      input.type = "number";
      input.min = 1;
      input.max = 9;

      input.classList.add("cell");

      if(puzzle[row][col] !== ""){

        input.value = puzzle[row][col];
        input.disabled = true;
        input.classList.add("fixed");

      }

      input.id = `${row}-${col}`;

      board.appendChild(input);
    }
  }

  message.innerHTML = "";
}

function checkSolution(){

  let correct = true;

  for(let row=0; row<9; row++){

    for(let col=0; col<9; col++){

      const cell = document.getElementById(`${row}-${col}`);

      if(parseInt(cell.value) !== solution[row][col]){

        correct = false;
      }
    }
  }

  if(correct){

    message.innerHTML = "🎉 Congratulations! Sudoku Solved!";
    message.className = "correct";

  }else{

    message.innerHTML = "❌ Incorrect Solution. Try Again!";
    message.className = "wrong";
  }
}

function solveSudoku(){

  for(let row=0; row<9; row++){

    for(let col=0; col<9; col++){

      const cell = document.getElementById(`${row}-${col}`);

      cell.value = solution[row][col];
    }
  }

  message.innerHTML = "✅ Sudoku Solved Automatically!";
  message.className = "correct";
}

document.getElementById("checkBtn")
.addEventListener("click",checkSolution);

document.getElementById("solveBtn")
.addEventListener("click",solveSudoku);

document.getElementById("newGame")
.addEventListener("click",createBoard);

createBoard();