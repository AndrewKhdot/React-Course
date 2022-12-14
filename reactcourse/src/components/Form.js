import React from 'react';
import TextComponent from './TextComponent';
import TextAreaComponent from './TextAreaComponent';
import DateComponent from './DateComponent';
import ButtonComponent from './ButtonComponent';

class Form extends React.Component {
    
    render() {
      return(
        <form>
          <h2>Создание анкеты</h2>
          <TextComponent name = 'Name' descprition = 'Имя'/>
          <TextComponent name = 'Surname' descprition = 'Фамилия'/>
          <DateComponent />
          <TextComponent name = 'Phone' descprition = 'Телефон'/>
          <TextComponent name = 'Site' descprition = 'Сайт'/>
          <TextAreaComponent name = 'About' descprition = 'О себе' />
          <TextAreaComponent name = 'Steck' descprition = 'Стек технологий' />
          <TextAreaComponent name = 'LastProject' descprition = 'Описание последнего проекта' />
          <div className='Buttons'>
            <ButtonComponent name = 'Cancel' descprition = 'Отмена' />
            <ButtonComponent name = 'Save' descprition = 'Сохранить' />
          </div>
        </form>
      )
    }
  }

  export default Form