import React, { Component } from 'react';
import SchedRow from './components/sched-row';
// import ShedUnit from './components/sched-unit'

import '../src/styles/App.css'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {//Закладываю расписание в стейт, потому что потом буду к нему обращаться
      schedule: [
        { text: 'shawasana', key:1 },
        { text: 'inshalasana', key:2 },
        { text: 'budha', key:3 },
        
      ]
    }
  }

  render() {

    const { schedule } = this.state;//Достаю расписание из стейта, чтобы заложить его в ряды
    return (
      <SchedRow
        schedule={schedule} />//Закладываю расписание в пропсы рядов
    );
  }
}



