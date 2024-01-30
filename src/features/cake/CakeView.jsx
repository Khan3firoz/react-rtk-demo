import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered, restocked } from './cakeSlice'

export const CakeView = () => {
  const numberOfCake=useSelector((state)=>state.cake.numberOfCake)
  const dispatch=useDispatch()

  return (
    <div>
        <h2>Number of cake - {numberOfCake}</h2>
        <button onClick={()=>dispatch(ordered())}>Order cake</button>
        <button onClick={()=>dispatch(restocked(5))}>Restocked cake</button>
    </div>
  )
}
