import React from 'react';
import Text from './Text';
import TextArea from './TextArea';
import Date from './Date';
import Button from './Button';

class Form extends React.Component {

  formElements = [
    {
      id: 1,
      type: 'input',
      name: 'name',
      descprition: 'Имя'
    },
    {
      id: 2,
      type: 'input',
      name: 'surname',
      descprition: 'Фамилия'
    },
    {
      id: 3,
      type: 'date'
    },
    {
      id: 4,
      type: 'input',
      name: 'phone',
      descprition: 'Телефон'
    },
    {
      id: 5,
      type: 'input',
      name: 'site',
      descprition: 'Сайт'
    },
    {
      id: 6,
      type: 'textArea',
      name: 'about',
      descprition: 'О себе'
    },
    {
      id: 7,
      type: 'textArea',
      name: 'steck',
      descprition: 'Стек технологий'
    },
    {
      id: 8,
      type: 'textArea',
      name: 'lastProject',
      descprition: 'Описание последнего проекта'
    },
    {
      id: 9,
      type: 'button',
      name: 'cancel',
      descprition: 'Отмена',
      action: this.props.cancel
    },
    {
      id: 10,
      type: 'button',
      name: 'save',
      descprition: 'Сохранить',
      action: this.props.submit
    }
  ]

    render() {
      return(
        <form>
          <h2>Создание анкеты</h2>
          {this.formElements.map(this.creatingElement)}
        </form>
      )
    }
    creatingElement(element) {
        switch (element.type) {
          case 'input':
            return <Text key = {element.id} name = {element.name} descprition = {element.descprition} />
          case 'textArea':
            return <TextArea key = {element.id}  name = {element.name} descprition = {element.descprition} />
          case 'button':
            return <Button key = {element.id}  name = {element.name} descprition = {element.descprition} action = {element.action}/>
          case 'date':
            return <Date key = {element.id}  />
            default:
              return <div></div>
        }
    }
  }

  export default Form
