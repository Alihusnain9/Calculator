// import './App.css';
// import Digitbutton from './Digitbutton';
// import React, { useReducer } from 'react';
// import OperationButton from './OperationButton';


// export const ACTION = {
//   ADD_DIGIT: 'add-digit',
//   DELETE_DIGIT: 'delete-dIgit',
//   CLEAR: 'CLEAR',
//   EAVALUATE: 'evaluate',
//   CHOOSE_OPERATION: 'choose-operation'
// }

// function reducer(state, { type, payload }) {
//   switch (type) {


//     case ACTION.ADD_DIGIT:
//       if (state.overwrite) {
//         return {
//           ...state,
//           currentOperand: payload.digit,
//           overwrite: false
//         }
//       }
//       if (payload.digit === '0' && state.currentOperand === '0') return state
//       // if (payload.digit === '.' && state.currentOperand === '') return state

//       if (payload.digit == '.' && state.currentOperand.includes('.')) return state
//       return {
//         ...state,
//         currentOperand: `${state.currentOperand || ''}${payload.digit}`,
//       }


    // case ACTION.CHOOSE_OPERATION:
    //   if (state.previousOperand == null && state.currentOperand == null) {
    //     return state
    //   }

    //   if (state.currentOperand === null) {
    //     return {
    //       ...state,
    //       operation: payload.operation


    //     }
    //   }
    //   if (state.previousOperand == null) {
    //     return {
    //       ...state,
    //       operation: payload.operation,
    //       previousOperand: state.currentOperand,
    //       currentOperand: null
    //     }
    //   }

    //   return {
    //     ...state,
    //     previousOperand: evaluate(state),
    //     operation: payload.operation,
    //     currentOperand: null
    //   }


//     case ACTION.DELETE_DIGIT:
//       if (state.overwrite) {
//         return {
//           currentOperand: null,
//           overwrite: false
//         }
//       }
//       if (state.currentOperand == null) return state
//       if (state.currentOperand.length == 1) return {}

//       return {
//         ...state,
//         currentOperand: state.currentOperand.slice(0, -1)
//       }

//     case ACTION.CLEAR:
//       return {}

//     case ACTION.EAVALUATE:

//       if (
//         state.previousOperand == null ||
//         state.currentOperand == null ||
//         state.operation == null
//       ) {
//         return state
//       }

//       return {
//         ...state,
//         overwrite: true,
//         currentOperand: evaluate(state),
//         operation: null,
//         previousOperand: null

//       }
//   }

// }

// function evaluate({ currentOperand, previousOperand, operation }) {
//   let prev = parseFloat(previousOperand)
//   let curr = parseFloat(currentOperand)
//   if (isNaN(prev) || isNaN(curr)) return ''
//   let compute = ''
//   switch (operation) {
//     case '+':
//       compute = prev + curr
//       break;
//     case '-':
//       compute = prev - curr
//       break;
//     case '*':
//       compute = prev * curr
//       break;
//     case '/':
//       compute = prev / curr
//   }
//   return compute.toString()
// }

// const INTEGER_FORMATOR = new Intl.NumberFormat('en-us', {
//   maximumFractionDigits: 0,
// })
// function formatOperand(operand) {
//   if (operand == null) return
//   const [integer, decimal] = operand.split(".")
//   if (decimal == null) return INTEGER_FORMATOR.format(integer)
//   return `${INTEGER_FORMATOR.format(integer)}.${decimal}`
// }

