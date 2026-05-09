const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const scoreElement = document.getElementById("score");
const restartBtn = document.getElementById("restartBtn");

const box = 20;

let snake;
let direction;
let food;
let score;
let game;

function startGame(){

    snake = [
        {x: 200, y: 200}
    ];

    direction = "RIGHT";

    food = {
        x: Math.floor(Math.random() * 19) * box,
        y: Math.floor(Math.random() * 19) * box
    };

    score = 0;
    scoreElement.innerText = score;

    clearInterval(game);
    game = setInterval(draw, 120);
}

document.addEventListener("keydown", changeDirection);

function changeDirection(event){

    if(event.key === "ArrowLeft" && direction !== "RIGHT"){
        direction = "LEFT";
    }

    else if(event.key === "ArrowUp" && direction !== "DOWN"){
        direction = "UP";
    }

    else if(event.key === "ArrowRight" && direction !== "LEFT"){
        direction = "RIGHT";
    }

    else if(event.key === "ArrowDown" && direction !== "UP"){
        direction = "DOWN";
    }
}

function draw(){

    ctx.fillStyle = "black";
    ctx.fillRect(0,0,400,400);

    // Draw Snake
    for(let i=0; i<snake.length; i++){

        ctx.fillStyle = (i === 0) ? "lime" : "green";

        ctx.fillRect(snake[i].x, snake[i].y, box, box);

        ctx.strokeStyle = "black";
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }

    // Draw Food
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, box, box);

    // Snake Head Position
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction === "LEFT") snakeX -= box;
    if(direction === "UP") snakeY -= box;
    if(direction === "RIGHT") snakeX += box;
    if(direction === "DOWN") snakeY += box;

    // Eat Food
    if(snakeX === food.x && snakeY === food.y){

        score++;
        scoreElement.innerText = score;

        food = {
            x: Math.floor(Math.random() * 19) * box,
            y: Math.floor(Math.random() * 19) * box
        };

    }else{

        snake.pop();
    }

    const newHead = {
        x: snakeX,
        y: snakeY
    };

    // Game Over Conditions
    if(
        snakeX < 0 ||
        snakeY < 0 ||
        snakeX >= 400 ||
        snakeY >= 400 ||
        collision(newHead, snake)
    ){

        clearInterval(game);

        alert("💀 Game Over!\nYour Score: " + score);

        return;
    }

    snake.unshift(newHead);
}

function collision(head, array){

    for(let i=0; i<array.length; i++){

        if(head.x === array[i].x && head.y === array[i].y){

            return true;
        }
    }

    return false;
}

restartBtn.addEventListener("click", startGame);

startGame();