
import { useState,
  useEffect } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';

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
  const [turns, setTurns] = useState(0);
  const [choice1,setChoice1]=useState(null);
  const [choice2,setChoice2]=useState(null);



//function swap cards
  const swapCards = () => {
    const cards = [...cardImage, ...cardImage]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, "id": Math.random() }))
    setmycards(cards);
    setTurns(0);

  }

 // function setting two choices
 const setChoices=(card)=>{
   choice1?setChoice2(card):setChoice1(card)
 }

 




  return (
    <div className="App">
      <button onClick={() => swapCards()}>New game</button>
       
      
    
     <center>
      <div className='cr'>
        {mycards.map((card) => {
          return (
           <SingleCard key={card.id} card={card} setChoices={setChoices}/>
          )
        })}
      </div>
      </center>
    </div>
  );
}

export default App;
