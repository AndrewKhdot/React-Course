import React from 'react';
import TextResult from './TextResult';
import TitelResult from './TitelResult';
import LinckResult from './LinckResult';

class CompletedForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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
          descprition: 'Дата рождения',
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
          action: this.props.cancel,
          isValid: 'valid'
        },
        {
          id: 10,
          type: 'button',
          name: 'save',
          descprition: 'Сохранить',
          action: this.props.submit,
          isValid: 'valid'
        }
      ]
    }
  }
    render() {
      return(
          <div className='comletedForm'>
            {this.createResult(this.props.user)}
          </div>
      )
    }
    createResult(user) {
      let result = [];
      result.push(<TitelResult name = {user.name} surname = {user.surname} />)
      for (const key in user) {
        if (Object.hasOwnProperty.call(user, key)) {
          if(key !== 'name' || key !== 'surname') {
            if(key === 'phone' || key === 'site') {
              result.push(<LinckResult type = {key} value = {user[key]} descprition = {this.state.formElements.find(item => item.name === key).descprition} />)
            }
            else {
              result.push(<TextResult value = {user[key]} descprition = {this.state.formElements.find(item => item.name === key).descprition} />);
            }
          }
        }
      }
      return result;
    }
  }

  export default CompletedForm