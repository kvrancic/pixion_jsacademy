import styles from './App.module.css'
import {useState} from 'react';

import Counter from './components/Counter';


function App() {
  //const [isCounterVisible, setCounterVisible] = useState(true);  
  const [totalCounter, setTotalCounter] = useState(0); 

  const increaseTotal = (message) => {
    console.log('message'); 
    setTotalCounter(totalCounter + 1);
  }

  //const counterArray = (new Array(5)).fill(1); 


  const [counters, setCounters] = useState([]);
  return (
    <div className={styles.App}>
      <header className = {styles.AppHeader}>
        {
          counters.map((item, index) => {
            return(
            <Counter initialCounter = {0}
            increaseTotal={increaseTotal}
            total={totalCounter}
            key = {item.id} //koristenje indexa ovdje je losa stvar, trebali bi imat neku konkretnu vrijednost
            /> )
          })
        }
       {/*  UNMOUNTANJE 
        {isCounterVisible ? <Counter
          initialCounter = {initialCounterApp}
          total={totalCounter}
          increaseTotal = {increaseTotal}
        /> : null}  
        <button onClick={() => setCounterVisible(!isCounterVisible) }> hide </button>
        <Counter initialCounter = {0} increaseTotal={increaseTotal} total={totalCounter}> </Counter>
        Ovo je total: {totalCounter} */}
        <button onClick={() => { setCounters([...counters, {id: counters.length}])}}> add counter </button>
      </header>
    </div>
  );
}

export default App;
