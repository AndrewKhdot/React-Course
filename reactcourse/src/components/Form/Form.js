import React from 'react';
import { useState } from 'react';

const Form = (props) => {
    let [state, setState] = useState('')

      return(
           <form >
                <input type= 'text' value = {state} onChange = {(e) => setState(e.target.value)} ></input>
                <input type="button" onClick={() => {props.action(state); setState('')}} value="Сохранить" />
           </form>
      )
    

  /*     return(
        <form onSubmit={handleSubmit}>
             <input type= 'text' ></input>
             <button type='submit'>Сохранить</button>
        </form>
      ) 
      function handleSubmit(event) {
        event.preventDefault();
        props.action(event.target.value)
      } */
    }

  export default Form