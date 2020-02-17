import React, {useReducer, useState} from 'react'
import {listReducer, initialState} from '../reducers/Reducer'
import Todo from './Todo'


const Form = () =>{
const [state, dispatch] = useReducer(listReducer, initialState)

const [todo, setTodo]= useState('')

const handleChanges = event =>{
    setTodo(event.target.value)
}//closes handleChanges

const handleSubmit = event=>{
    event.preventDefault()
    dispatch({type:'ADD-TODO', payload: todo})
    
}


const handleClear = event=>{
    event.preventDefault()
    dispatch({type: "REMOVE", payload:todo})
}



return(
    <div className='formdiv'>
        <form className='forms'>
            <label htmlFor='todo'>Add Todo:</label>
            <input
            id='todo'
            name='todo'
            type='text'
            value={todo}
            onChange={handleChanges}
            ></input>
            <button onClick={handleSubmit}>Add Item</button>
            <button onClick={handleClear}>Clear Item</button>
        </form>
        <Todo 
        id={state.id} 
        todo={todo} 
        dispatch={dispatch}
        state={state}
        />



    </div>
)
}

export default Form