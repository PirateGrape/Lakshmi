import React, { Component } from 'react';
import SchedRow from '../sched-row';
import FilterSched from '../filter-sched'

import '../../styles/App.css'

let filterPrac = 'Все', filterMas = 'Все';//Фильтры для расписания

export default class App extends Component {

  constructor(props) {

    super(props);
    this.state = {//Динамическое расписание в стейте, потому что оно меняется
      dynSched: [
        { day: 'ПН', pracName: 'Будха', pic: '../../img/draft_pic.jpg', mName: 'Слава Овсянников', date: '01.05.2021', time: '00:00', place: 'Малый зал', key: 1 },
        { day: 'СР', pracName: 'Цикл воина', pic: 'img/draft_pic.jpg', mName: 'Олеся', date: '03.05.2021', time: '00:00', place: 'Малый зал', key: 2 },
        { day: 'ПТ', pracName: 'Ханумана', pic: './img/draft_pic.jpg', mName: 'Слава Хиль', date: '05.05.2021', time: '00:00', place: 'Малый зал', key: 3 },
        { day: 'ВТ', pracName: 'Армус', pic: './img/draft_pic.jpg', mName: 'Слава Хиль', date: '05.05.2021', time: '00:00', place: 'Малый зал', key: 4 },
        { day: 'ЧТ', pracName: 'Самакона', pic: './img/draft_pic.jpg', mName: 'Марина Овсянникова', date: '05.05.2021', time: '00:00', place: 'Малый зал', key: 5 },
        { day: 'СБ', pracName: 'Ханумана', pic: './img/draft_pic.jpg', mName: 'Вера', date: '05.05.2021', time: '00:00', place: 'Малый зал', key: 6 },

      ]
    };
    this._statSched = this.state.dynSched//Статическое расписание вне стейта, потому что оно не должно меняться
  }

  //Функция-фильтр для расписания. При помощи селектов над расписанием пользователь сможет получать расписание только с определенным местером или по определенной практике

  onReset = () => {//Функция для обнуления расписания
    this.setState(() => {
      return { dynSched: this._statSched }
    })

    const selectFilter = document.querySelectorAll('#filter');//Обнуление велью фильтров в интерфейсе
    selectFilter.forEach(select => { select.value = 'Все' })
  }

  onFilterSched = (e) => {//Сама функция-фильтр для расписания

    let target = e.target,//Для упрощенной записи в будущем
      filterClass = target.className,//Для упрощенной записи в будущем
      filterValue = target.value;//Для упрощенной записи в будущем

    switch (filterClass) {//Определение того, по чему фильтровать
      case 'mas':
        filterMas = filterValue;
        break
      case 'prac':
        filterPrac = filterValue;
        break
      default:
    }

    if (filterMas !== 'Все' && filterPrac === 'Все') {//Фильтрация только по мастеру
      const newSched = this._statSched.filter(item => {
        return item.mName === filterMas;
      })
      this.setState(() => { return { dynSched: newSched } })
      return
    }

    if (filterPrac !== 'Все' && filterMas === 'Все') {//Фильтрация только по практикам
      const newSched = this._statSched.filter(item => {
        return item.pracName === filterPrac;
      })
      this.setState(() => { return { dynSched: newSched } })
      return
    }

    if ((filterMas !== 'Все') && (filterPrac !== 'Все')) {//Двойная фильтрация, то есть по определенным практикам определенного мастера
      const newSched = (this._statSched.filter(item => {
        return item.mName === filterMas;
      })).filter(item => {
        return item.pracName === filterPrac
      })
      this.setState(() => { return { dynSched: newSched } })
      return
    }

    if (filterMas === 'Все' && filterPrac === 'Все') {//Сброс фильтра вручную
      this.onReset()
    }
  }

  //

  render() {

    const { dynSched } = this.state;//Достаю расписание из стейта, чтобы заложить его в ряды
    return (
      <>
        <FilterSched
          onFilterSched={this.onFilterSched}
          onReset={this.onReset}
        />
        <SchedRow
          dynSched={dynSched} />
      </>
    );
  }

}



