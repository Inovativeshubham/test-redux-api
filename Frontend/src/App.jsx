import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementBy1, incrementBy1, incrementByAmmount } from './features/reducers/counterSlice';
import { currentUserAction, loginAction, registerAction } from './features/actions/userAction';
import { useForm } from 'react-hook-form'

const App = () => {
  // const [amt, setAmt] = useState(0)
  // const count = useSelector((state)=>state.counter.value);
  // const dispatch = useDispatch()

  // const handleRegister = () => {
  //   dispatch(registerAction(user));
  // };

  const {register, handleSubmit, reset} = useForm();
  const dispatch = useDispatch();
  // console.log(register);

  const formSubmit = (data)=>{
    console.log(data);
    // dispatch(registerAction(data))
    // alert("user registered successfully")
    dispatch(loginAction(data))
    alert('confirm user is Logged in ')
    reset();
  }

  useEffect(() => {
    dispatch(currentUserAction());
  }, [])
  


  




  return (


    <div>
      {/* <UserAuth />
      <h1>Count : {count}</h1>
      <input 
      onChange={(e)=>setAmt(e.target.value)}
      type="number"  
      placeholder='Ammount'
      />
      <button onClick={()=>dispatch(incrementBy1())}>count++</button>
      <button onClick={()=>dispatch(decrementBy1())}>count--</button>
      <button onClick={()=>dispatch(incrementByAmmount(amt))}>Increase By Amt++</button>
      <button onClick={handleRegister}>Register User</button> */}


      <h1>Hello From App</h1>
      <form
      onSubmit={handleSubmit(formSubmit)}
      >
        {/* <input 
        {...register('name')}
        type="text" placeholder='Username' /> */}
        <input 
        {...register('email')}
        type="email" placeholder='Email' />
        <input 
        {...register('password')}
        type="paasword" placeholder='******' />
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default App
