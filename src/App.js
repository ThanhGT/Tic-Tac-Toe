import {useState} from 'react';

/** child component that takes in the value and a function called onSquareClick */
function Square({value, onSquareClick})
{ 
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

/** parent component that handles the rendering of a square on the board when clicked by calling the onSquareClick function which then calls the callback function, handleClick */
export default function Board() {

  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  //event handler that handles the function onSquareClick 
  function handleClick(i)
  {
    //check if the square is already filled
    if(squares[i]) {
      return;
    }
    //.slice create a copy of the squares array instead of modifying the existing array
    const nextSquares = squares.slice();
    //checks if xIsNext is true and assigns the correct value accordingly and sets xIsNext to false afterwards
    if(xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext); // sets xIsNext to false
  }

  return (
    <>
      <div className = "board-row">
        <Square value = {squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square value = {squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value = {squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className = "board-row">
        <Square value = {squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value = {squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value = {squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      <div className = "board-row">
        <Square value = {squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value = {squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value = {squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>
    </>
  )
}
