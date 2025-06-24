import React from 'react'
import { useDispatch } from 'react-redux'
import { removeUser } from '../features/reducers/userSlice';

const Homepage = () => {
  const dispatch = useDispatch();
  return (
    <div className='flex items-center justify-between p-20'>
      <h1>Homepage</h1>
      <button onClick={()=>dispatch(removeUser())} className='px-5 py-2 bg-emerald-500 text-white font-bold'>Logout</button>
    </div>
  )
}

export default Homepage