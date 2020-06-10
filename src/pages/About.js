import React from 'react'
import './About.css'

const About = props => {
  return (
    <div className={'About'}>
      <h2>О продукте</h2>
      <h3>Практика. Создание компонента универсальной таблицы на React JS</h3>
      <p>Цель: библиотека компонента отображающая таблицу</p>

      <p>Программный интерфейс (API) работы с таблицей происходит через класс
        Table</p>

      <p>Начальные данные:
        * приложение - create-react-app
        * стили - css</p>
    </div>
  )
}

export default About
