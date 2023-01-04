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
    }

  export default Form
