import React, { Component } from 'react';
import SchedRow from '../sched-row';
import FilterPrac from '../filter-sched/filter-prac';
import FilterMas from '../filter-sched/filter-master'


import '../../styles/App.css'



export default class App extends Component {

  constructor(props) {

    super(props);
    this.state = {//Закладываю расписание в стейт, потому что потом буду к нему обращаться и менять при фильтрации
      dynSched: [
        { day: 'ПН', pracName: 'Будха', pic: '../../img/draft_pic.jpg', mName: 'Слава Овсянников', date: '01.05.2021', time: '00:00', place: 'Малый зал', key: 1 },
        { day: 'СР', pracName: 'Цикл воина', pic: 'img/draft_pic.jpg', mName: 'Олеся', date: '03.05.2021', time: '00:00', place: 'Малый зал', key: 2 },
        { day: 'ПТ', pracName: 'Ханумана', pic: './img/draft_pic.jpg', mName: 'Слава Хиль', date: '05.05.2021', time: '00:00', place: 'Малый зал', key: 3 },
        { day: 'ВТ', pracName: 'Армус', pic: './img/draft_pic.jpg', mName: 'Слава Хиль', date: '05.05.2021', time: '00:00', place: 'Малый зал', key: 4 },
        { day: 'ЧТ', pracName: 'Самакона', pic: './img/draft_pic.jpg', mName: 'Марина Овсянникова', date: '05.05.2021', time: '00:00', place: 'Малый зал', key: 5 },
        { day: 'СБ', pracName: 'Ханумана', pic: './img/draft_pic.jpg', mName: 'Вера', date: '05.05.2021', time: '00:00', place: 'Малый зал', key: 6 },

      ],
    };
    this.statSched = this.state.dynSched
  }

  //Функция-фильтр для расписания. При помощи селектов над расписанием пользователь сможет получать расписание только с определенным местером или по определенной практике
  onReset = () => {
    this.setState(() => {
      return { dynSched: this.statSched }
    })
  }

  onFilterSched = (e) => {
    let newFilterValue = e.target.value;
    if (newFilterValue === 'Все') {
      this.onReset();
      return
    }

    if (e.target.className === 'mas') {
      const newSched = this.statSched.filter(item => {
        return item.mName === newFilterValue
      })
      this.setState(() => {
        return { dynSched: newSched }
      })
    }

    if (e.target.className === 'prac') {
      const newSched = this.statSched.filter(item => {
        return item.pracName === newFilterValue
      })
      this.setState(() => {
        return { dynSched: newSched }
      })
    }
  }

  //

  render() {

    const { dynSched } = this.state;//Достаю расписание из стейта, чтобы заложить его в ряды
    return (
      <>
        <FilterMas
          onFilterSched={this.onFilterSched} />
        <FilterPrac
          onFilterSched={this.onFilterSched} />
        <SchedRow
          dynSched={dynSched} />

      </>
    );
  }
}



