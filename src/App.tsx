import React, {useRef, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Stylesheet } from '@fluentui/merge-styles';
import * as styles from './styles'

function App() {
  let randomArray = [('#' + Math.floor(Math.random()*16777215).toString(16)),('#' + Math.floor(Math.random()*16777215).toString(16)),('#' + Math.floor(Math.random()*16777215).toString(16))]
  
  const [hexArray, setHexArray] = useState<string[]>(randomArray);
  const [answer, setAnswer] = useState<string>('red')
  console.log(answer)

  const handleSubmission = () =>{
    let randomColorArray = randomArray
    setHexArray(randomColorArray)
    setAnswer(hexArray[Math.floor(Math.random()*3)])
  }
  // answer.current = undefined ? (hexArray[Math.floor(Math.random()*3)]) : 'red' 

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className={styles.container}>
        <div style={{ backgroundColor: `${answer}`, width: '25%', aspectRatio: '1/1' }}></div>
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
