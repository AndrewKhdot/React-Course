import React, { useEffect, useState } from 'react';

const Text = (props) => {
  let [state, setStates] = useState(['',''])
  let validation = inputValidation(props.name)
  useEffect(() => {props.changeState(props.name, state[0])}, [state])
      return(
        <>
            <label htmlFor={'input' + props.name}>{props.descprition + ':'}</label>
            <input className={props.isValid} placeholder={props.descprition} id={'input' + props.name} onBlur = {() => setStates([state[0], ''])} value = {state[0]}  onChange = {(e) =>validation(e.target.value, setStates)}></input>
            <div>{state[1]}</div>
            <div>{props.message}</div>
        </>
      )
    function inputValidation(target) {
    let funcVal;
    switch (target) {
      case 'name':
        funcVal = nameValidation;
        break;
      case 'surname':
        funcVal = nameValidation;
        break;
      case 'phone':
          funcVal = phoneValidation;
          break;
      case 'site':
          funcVal = siteValidation;
          break;
      default:
        break;
    }
   
    return funcVal;
  }
  }

  function  phoneValidation(val, setStates) {
    let value = ''
    const numbers = '0123456789'
    if(numbers.includes(val.slice(-1))) {
      if(val.length === 1) {
        value = '+' + val;
        setStates([value, '']);
      } 
      else if (val.length === 4) {
        value = val.slice(0, 3) + '-' + val.slice(-1);
        setStates([value, '']);
      }
      else if (val.length === 9) {
        value = val.slice(0, 8) + '-' + val.slice(-1);
        setStates([value, '']);
      }
      else if (val.length === 12) {
        value = val.slice(0, 11) + '-' + val.slice(-1);
        setStates([value, '']);
      }
      else if (val.length > 14){
          value = val.slice(0, 14);
          setStates([value, 'Телефон не должен быть длиннее 9 символов']);
      }
      else {
        setStates([val, '']);
      }
    }
    else {
      value = val.slice(0, val.length -1);
      setStates([value, 'Телефон должен состоять из цифр']);

    }


  }
  function nameValidation (val, func) {
    let value = val.trim();
    if(value.length === 1) {
      value = value.toUpperCase()
      func([value, '']);
    } 
    if(value.length < 13) {
      func([value, '']);
    }
    else {
      func([value.slice(0, 12), 'Имя должно быть не длиннее 13 символов']);
    }
  }

  function  siteValidation(val, func) {
    let value = val.trim();
    if(val.length > 8) {
      if(val.slice(0, 8) === 'https://') {
        func([value, '']);
      }
      else {
        func([value, 'Сайт должен начинаться с https://']);
      }
    }
    else {
      func([value, '']);
    }
  }

  

  function blurEvent() {

  }
  function resetValue() {
   
  }

  export default Text
