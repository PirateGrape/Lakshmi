import React, { Component } from 'react';
import SchedRow from './components/sched-row';

import '../src/styles/App.css'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {//Закладываю расписание в стейт, потому что потом буду к нему обращаться и менять при фильтрации
      schedule: [
        { day: 'ПН', pracName: 'shawasana', pic:'../../img/draft_pic.jpg', mName: 'Слава Овсянников', date: '01.05.2021', time: '00:00', place:'Малый зал', key:1 },
        { day: 'СР', pracName: 'inshalasana', pic:'img/draft_pic.jpg', mName: 'Слава Овсянников', date: '01.05.2021', time: '00:00', place:'Малый зал', key:2 },
        { day: 'ПТ', pracName: 'budha', pic:'./img/draft_pic.jpg', mName: 'Слава Овсянников', date: '01.05.2021', time: '00:00', place:'Малый зал', key:3 },
        
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