// function App() {
//   const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(reducer, {})
//   return (
//     <>
//       <div className="calculator">
//         <div className="top">
//           <div className="prev">{formatOperand(previousOperand)} {operation} </div>
//           <div className="curr">{formatOperand(currentOperand)} </div>
//         </div>
//         <button onClick={() => dispatch({ type: ACTION.CLEAR })} className="btn spn">Ac</button>
//         <button onClick={() => dispatch({ type: ACTION.DELETE_DIGIT })} className="btn">Del</button>
//         <OperationButton operation='/' dispatch={dispatch} />
//         <Digitbutton digit='7' dispatch={dispatch} />
//         <Digitbutton digit='8' dispatch={dispatch} />
//         <Digitbutton digit='9' dispatch={dispatch} />
//         <OperationButton operation='*' dispatch={dispatch} />
//         <Digitbutton digit='4' dispatch={dispatch} />
//         <Digitbutton digit='5' dispatch={dispatch} />
//         <Digitbutton digit='6' dispatch={dispatch} />
//         <OperationButton operation='-' dispatch={dispatch} />
//         <Digitbutton digit='1' dispatch={dispatch} />
//         <Digitbutton digit='2' dispatch={dispatch} />
//         <Digitbutton digit='3' dispatch={dispatch} />
//         <OperationButton operation='+' dispatch={dispatch} />
//         <Digitbutton digit='.' dispatch={dispatch} />
//         <Digitbutton digit='0' dispatch={dispatch} />
//         <button onClick={() => dispatch({ type: ACTION.EAVALUATE })} className="btn spn">=</button>
//       </div>
//     </>
//   );
// }
// export default App;






















import React, { useReducer } from 'react'
import './App.css'
import Digitbutton from './Digitbutton'
import OperationButton from './OperationButton'

export const ACTION = {
  ADD_DIGIT: 'add-digit',
  DELETE_DIGIT: 'delete-digit',
  C_OPERATION: 'operation',
  EVALUATE: 'evaluate',
  CLEAR: 'clear'
}

function reducer(state, { type, payload }) {

  switch (type) {



    case ACTION.ADD_DIGIT:
      if(state.overwrite){
        return {
          ...state,
          currentOperand:payload.digit,
          overwrite:false,
        }
      }
      if (state.currentOperand === '0' && payload.digit === '0') return state
      if (payload.digit === '.' && state.currentOperand.includes('.')) return state

      return {
        ...state,
        currentOperand: `${state.currentOperand || ''}${payload.digit}`
      }




    case ACTION.CLEAR:
      return {
        ...state,
        currentOperand:'',
        previousOperand:'',
        operation: ''
      }




    case ACTION.DELETE_DIGIT:
      if(state.overwrite) return {
      currentOperand:'',
      overwrite:false
      }

      if(state.currentOperand == null)return state
    // if(state.currentOperand.length == 1) return {}
      // if(state.currentOperand == '' && state.previousOperand == '' && state.operation == '') return {}

      return {
       ...state,
        currentOperand: state.currentOperand.slice(0, -1)
      }




    case ACTION.C_OPERATION:

      if (state.currentOperand == null && state.previousOperand == null) return state

      if(state.currentOperand === null) {
        return{
          ...state,
          operation : payload.operation
        }
      }
      if (state.previousOperand == '') {
        return {
          ...state,
          previousOperand: state.currentOperand,
          operation: payload.operation,
          currentOperand: null
        }
      }
      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null
      }
      


    case ACTION.EVALUATE:

      if (state.currentOperand == '' ||state.currentOperand == null || state.previousOperand == '' || state.operation=='') return state
      return {
        ...state,
        currentOperand: evaluate(state),
        previousOperand: '',
        operation: '',
        overwrite:true
      }
  }
}

function evaluate({ currentOperand, previousOperand, operation }) {
  const prev = parseFloat(previousOperand)
  const curr = parseFloat(currentOperand)
  let operaion = operation
  let compute = ''
  if (isNaN(prev) || isNaN(curr)) return ''
  switch (operaion) {
    case '+':
      compute = prev + curr
      break;
    case '-':
      compute = prev - curr
      break;
    case '*':
      compute = prev * curr
      break;
    case '/':
      compute = prev / curr
      break;
  }
  return compute.toString()
}














// function reducer(state, { type, payload }) {
//   switch (type) {


