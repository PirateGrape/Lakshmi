import React, { Component } from 'react';
import SchedUnit from '../sched-unit';

import '../../../../styles/sched-day.css'

export default class SchedDay extends Component {

    render() {
        const  {dynSched}  = this.props; //Вытащил расписание из пропсов, заложенных выше

        const elems = dynSched.map(unit => {//Перебрал весь массив объектов расписания, сделав массив юнитов
            const dynSched = [unit]
            return (
                <SchedUnit
                    className='sched-unit'
                    dynSched={dynSched}
                     />//Закладываю все из расписания в пропсы юнита
            )
        })

        return (
            <div className='day'>
                {elems}
            </div>
        )
    }
}
