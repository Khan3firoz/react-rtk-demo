import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered, restocked } from './iceCreameSlice'

export const IceCreameView = () => {
  const numberOfIceCream=useSelector((state)=>state.iceCream.numberOfIceCream)
  const dispatch=useDispatch()

  return (
    <div>
        <h2>Number of IceCreames - {numberOfIceCream}</h2>
        <button onClick={()=>dispatch(ordered())}>Order IceCreame</button>
        <button onClick={()=>dispatch(restocked(5))}>Restocked IceCreame</button>
    </div>
  )
}
