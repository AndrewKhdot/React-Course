import React, { useEffect, useState } from 'react';
import Text from './Text';
import TextArea from './TextArea';
import Date from './Date';
import Button from './Button';

const Form = (props) => {
  let [state, setStates] = useState(
    {
      user : { name : '',
        surname : '',
        dateBirth : '',
        phone : '',
        site : '',
        about : '',
        steck : '',
        lastProject : ''},
        formElements : [
          {
            id: 1,
            type: 'input',
            name: 'name',
            description: 'Имя',
            isValid: 'valid',
            message: ''
          },
          {
            id: 2,
            type: 'input',
            name: 'surname',
            description: 'Фамилия',
            isValid: 'valid',
            message: ''
          },
          {
            id: 3,
            type: 'date',
            name: 'dateBirth',
            isValid: 'valid',
            message: ''
          },
          {
            id: 4,
            type: 'input',
            name: 'phone',
            description: 'Телефон',
            isValid: 'valid',
            message: ''
          },
          {
            id: 5,
            type: 'input',
            name: 'site',
            description: 'Сайт',
            isValid: 'valid',
            message: ''
          },
          {
            id: 6,
            type: 'textArea',
            name: 'about',
            description: 'О себе',
            isValid: 'valid',
            message: ''
          },
          {
            id: 7,
            type: 'textArea',
            name: 'steck',
            description: 'Стек технологий',
            isValid: 'valid',
            message: ''
          },
          {
            id: 8,
            type: 'textArea',
            name: 'lastProject',
            description: 'Описание последнего проекта',
            isValid: 'valid',
            message: ''
          },
          {
            id: 9,
            type: 'button',
            name: 'cancel',
            description: 'Отмена',
            action: props.cancel,
            isValid: 'valid'
          },
          {
            id: 10,
            type: 'button',
            name: 'save',
            description: 'Сохранить',
            action: props.submit,
            isValid: 'valid'
          }
        ],
      userActions : {
      }
    }
  )
  let [validForm, setValid] = useState()
  useEffect(() => changeStatus, [validForm])

      return(
        <form id='myForm'>
          <h2>Создание анкеты</h2>
          {state.formElements.filter(item => item.type !== 'button').map(creatingElement)}
          <div className='buttons'>{state.formElements.filter(item => item.type === 'button').map(creatingElement)}</div>
        </form>
      )
  
  function changeStatus(val) {
    if(val === undefined) {
          for (const key in state.userActions) {
            if (Object.hasOwnProperty.call(state.userActions, key)) {
              let elem = state.formElements.find(item => item.name === key)
              state.userActions[key](elem.isValid)
            }
          }  
    }  
    else {
      console.log(val)
      for (const key in state.userActions) {
        if (Object.hasOwnProperty.call(state.userActions, key)) {
          state.userActions[key]('reet')
        }
      }
    }

  }    
  function  creatingElement(element) {
        switch (element.type) {
          case 'input':
            return <Text key = {element.id} name = {element.name} description = {element.description} resFunc = {resetFunctions} isValid = {element.isValid} changeState = {changeUser} message = {element.message}/>
          case 'textArea':
            return <TextArea key = {element.id}  name = {element.name} description = {element.description} changeState = {changeUser} resFunc = {resetFunctions} isValid = {element.isValid} message = {element.message}/>
          case 'button':
            return <Button key = {element.id}  name = {element.name} description = {element.description} fAction = {secondValidation}  data = {state.user}/>
          case 'date':
            return <Date key = {element.id}  changeState = {changeUser} isValid = {element.isValid} message = {element.message}/>
            default:
              return <div></div>
        }
        function  secondValidation(user, name) {
          const defaultForm = [
            {
              id: 1,
              type: 'input',
              name: 'name',
              description: 'Имя',
              isValid: 'valid',
              message: ''
            },
            {
              id: 2,
              type: 'input',
              name: 'surname',
              description: 'Фамилия',
              isValid: 'valid',
              message: ''
            },
            {
              id: 3,
              type: 'date',
              name: 'dateBirth',
              isValid: 'valid',
              message: ''
            },
            {
              id: 4,
              type: 'input',
              name: 'phone',
              description: 'Телефон',
              isValid: 'valid',
              message: ''
            },
            {
              id: 5,
              type: 'input',
              name: 'site',
              description: 'Сайт',
              isValid: 'valid',
              message: ''
            },
            {
              id: 6,
              type: 'textArea',
              name: 'about',
              description: 'О себе',
              isValid: 'valid',
              message: ''
            },
            {
              id: 7,
              type: 'textArea',
              name: 'steck',
              description: 'Стек технологий',
              isValid: 'valid',
              message: ''
            },
            {
              id: 8,
              type: 'textArea',
              name: 'lastProject',
              description: 'Описание последнего проекта',
              isValid: 'valid',
              message: ''
            },
            {
              id: 9,
              type: 'button',
              name: 'cancel',
              description: 'Отмена',
              action: props.cancel,
              isValid: 'valid'
            },
            {
              id: 10,
              type: 'button',
              name: 'save',
              description: 'Сохранить',
              action: props.submit,
              isValid: 'valid'
            }
          ]
          const defaultUser = { name : '',
          surname : '',
          dateBirth : '',
          phone : '',
          site : '',
          about : '',
          steck : '',
          lastProject : ''}
          let startState = state;
          if(name === 'save'){
            for (const key in state.user) {
              if (Object.hasOwnProperty.call(user, key)) {
                if(user[key] === '') {
                  let index = startState.formElements.indexOf(startState.formElements.find(item => item.name === key))
                  startState.formElements[index].isValid = 'notValid';
                  startState.formElements[index].message = 'Поле должно быть заполнено';
                  setStates(startState)
                }
                else {
                  switch (key) {
                    case 'phone':
                      if(user[key].length < 14) {
                        let index = startState.formElements.indexOf(startState.formElements.find(item => item.name === key))
                        startState.formElements[index].isValid = 'notValid';
                        startState.formElements[index].message = 'Номер телефона должен составлять 9 цифр';
                        setStates(startState)
                      }
                      else {
                        let index = startState.formElements.indexOf(startState.formElements.find(item => item.name === key))
                        startState.formElements[index].isValid = 'valid';
                        startState.formElements[index].message = '';
                        setStates(startState)
                      }
                      break;
                  
                    default:
                      let index = startState.formElements.indexOf(startState.formElements.find(item => item.name === key))
                      startState.formElements[index].isValid = 'valid';
                      startState.formElements[index].message = '';
                      setStates(startState)
                      break;
                  }
                }
              }
            }
            if(state.formElements.find(item => item.isValid === 'notValid') === undefined) {
                setValid(true)
                props.submit(state.user)
                setValid(validForm + 1)
            }
            else {
              setValid(validForm + 1)
            }
          }
          else {
            startState.formElements = defaultForm
            startState.user = defaultUser
            setStates(startState)
            changeStatus('reset')
            setValid(validForm + 1)
          }
        }
    }
  function  changeUser (field, value, action) {
      let lastState = state;
      lastState.userActions[field] = action;
      lastState.user[field] = value;
      setStates(lastState) 
    }


  function  resetFunctions(func) {
/*       if(typeof func === 'undefined') {
        this.state.resFuncs.forEach(func => func())
      }
      else{
        let f = this.state.resFuncs
        f.push(func)
        this.setState(
          {
            resFuncs : f
          }
        )
      } */
    }
   
  }

  export default Form
