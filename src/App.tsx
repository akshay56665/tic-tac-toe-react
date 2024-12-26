import { useState } from 'react';
import './App.css';
import Block from './components/block';

function App() {
  const [state, setState] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState('X');

  function checkWin() {
    const winning = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    
    for (let i = 0;i < winning.length; i++)  {
      const  [a,b,c] = winning[i]; 
      if(state[a]!==null&&state[a]===state[b]&&state[a]===state[c]){
        return true;
      }
    }
    return false;
  }

  function handleclick(index: number) {
    const statecopy = state;
    if (state[index] != null) {
      return;
    }
    statecopy[index] = turn;

    setTurn(turn === 'X' ? 'O' : 'X');
    setState(statecopy);
    if (checkWin()) {
      alert(`${turn} Win the game`);
      setState(Array(9).fill(null))
    }
  }
  return (
    <div className="container">
      <div className="board">
        <div className="row">
          <Block value={state[0]} onClick={() => handleclick(0)} />
          <Block value={state[1]} onClick={() => handleclick(1)} />
          <Block value={state[2]} onClick={() => handleclick(2)} />
        </div>

        <div className="row">
          <Block value={state[3]} onClick={() => handleclick(3)} />
          <Block value={state[4]} onClick={() => handleclick(4)} />
          <Block value={state[5]} onClick={() => handleclick(5)} />
        </div>

        <div className="row">
          <Block value={state[6]} onClick={() => handleclick(6)} />
          <Block value={state[7]} onClick={() => handleclick(7)} />
          <Block value={state[8]} onClick={() => handleclick(8)} />
        </div>
      </div>
    </div>
  );
}

export default App;
