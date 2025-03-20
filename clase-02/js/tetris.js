document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".grid");
    const scoreDisplay = document.getElementById("score");
    const width = 10;
    let squares = [];
    let score = 0;
  
    // Crear el grid
    for (let i = 0; i < 200; i++) {
      const square = document.createElement("div");
      grid.appendChild(square);
      squares.push(square);
    }
  
    // L-Tetromino
    const lTetromino = [
      [1, width + 1, width * 2 + 1, 2],
      [width, width + 1, width + 2, width * 2 + 2],
      [1, width + 1, width * 2 + 1, width * 2],
      [width, width * 2, width * 2 + 1, width * 2 + 2],
    ];
  
    let currentPosition = 4;
    let currentRotation = 0;
    let current = lTetromino[currentRotation];
  
    // Dibujar el Tetromino
    function draw() {
      current.forEach((index) =>
        squares[currentPosition + index].classList.add("block")
      );
    }
  
    function undraw() {
      current.forEach((index) =>
        squares[currentPosition + index].classList.remove("block")
      );
    }
  
    // Mover Tetromino hacia abajo
    function moveDown() {
      undraw();
      currentPosition += width;
      draw();
      freeze();
    }
  
    // Congelar Tetromino
    function freeze() {
      if (current.some((index) =>
          squares[currentPosition + index + width].classList.contains("taken")
        )) {
        current.forEach((index) =>
          squares[currentPosition + index].classList.add("taken")
        );
        // Crear nuevo Tetromino
        currentRotation = 0;
        currentPosition = 4;
        current = lTetromino[currentRotation];
        draw();
      }
    }
  
    setInterval(moveDown, 1000);
  });
  