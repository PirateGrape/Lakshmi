import React, { Component } from 'react';
import SchedUnit from '../sched-unit';

import '../../../../styles/sched-day.css'


export default class SchedDay extends Component {

    render() {
        const { dynSched } = this.props;
        let i = 0; //Индексация
        if (dynSched.length !== 0) {//Условие для фильтра. Если в базе нет дня с нужной тренировкой, то она и не рендерится
            const day = dynSched[0].day,
                date = dynSched[0].date;
            const elems = dynSched.map(unit => {
                i++; //Индексация
                const dynSched = [unit]
                return (
                    <div className='sched-unit'
                    key={i.toString()} //Индексация
                    >
                        <SchedUnit
                            dynSched={dynSched}
                        />
                    </div>
                )
            })

            return (
                <div className='sched-day'
                >
                    <div className='date-stat'>
                        <p>{day}</p>
                        <p>{date}</p>
                    </div>
                    <div className='units'>
                        {elems}
                    </div>

                </div>
            )
        } else {
            return (
                <>
                </>
            )
        }

    }
}
