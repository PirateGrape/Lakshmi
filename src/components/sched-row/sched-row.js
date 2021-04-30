import React, { Component } from 'react';
import SchedUnit from '../sched-unit/';

import '../../styles/sched-row.css'

export default class SchedRow extends Component {

    render() {
        const { schedule } = this.props; //Вытащил расписание из пропсов, заложенных выше
        const elems = schedule.map(unit => {//Перебрал весь массив расписания, сделав массив юнитов
            const { key, text } = unit;

            return (
                <SchedUnit
                    className='unit' 
                    key={key}
                    text={text}/>//Закладываю текст из расписания в пропсы юнита
            )
        })

        return (
            <div className='row'>
                {elems}
            </div>
        )
    }
}
