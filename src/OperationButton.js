// import {ACTION} from './App'
// export default function OperationButton({dispatch,operation}){
//   return(
//     <button onClick={()=>dispatch({type: ACTION.CHOOSE_OPERATION,payload:{operation}})} className="btn btn11">{operation}</button>
//   )
// }





















// import React from 'react'
import { ACTION } from './App'
export default function OperationButton({dispatch,operation}) {
  return (
    <button onClick={()=>dispatch({type:ACTION.C_OPERATION,payload:{operation}})}>{operation}</button>
  
  )
}

