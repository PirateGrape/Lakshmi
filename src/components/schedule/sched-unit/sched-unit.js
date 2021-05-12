import React, { Component } from 'react';
import switchText from '../../info/prac-descr'

import '../../../styles/sched-unit.css'


export default class SchedUnit extends Component {


  render() {
    const { dynSched } = this.props;//Достал текст из пропсов, заложенных выше

    const elems = dynSched.map(unit => {
      const { day, pracName, pic, mName, date, time, place, key } = unit;
      const text = switchText(pracName);
      return (
        <div className='sched-unit'
          key={key}>
          <p className='day'>{day}</p>
          <p className='pracName'>{pracName}</p>
          <img src={pic} alt='A yogi practicing'></img>
          <div className="text">{text}</div>
          <p className="master">{mName}</p>
          <p className="date">{date} {time}</p>
          <p className='place'>{place}</p>
        </div>
      )
    })

    return (
      <>
        {elems}
      </>
    )
  }

}

