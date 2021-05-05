import React, {Component} from 'react';
import switchText from '../info/prac-descr'

import '../../styles/sched-unit.css'


export default class SchedUnit extends Component {

    
    render() {   
        const {day, pracName, pic, mName, date, time, place} = this.props;//Достал текст из пропсов, заложенных выше
        const text = switchText(pracName);
        return (
          <>
            <div className='menu-card'>
                <p className='day'>{day}</p>
                <p className='pracName'>{pracName}</p>
                <img src={pic} alt='A yogi practicing'></img>
                <div className="text">{text}</div>
                <p className="master">{mName}</p>
                <p className="date">{date} {time}</p>
                <p className='place'>{place}</p>
            </div>
          </>
        )
    }
    
}

