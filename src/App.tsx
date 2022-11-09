import React, {useRef, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Stylesheet } from '@fluentui/merge-styles';
import * as styles from './styles'

function App() {

  let initialRandomArray = [('#' + Math.floor(Math.random()*16777215).toString(16)),('#' + Math.floor(Math.random()*16777215).toString(16)),('#' + Math.floor(Math.random()*16777215).toString(16))]
  let answerIndex = Math.floor(Math.random()*3)

  const [hexArray, setHexArray] = useState<string[]>(initialRandomArray);
  const [divColor, setDivColor] = useState<string>(initialRandomArray[answerIndex])

  const handleSubmission = () =>{
    let newRandomArray = [('#' + Math.floor(Math.random()*16777215).toString(16)),('#' + Math.floor(Math.random()*16777215).toString(16)),('#' + Math.floor(Math.random()*16777215).toString(16))]
    setHexArray(newRandomArray)
    setDivColor(newRandomArray[answerIndex])
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className={styles.container}>
        <div style={{ backgroundColor: `${divColor}`, width: '25%', aspectRatio: '1/1' }}>{divColor}</div>
      </div>
      <div className={styles.buttonContainer}>
        {hexArray.map((button, index) =>{
          return(
          <button key={index} className={styles.button} onClick={handleSubmission}>{hexArray[index].toUpperCase()}</button>
          )
        })}
      </div>
    </div>
  );
}

export default App;
