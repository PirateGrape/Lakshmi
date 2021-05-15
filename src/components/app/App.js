import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import HomePage from '../home'
import Schedule from '../schedule/sched'
import About from '../about'

import '../../styles/App.css'

export default function App() {

  return (
    <div className='main-container'>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Главная</Link>
              </li>
              <li>
                <Link to="/about">О нас</Link>
              </li>
              <li>
                <Link to="/schedule">Расписание</Link>
              </li>
            </ul>
          </nav>

           <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/schedule">
              <Schedule />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )

}
