import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementBy1, incrementBy1, incrementByAmmount } from './features/reducers/counterSlice';
import { registerAction } from './features/actions/userAction';
import UserAuth from './components/UserAuth';

const App = () => {
  const [amt, setAmt] = useState(0)
  const count = useSelector((state)=>state.counter.value);
  const dispatch = useDispatch()

  const handleRegister = () => {
    dispatch(registerAction(user));
  };

  return (
    <div>
      <UserAuth />
      <h1>Count : {count}</h1>
      <input 
      onChange={(e)=>setAmt(e.target.value)}
      type="number"  
      placeholder='Ammount'
      />
      <button onClick={()=>dispatch(incrementBy1())}>count++</button>
      <button onClick={()=>dispatch(decrementBy1())}>count--</button>
      <button onClick={()=>dispatch(incrementByAmmount(amt))}>Increase By Amt++</button>
      <button onClick={handleRegister}>Register User</button>
    </div>
  )
}

export default App
