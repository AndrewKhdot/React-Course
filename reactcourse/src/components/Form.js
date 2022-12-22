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
            descprition: 'Имя',
            isValid: 'valid',
            message: ''
          },
          {
            id: 2,
            type: 'input',
            name: 'surname',
            descprition: 'Фамилия',
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
            descprition: 'Телефон',
            isValid: 'valid',
            message: ''
          },
          {
            id: 5,
            type: 'input',
            name: 'site',
            descprition: 'Сайт',
            isValid: 'valid',
            message: ''
          },
          {
            id: 6,
            type: 'textArea',
            name: 'about',
            descprition: 'О себе',
            isValid: 'valid',
            message: ''
          },
          {
            id: 7,
            type: 'textArea',
            name: 'steck',
            descprition: 'Стек технологий',
            isValid: 'valid',
            message: ''
          },
          {
            id: 8,
            type: 'textArea',
            name: 'lastProject',
            descprition: 'Описание последнего проекта',
            isValid: 'valid',
            message: ''
          },
          {
            id: 9,
            type: 'button',
            name: 'cancel',
            descprition: 'Отмена',
            action: props.cancel,
            isValid: 'valid'
          },
          {
            id: 10,
            type: 'button',
            name: 'save',
            descprition: 'Сохранить',
            action: props.submit,
            isValid: 'valid'
          }
        ],
      
      userActions : {
        
      }
    }
  )
    
 /*    this.creatingElement = this.creatingElement.bind(this)
    this.changeUser = this.changeUser.bind(this)
    this.secondValidation = this.secondValidation.bind(this)
    this.resetFunctions = this.resetFunctions.bind(this) */

      return(
        <form >
          <h2>Создание анкеты</h2>
          {state.formElements.filter(item => item.type !== 'button').map(creatingElement)}
          <div className='buttons'>{state.formElements.filter(item => item.type === 'button').map(creatingElement)}</div>
        </form>
      )
  function  creatingElement(element) {
        switch (element.type) {
          case 'input':
            return <Text key = {element.id} name = {element.name} descprition = {element.descprition} resFunc = {resetFunctions} isValid = {element.isValid} changeState = {changeUser} message = {element.message}/>
          case 'textArea':
            return <TextArea key = {element.id}  name = {element.name} descprition = {element.descprition} changeState = {changeUser} resFunc = {resetFunctions} isValid = {element.isValid} message = {element.message}/>
          case 'button':
            return <Button key = {element.id}  name = {element.name} descprition = {element.descprition} fAction = {secondValidation} action = {element.action}  data = {state.user}/>
          case 'date':
            return <Date key = {element.id}  changeState = {changeUser} isValid = {element.isValid} message = {element.message}/>
            default:
              return <div></div>
        }
        function  secondValidation(user, func, name) {
          const defaultForm = [
            {
              id: 1,
              type: 'input',
              name: 'name',
              descprition: 'Имя',
              isValid: 'valid',
              message: ''
            },
            {
              id: 2,
              type: 'input',
              name: 'surname',
              descprition: 'Фамилия',
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
              descprition: 'Телефон',
              isValid: 'valid',
              message: ''
            },
            {
              id: 5,
              type: 'input',
              name: 'site',
              descprition: 'Сайт',
              isValid: 'valid',
              message: ''
            },
            {
              id: 6,
              type: 'textArea',
              name: 'about',
              descprition: 'О себе',
              isValid: 'valid',
              message: ''
            },
            {
              id: 7,
              type: 'textArea',
              name: 'steck',
              descprition: 'Стек технологий',
              isValid: 'valid',
              message: ''
            },
            {
              id: 8,
              type: 'textArea',
              name: 'lastProject',
              descprition: 'Описание последнего проекта',
              isValid: 'valid',
              message: ''
            },
            {
              id: 9,
              type: 'button',
              name: 'cancel',
              descprition: 'Отмена',
              action: props.cancel,
              isValid: 'valid'
            },
            {
              id: 10,
              type: 'button',
              name: 'save',
              descprition: 'Сохранить',
              action: props.submit,
              isValid: 'valid'
            }
          ]
          if(name === 'save'){
            console.log(state)
            state.formElements[0].isValid = 'notValid'
            console.log(state.formElements[0])
            state.formElements[0].message = 'hi'
            /* let startForm = formElements;
            for (const key in user) {
              if (Object.hasOwnProperty.call(user, key)) {
                if(user[key] === '') {
                  let index = startForm.indexOf(startForm.find(item => item.name === key))
                  startForm[index].isValid = 'notValid';
                  startForm[index].message = 'Поле должно быть заполнено';
                  formElements = startForm
                }
                else {
                  switch (key) {
                    case 'phone':
                      if(user[key].length < 14) {
                        let index = startForm.indexOf(startForm.find(item => item.name === key))
                        startForm[index].isValid = 'notValid';
                        startForm[index].message = 'Номер телефона должен составлять 9 цифр'
                        formElements = startForm
                      }
                      else {
                        let index = startForm.indexOf(startForm.find(item => item.name === key))
                        startForm[index].isValid = 'valid';
                        startForm[index].message = ''
                        formElements = startForm
                      }
                      break;
                  
                    default:
                      let index = startForm.indexOf(startForm.find(item => item.name === key))
                      startForm[index].isValid = 'valid';
                      startForm[index].message = ''
                      formElements = startForm
                      break;
                  }
                }
              }
            }
            if(formElements.find(item => item.isValid === 'notValid') === undefined) {
                func(user)
            } */
          }
          else {
            state.formElements = defaultForm
            this.myForm.reset()
            this.resetFunctions()
          }
        }
    }

  function  changeUser (field, value) {
      let lastState = state;
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
