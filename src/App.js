
import {
  useState,
  useEffect
} from 'react';
import './App.css';
import SingleCard from './components/SingleCard';

const cardImage = [
  { "src": "/img/helmet-1.png", "matched": false },
  { "src": "/img/potion-1.png", "matched": false },
  { "src": "/img/ring-1.png", "matched": false },
  { "src": "/img/scroll-1.png", "matched": false },
  { "src": "/img/shield-1.png", "matched": false },
  { "src": "/img/sword-1.png", "matched": false },
]


function App() {

  const [mycards, setmycards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choice1, setChoice1] = useState(null);
  const [choice2, setChoice2] = useState(null);

  //comparing two cards
  useEffect(() => {
    if (choice1 && choice2) {
      if (choice1.src === choice2.src) {
        setmycards(prevcard => {
          return prevcard.map((card) => {
            if (card.src === choice1.src) {
              return { ...card, "matched": true }
            }
            else return card
          })
        })
        resetChoices()
      }
      else  setTimeout(()=> resetChoices(),1000)
    }

  }, [choice1, choice2]);

  console.log(mycards)

  //function swap cards
  const swapCards = () => {
    const cards = [...cardImage, ...cardImage]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, "id": Math.random() }))
    setmycards(cards);
    setTurns(0);

  }

  // function setting two choices
  const setChoices = (card) => {
    choice1 ? setChoice2(card) : setChoice1(card)
  }

  //reset choices
  const resetChoices = () => {
    setChoice1(null)
    setChoice2(null)
    setTurns(prevturn => prevturn + 1)
  }






  return (
    <div className="App">
      <button onClick={() => swapCards()}>Click Here To Start New Game</button>

      <h1>Turns {turns}</h1>


      <center>
        <div className='cr'>
          {mycards.map((card) => {
            return (
              <SingleCard key={card.id} card={card} setChoices={setChoices} flipped={card===choice1 || card===choice2 || card.matched} />
            )
          })}
        </div>
      </center>
    </div>
  );
}

export default App;
