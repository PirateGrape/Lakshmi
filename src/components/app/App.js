import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
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
              <NavLink to="/"
                exact={true}
                className='nav-item non-active'
                activeClassName='active'>Главная</NavLink>
              <NavLink to="/about"
                className='nav-item non-active'
                activeClassName='active'>О нас</NavLink>
              <NavLink to="/schedule"
                className='nav-item non-active'
                activeClassName='active'>Расписание</NavLink>
              <NavLink to="/about-yoga"
                className='nav-item non-active'
                activeClassName='active'>О йоге</NavLink>
              <NavLink to="/prices"
                className='nav-item non-active'
                activeClassName='active'>Цены</NavLink>
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