//     case ACTION.ADD_DIGIT:
//       if (state.overwrite) {
//         return {
//           ...state,
//           currentOperand: payload.digit,
//           overwrite: false
//         }
//       }
//       if (payload.digit === '0' && state.currentOperand === '0') return state
//       // if (payload.digit === '.' && state.currentOperand === '') return state

//       if (payload.digit == '.' && state.currentOperand.includes('.')) return state
//       return {
//         ...state,
//         currentOperand: `${state.currentOperand || ''}${payload.digit}`,
//       }


//     case ACTION.C_OPERATION:
//       if (state.previousOperand == null && state.currentOperand == null) {
//         return state
//       }

//       if (state.currentOperand === null) {
//         return {
//           ...state,
//           operation: payload.operation
//         }
//       }
//       if (state.previousOperand == null) {
//         return {
//           ...state,
//           operation: payload.operation,
//           previousOperand: state.currentOperand,
//           currentOperand: null
//         }
//       }

//       return {
//         ...state,
//         previousOperand: evaluate(state),
//         operation: payload.operation,
//         currentOperand: null
//       }


//     case ACTION.DELETE_DIGIT:
//       if (state.overwrite) {
//         return {
//           currentOperand: null,
//           overwrite: false
//         }
//       }
//       if (state.currentOperand == null) return state
//       if (state.currentOperand.length == 1) return {}

//       return {
//         ...state,
//         currentOperand: state.currentOperand.slice(0, -1)
//       }

//     case ACTION.CLEAR:
//       return {}
      
//     case ACTION.EVALUATE:

//       if (
//         state.previousOperand == null ||
//         state.currentOperand == null ||
//         state.operation == null
//       ) {
//         return state
//       }

//       return {
//         ...state,
//         overwrite: true,
//         currentOperand: evaluate(state),
//         operation: null,
//         previousOperand: null

//       }
// }
// }

// function evaluate({ currentOperand, previousOperand, operation }) {
//   let prev = parseFloat(previousOperand)
//   let curr = parseFloat(currentOperand)
//   if (isNaN(prev) || isNaN(curr)) return ''
//   let compute = ''
//   switch (operation) {
//     case '+':
//       compute = prev + curr
//       break;
//     case '-':
//       compute = prev - curr
//       break;
//     case '*':
//       compute = prev * curr
//       break;
//     case '/':
//       compute = prev / curr
//   }
//   return compute.toString()
// }





export default function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(reducer, { currentOperand: '', previousOperand: '', operation: '' })
  return (
    <div>
      <div className="calculator">
        <div className="top">
          <div className="prev">{previousOperand}{operation}</div>
          <div className="curr">{currentOperand}</div>
        </div>
        <button className='btn' onClick={() => dispatch({ type: ACTION.CLEAR })}>Ac</button>
        <button onClick={() => dispatch({ type: ACTION.DELETE_DIGIT })}>Del</button>
        <OperationButton dispatch={dispatch} operation='/' />

        <Digitbutton digit='7' dispatch={dispatch} />
        <Digitbutton digit='8' dispatch={dispatch} />
        <Digitbutton digit='9' dispatch={dispatch} />
        <OperationButton dispatch={dispatch} operation='-' />
        <Digitbutton digit='4' dispatch={dispatch} />
        <Digitbutton digit='5' dispatch={dispatch} />
        <Digitbutton digit='6' dispatch={dispatch} />
        <OperationButton dispatch={dispatch} operation='*' />

        <Digitbutton digit='1' dispatch={dispatch} />
        <Digitbutton digit='2' dispatch={dispatch} />
        <Digitbutton digit='3' dispatch={dispatch} />
        <OperationButton dispatch={dispatch} operation='+' />

        <Digitbutton digit='0' dispatch={dispatch} />
        <Digitbutton digit='.' dispatch={dispatch} />
      <button className='btn' onClick={() => dispatch({type:ACTION.EVALUATE})}>=</button>
      </div>
    </div>
  )
}

