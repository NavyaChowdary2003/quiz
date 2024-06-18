import React from 'react';
import { useDispatch } from 'react-redux';
import { increment,decrement,incrementbyvalue } from './redux/Reducer';
import { useSelector } from 'react-redux';


const App = () => {
  const count= useSelector(state => state.counter.count)
  const dispatch = useDispatch()
      console.log(count)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>dispatch(increment())}>increment</button>
      <button onClick={()=>dispatch(decrement())}>decrement</button>
      <button onClick={()=>dispatch(incrementbyvalue(5))}>incrementbyvalue</button>                  
    </div>
  );
};

export default App;
