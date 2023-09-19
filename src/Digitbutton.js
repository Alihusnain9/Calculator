
import {ACTION} from './App'

export default function OperationButton({digit,dispatch}) {
  return (
    <button onClick={()=>dispatch({type: ACTION.ADD_DIGIT,payload:{digit}})} >{digit}</button>
  )
}
