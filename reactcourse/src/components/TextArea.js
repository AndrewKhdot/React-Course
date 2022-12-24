import React, { useEffect, useState } from 'react';

const TextArea = (props) => {
  let [state, setStates] = useState(['',''])
  let [status, setStatus] = useState(['valid',''])
  let statusAction = function componentActions(status) {
    if(status === 'valid') {
      setStatus(['valid', ''])
    }
    else if (status === 'notValid'){
      setStatus(['notValid', 'Поле должно быть заполнено'])
    }
    else {
      setStatus(['valid', ''])
      setStates(['', ''])
    }
  }
  useEffect(() => {props.changeState(props.name, state[0], statusAction)}, [state])
      return(
        <>
            <label htmlFor={'input' + props.name}>{props.description + ':'}</label>
            <textarea className={status[0]} placeholder={props.description} id={'input' + props.name} onBlur = {() => setStates([state[0], ''])} value = {state[0]}  onChange = {(e) => lengthCalc(e.target.value, setStates)}></textarea>
            <div>{state[1]}</div>
            <div>{status[1]}</div>
        </>
      )
}

 function lengthCalc(val, func) {
    let value = ''
      if (val.length === 0) {
        value = val;
        func([value, '']);
      }
      else if(val.length === 600) {
        value = val.slice(0, 599)
        func([value, 'Длинна должна быть не больше 600 символов']);
      }
      else {
        value = val
        func([value, `Символовл ${val.length} из 600`])
      }
}
 
  export default TextArea
