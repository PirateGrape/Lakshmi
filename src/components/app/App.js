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
import '../../styles/nav-bar.css'

export default function App() {

  return (
    <div className='main-container'>
      <Router>
        <div>
          <nav>
            <ul className='nav-bar'>
              <li className='nav-item'
              >
                <Link to="/">Главная</Link>
              </li>
              <li className='nav-item'
              >
                <Link to="/about">О нас</Link>
              </li>
              <li className='nav-item'
              >
                <Link to="/schedule">Расписание</Link>
              </li>
              <li className='nav-item'
              >
                <Link to="/about-yoga">О йоге</Link>
              </li>
              <li className='nav-item'
              >
                <Link to="/prices">Цены</Link>
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
            <Route path="/about-yoga">
              <p>Йога это клева</p>
            </Route>
            <Route path="/prices">
              <p>Терпимо</p>
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
