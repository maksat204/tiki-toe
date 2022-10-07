import React, {useState} from 'react'; 
import './Game.css' 
import Board from './Board'; 
import {calculatorWinner} from '../Helper'; 
 
const Game = () => { 
    const [board, setBoard] = useState(Array(9).fill(null)) 
    const[xIsNext, setXIsNext] = useState(true) 
    const winner = calculatorWinner(board) 
     
    const hendleClick = (index) =>{ 
        const boardCopy = [...board] 
        // определентие был ли клик по ячейке или же игра закончена 
        if(winner || boardCopy[index]) return 
        // определить чей ход 
        boardCopy[index] = xIsNext ? 'X' : 'O' 
        //обновить стейт  
        setBoard(boardCopy) 
        setXIsNext(!xIsNext) 
    } 
 
    const startNewGame = () => { 
        return( 
            <button className='start_btn' onClick={() => setBoard(Array(9).fill(null))}> RESTART</button> 
        ) 
    } 
 
    return ( 
        <div className='wrapper'> 
            {startNewGame() } 
            <Board squares={board} click={hendleClick}/> 
            <p className='game_info'> 
            {winner ? 'WINNER ' + winner : 'СЕЙЧАС ХОДИТ ' + (xIsNext ? 'X' : 'O' ) } 
            </p> 
        </div> 
    ) 
} 
 
export default Game;