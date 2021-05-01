import React, { Component } from 'react';
import SchedUnit from '../sched-unit/';

import '../../styles/sched-row.css'

export default class SchedRow extends Component {

    render() {
        const { schedule } = this.props; //Вытащил расписание из пропсов, заложенных выше
        const elems = schedule.map(unit => {//Перебрал весь массив объектов расписания, сделав массив юнитов
            const { key, day, pracName, pic, mName, date, time, place } = unit;
            

            return (
                <SchedUnit
                    className='unit' 
                    schedule={unit}
                    key={key}
                    day={day}
                    pracName={pracName}
                    pic={pic}
                    mName={mName}
                    date={date}
                    time={time}
                    place={place}/>//Закладываю все из расписания в пропсы юнита
            )
        })

        return (
            <div className='row'>
                {elems}
            </div>
        )
    }
}
