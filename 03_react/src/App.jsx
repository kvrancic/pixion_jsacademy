import React, { useState } from 'react';
import Counter from './components/Counter';
import CustomButton from './components/CustomButton';
import styles from './App.module.css';

function App() {
  const [total, setTotal] = useState(0);
  const [counters, setCounters] = useState([]);

  const addCounter = () => {
    const id = counters.length;
    setCounters((prevCounters) => [...prevCounters, { id, count: 0 }]);
  };

  const deleteCounter = (id, count) => {
    const index = counters.findIndex((counter) => counter.id === id);
    if (index !== -1) {
      setTotal((prevTotal) => prevTotal - count);
      setCounters((counters) => [
        ...counters.slice(0, index),
        ...counters.slice(index + 1),
      ]);
    }
  };


  const increaseTotal = () => {
    setTotal((prevTotal) => prevTotal + 1);
  };

  const decreaseTotal = () => {
    setTotal((prevTotal) => prevTotal - 1);
  };

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        {counters.map(({ id, count }) => (
          <Counter
            key={id}
            id={id}
            initialCount={count}
            increaseTotal={increaseTotal}
            deleteCounter={deleteCounter}
            total={total}
            decreaseTotal={decreaseTotal}
          />
        ))}
        <CustomButton onClick={addCounter}>Add counter</CustomButton>
      </header>
    </div>
  );
}

export default App;
