import { useEffect, useState } from 'react'
import Die from './components/Die'
import './styles.css'
import Confetti from 'react-confetti'
import StatBox from './components/StatBox'

function App() {
  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)
  const [rolls, setRolls] = useState(0)
  const [time, setTime] = useState(0)
  
  useEffect(() => {
    const timer = setInterval(() => {
      console.log(tenzies)
      if(!tenzies) {
        setTime(prevTime => prevTime + 1)
      }
    }, 1000)
    return () => clearInterval(timer)
  }, [tenzies])

  useEffect(() => {
    if(isGameOver()) {
      setTenzies(true)
    }
  }, [dice])

  function isGameOver() {
    const allHeld = dice.every(die => die.isHeld)
    const allSameValue = dice.every(die => die.value === dice[0].value)
    return allHeld && allSameValue
  }

  function createNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: Math.random()
    }
  }

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(createNewDie())
    }
    return newDice
  }

  function holdDie(id: number) {
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ?
        {...die, isHeld: !die.isHeld} :
        die
    }))
  }

  function handleRoll() {
    setDice(oldDice => oldDice.map(die => {
      return die.isHeld ?
        die :
        createNewDie()
    }))
    setRolls(prevRolls => prevRolls + 1)
  }

  function handleNewGame() {
    setDice(allNewDice)
    setTenzies(false)
    setRolls(0)
    setTime(0)
  }
  
  const diceElements = dice.map(die => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDie={() => holdDie(die.id)}
    />
  ))

  return (
    <main>
      {tenzies && <Confetti />}
      <h1>Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value.</p>
      <div className="dice-container">
        {diceElements}
      </div>
      {
        tenzies ?
        <button className="roll-button" onClick={handleNewGame}>New Game</button>
        : <button className="roll-button" onClick={handleRoll}>Roll</button>
      }
      {
        tenzies &&
        <div className="stats">
          <StatBox label="Rolls" value={rolls}/>
          <StatBox label="Time" value={time}/>
        </div>
      }
    </main>
  )
}

export default App
