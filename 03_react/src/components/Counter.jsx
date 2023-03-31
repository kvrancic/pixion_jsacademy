import React, { memo, useEffect, useState, useMemo } from 'react';
import CustomButton from './CustomButton';

const Counter = ({ id, initialCount, increaseTotal, decreaseTotal, deleteCounter, total }) => {
  console.log('Counter Rendered: ', id);

  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    document.title = `Clicked ${total}`;
  }, [total]);

  useEffect(() => {
    return () => {
      console.log('Unmounted: ', id);
    };
  }, [id]);

  const isLessThan10 = useMemo(() => {
    console.log('recalculating 10');
    return count < 10;
  }, [count]);

  const incrementCount = () => {
    setCount(count + 1);
    increaseTotal();
  };

  const decrementCount = () => {
    if(count > 0) {
    setCount(count - 1);
    decreaseTotal();
    }
  };

  return (
    <div>
      <div>
        Counter: {count}/{total}
      </div>
      <div>Less than 10: {isLessThan10.toString()}</div>
      <CustomButton onClick={incrementCount}>+</CustomButton>
      <CustomButton onClick={decrementCount}>-</CustomButton>
      <CustomButton onClick={() => deleteCounter(id, count)}>Remove</CustomButton>
    </div>
  );
};

export default memo(Counter);
