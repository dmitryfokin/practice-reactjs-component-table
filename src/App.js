import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Main from './pages/Main'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <h1>
          Практика. Создание компонента универсальной таблицы на React JS
        </h1>
        <hr/>
        <Switch>
          <Route path={'/'} exact>
            <Main/>
          </Route>
          <Route path={'/about'}>
            <About/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
