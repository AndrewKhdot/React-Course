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
          <TextComponent name = 'name' descprition = 'Имя'/>
          <TextComponent name = 'surname' descprition = 'Фамилия'/>
          <DateComponent />
          <TextComponent name = 'phone' descprition = 'Телефон'/>
          <TextComponent name = 'site' descprition = 'Сайт'/>
          <TextAreaComponent name = 'about' descprition = 'О себе' />
          <TextAreaComponent name = 'steck' descprition = 'Стек технологий' />
          <TextAreaComponent name = 'lastProject' descprition = 'Описание последнего проекта' />
          <div className='Buttons'>
            <ButtonComponent name = 'cancel' descprition = 'Отмена' />
            <ButtonComponent name = 'save' descprition = 'Сохранить' />
          </div>
        </form>
      )
    }
  }

  export default Form
