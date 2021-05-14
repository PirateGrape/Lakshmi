import React, { Component } from 'react'
import SchedMonth from '../sched-month'
import FilterSched from '../../filter-sched'

let filterPrac = 'Все', filterMas = 'Все';//Фильтры для расписания
export default class Scheduele extends Component {
    constructor(props) {

        super(props);
        this.state = {//Динамическое расписание в стейте, потому что оно меняется
            dynSched: [//массив-месяц
                [//массив-неделя
                    [//массив-день
                        { day: 'ПН', pracName: 'Париврита', pic: '../../img/draft_pic', mName: 'Слава Овсянников', date: '01.05.2021', time: '00:00', place: 'Малый зал', key: 1 },
                        { day: 'ПН', pracName: 'Цикл воина', pic: 'img/draft_pic.jpg', mName: 'Олеся', date: '03.05.2021', time: '00:00', place: 'Малый зал', key: 2 },
                        { day: 'ПН', pracName: 'Ханумана', pic: './img/draft_pic.jpg', mName: 'Слава Хиль', date: '05.05.2021', time: '00:00', place: 'Малый зал', key: 3 },
                        { day: 'ПН', pracName: 'Армус', pic: './img/draft_pic.jpg', mName: 'Слава Хиль', date: '05.05.2021', time: '00:00', place: 'Малый зал', key: 4 },
                        { day: 'ПН', pracName: 'Самакона', pic: './img/draft_pic.jpg', mName: 'Марина Овсянникова', date: '05.05.2021', time: '00:00', place: 'Малый зал', key: 5 },
                        { day: 'ПН', pracName: 'Ханумана', pic: './img/draft_pic.jpg', mName: 'Вера', date: '05.05.2021', time: '00:00', place: 'Малый зал', key: 6 }
                    ],
                    [//массив-день
                        { day: 'ВТ', pracName: 'Будха', pic: '../../img/draft_pic', mName: 'Слава Овсянников', date: '01.05.2021', time: '00:00', place: 'Малый зал', key: 1 },
                        { day: 'ВТ', pracName: 'Цикл воина', pic: 'img/draft_pic.jpg', mName: 'Олеся', date: '03.05.2021', time: '00:00', place: 'Малый зал', key: 2 },
                        { day: 'ВТ', pracName: 'Ханумана', pic: './img/draft_pic.jpg', mName: 'Слава Хиль', date: '05.05.2021', time: '00:00', place: 'Малый зал', key: 3 },
                        { day: 'ВТ', pracName: 'Армус', pic: './img/draft_pic.jpg', mName: 'Слава Хиль', date: '05.05.2021', time: '00:00', place: 'Малый зал', key: 4 },
                        { day: 'ВТ', pracName: 'Самакона', pic: './img/draft_pic.jpg', mName: 'Марина Овсянникова', date: '05.05.2021', time: '00:00', place: 'Малый зал', key: 5 },
                        { day: 'ВТ', pracName: 'Ханумана', pic: './img/draft_pic.jpg', mName: 'Вера', date: '05.05.2021', time: '00:00', place: 'Малый зал', key: 6 }
                    ],
                ],

                [//массив-неделя
                    [//массив-день
                        { day: 'ПН', pracName: 'Раджака', pic: '../../img/draft_pic', mName: 'Слава Овсянников', date: '01.05.2021', time: '00:00', place: 'Малый зал', key: 7 },
                        { day: 'ПН', pracName: 'Сету Бандха', pic: 'img/draft_pic.jpg', mName: 'Олеся', date: '03.05.2021', time: '00:00', place: 'Малый зал', key: 8 },
                        { day: 'ПН', pracName: 'Париврита', pic: './img/draft_pic.jpg', mName: 'Слава Хиль', date: '05.05.2021', time: '00:00', place: 'Малый зал', key: 9 },
                        { day: 'ПН', pracName: 'Ханумана', pic: './img/draft_pic.jpg', mName: 'Слава Хиль', date: '05.05.2021', time: '00:00', place: 'Малый зал', key: 10 },
                        { day: 'ПН', pracName: 'Самакона', pic: './img/draft_pic.jpg', mName: 'Марина Овсянникова', date: '05.05.2021', time: '00:00', place: 'Малый зал', key: 11 },
                        { day: 'ПН', pracName: 'Ханумана', pic: './img/draft_pic.jpg', mName: 'Вера', date: '05.05.2021', time: '00:00', place: 'Малый зал', key: 12 }
                    ]
                ],
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

    getNewFilter = (e) => {//Функция для определения, что фильтруем
        let target = e.target,//Для упрощенной записи в будущем
            filterClass = target.className,//Для упрощенной записи в будущем
            filterValue = target.value;//Для упрощенной записи в будущем

        switch (filterClass) {
            case 'mas':
                filterMas = filterValue;
                break
            case 'prac':
                filterPrac = filterValue;
                break
            default:
                filterMas = 'Все';
                filterMas = 'Все';
        }
    }

    // getToDay = () => {//Надо придумать, как сократить перебор массива. Пока не получается
    //   const newSched = this._statSched.map(month => {
    //     return month.map(week => {
    //       return week;
    //     })
    //   })
    //   return newSched
    // }

    filterByMas = () => {//Фильтрация только по мастеру 
        const newSched = this._statSched.map(month => {
            return month.map(week => {
                return week.filter(day => {
                    return day.mName === filterMas;
                })
            })
        })

        this.endFilter(newSched)
    }

    filterByPrac = () => {//Фильтрация только по практикам
        const newSched = this._statSched.map(month => {
            return month.map(week => {
                return week.filter(day => {
                    return day.pracName === filterPrac
                })
            })
        })

        this.endFilter(newSched)
    }

    doubleFilter = () => {
        const newSched = (this._statSched.map(month => {
            return month.map(week => {
                return week.filter(day => {
                    return day.mName === filterMas
                })
            })
        })).map(month => {
            return month.map(week => {
                return week.filter(day => {
                    return day.pracName === filterPrac
                })
            })
        })

        this.endFilter(newSched)
    }

    endFilter = (newSched) => {
        this.setState(() => { return { dynSched: newSched } })
    }

    onFilterSched = (e) => {//Сама функция-фильтр для расписания

        this.getNewFilter(e)//Определение того, по чему фильтровать

        if (filterMas !== 'Все' && filterPrac === 'Все') {//Фильтрация только по мастеру
            this.filterByMas()
            return
        }

        if (filterPrac !== 'Все' && filterMas === 'Все') {//Фильтрация только по практике
            this.filterByPrac()
            return
        }

        if ((filterMas !== 'Все') && (filterPrac !== 'Все')) {//Фильтрация и по мастеру, и по практике
            this.doubleFilter()
            return
        }

        if (filterMas === 'Все' && filterPrac === 'Все') {//Сброс фильтра вручную, то есть если пользователь ставит значение 'все' во всех фильтрах. Альтернатива кнопке "Сбросить фильтр"
            this.onReset()
        }
    }

    render() {
        const { dynSched } = this.state;
        return (
            <>
                <FilterSched
                    onFilterSched={this.onFilterSched}
                    onReset={this.onReset}
                />
                <SchedMonth
                    dynSched={dynSched} />
            </>
        );
    }
}