import React from 'react';
import TextResult from './TextResult';
import TitelResult from './TitelResult';
import LinckResult from './LinckResult';

const CompletedForm = (props) => {
 const formElements = [
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
      description: 'Дата рождения',
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
    }
  ]

      return(
          <div className='comletedForm'>
            {createResult(props.user)}
          </div>
      )
  function  createResult(user) {
      let result = [];
      result.push(<TitelResult name = {user.name} surname = {user.surname} />)
      for (const key in user) {
        if (Object.hasOwnProperty.call(user, key)) {
          console.log(key)
          if(key !== 'name' || key !== 'surname') {
            if(key === 'phone' || key === 'site') {
              result.push(<LinckResult type = {key} value = {user[key]} description = {formElements.find(item => item.name === key).description} />)
            }
            else {
              result.push(<TextResult value = {user[key]} description = {formElements.find(item => item.name === key).description} />);
            }
          }
        }
      }
      return result;
    }
  }

  export default CompletedForm