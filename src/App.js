
import { useState } from 'react';
import './App.css';

const cardImage = [
  { "src": "/img/helmet-1.png" },
  { "src": "/img/potion-1.png" },
  { "src": "/img/ring-1.png" },
  { "src": "/img/scroll-1.png" },
  { "src": "/img/shield-1.png" },
  { "src": "/img/sword-1.png" },
]


function App() {

  const [mycards, setmycards] = useState([]);
  const [turns, setTurns] = useState(0)


  const swapCards = () => {
    const cards = [...cardImage, ...cardImage]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, "id": Math.random() }))
    setmycards(cards);
    setTurns(0);

  }

  console.log(mycards)


  return (
    <div className="App">
      <button onClick={() => swapCards()}>New game</button>
       
      
    
     <center>
      <div className='cr'>
        {mycards.map((card) => {
          return (
            <div className='bc'  key={card.id}>
              <img className='front' src={card.src} alt="card front"></img>
              <img className='back' src="img/cover.png" alt="card back"></img>
            </div>
          )
        })}
      </div>
      </center>
    </div>
  );
}

export default App;
