import React, {useEffect, useRef, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Stylesheet } from '@fluentui/merge-styles';
import * as styles from './styles'

function App() {

  let initialRandomArray = [('#' + Math.floor(Math.random()*16777215).toString(16)),('#' + Math.floor(Math.random()*16777215).toString(16)),('#' + Math.floor(Math.random()*16777215).toString(16))]
  // let answerIndex = Math.floor(Math.random()*3)

  const [answerIndex, setAnswerIndex] = useState<number>(Math.floor(Math.random()*3))
  const [hexArray, setHexArray] = useState<string[]>(initialRandomArray);
  const [divColor, setDivColor] = useState<string>(initialRandomArray[answerIndex])
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isCorrect, setIsCorrect] = useState<boolean>(true)

  
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className={styles.container}>
        <div style={{ backgroundColor: `${divColor}`, width: '25%', aspectRatio: '1/1', border: '5px solid black' }}></div>
      </div>
      <div className={styles.buttonContainer}>
        {hexArray.map((button, index) => {
          return (
            <button key={index} className={styles.button} onClick={() => {
              hexArray[index] == divColor ? setIsCorrect(true) : setIsCorrect(false)
              console.log(index + ' : ' + answerIndex)
              let newRandomArray = [('#' + Math.floor(Math.random() * 16777215).toString(16)), ('#' + Math.floor(Math.random() * 16777215).toString(16)), ('#' + Math.floor(Math.random() * 16777215).toString(16))]
              setHexArray(newRandomArray)
              setDivColor(newRandomArray[answerIndex])
              setAnswerIndex(Math.floor(Math.random()*3))
              setIsOpen(true)
                 
            }}>{hexArray[index].toUpperCase()}</button>
          )
        })}
      </div>
      <span style={{textAlign: 'center', fontSize: '40px'}}>&nbsp;{isOpen ? isCorrect ? 'Correct!' : 'Incorrect' : ''}</span>
    </div>
  );
}

export default App;
