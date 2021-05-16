import React, { Component } from 'react';
import switchText from '../../../info/prac-descr'

import '../../../../styles/sched-unit.css'

export default class SchedUnit extends Component {


  render() {
    const { dynSched } = this.props;//Достал текст из пропсов, заложенных выше
    const elems = dynSched.map(unit => {
      const { pracName, pic, mName, time, key } = unit;
      const text = switchText(pracName);
      return (
        <div className='sched-unit'
          key={key}>
          <div className='stat-info'>
            <p className='pracName'>{pracName}</p>
            <p className="master">{mName}</p>
            <p className="time">{time}</p>
          </div>
          <div className='pop-up'>
            <img src={pic} alt='A yogi practicing'></img>
            <div className="text">{text}</div>
          </div>
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

