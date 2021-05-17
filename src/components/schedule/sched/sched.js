import React, { Component } from 'react'
import SchedMonth from '../sched-components/sched-month'
import FilterSched from '../../filter-sched'

import '../../../styles/sched.css'

let filterPrac = 'Все', filterMas = 'Все', filterTime = 'Все';//Фильтры для расписания
export default class Scheduele extends Component {
    constructor(props) {

        super(props);
        this.state = {//Динамическое расписание в стейте, потому что оно меняется
            dynSched: [//массив-месяц
                [//массив-неделя
                    [//массив-день
                        { day: 'ПН', pracName: 'Париврита', pic: '../../img/draft_pic', mName: 'Слава Овсянников', date: '01.05.2021', time: '6:30', place: 'Малый зал', key: 1 },
                        { day: 'ПН', pracName: 'Супта', pic: 'img/draft_pic.jpg', mName: 'Олеся', date: '03.05.2021', time: '8:00', place: 'Малый зал', key: 2 },
                        { day: 'ПН', pracName: 'Ханумана', pic: './img/draft_pic.jpg', mName: 'Слава Хиль', date: '05.05.2021', time: '9:45', place: 'Малый зал', key: 3 },
                        { day: 'ПН', pracName: 'Армус', pic: './img/draft_pic.jpg', mName: 'Слава Хиль', date: '05.05.2021', time: '11:30', place: 'Малый зал', key: 4 },
                        { day: 'ПН', pracName: 'Самакона', pic: './img/draft_pic.jpg', mName: 'Марина Овсянникова', date: '05.05.2021', time: '16:00', place: 'Малый зал', key: 5 },
                        { day: 'ПН', pracName: 'Ханумана', pic: './img/draft_pic.jpg', mName: 'Вера', date: '05.05.2021', time: '20:30', place: 'Малый зал', key: 6 }
                    ],
                    [//массив-день
                        { day: 'ВТ', pracName: 'Раджака', pic: '../../img/draft_pic', mName: 'Слава Овсянников', date: '01.05.2021', time: '11:30', place: 'Малый зал', key: 7 },
                        { day: 'ВТ', pracName: 'Сету Бандха', pic: 'img/draft_pic.jpg', mName: 'Олеся', date: '03.05.2021', time: '12:00', place: 'Малый зал', key: 8 },
                        { day: 'ВТ', pracName: 'Падма', pic: './img/draft_pic.jpg', mName: 'Слава Хиль', date: '05.05.2021', time: '18:30', place: 'Малый зал', key: 9 },

                        { day: 'ВТ', pracName: 'Самакона', pic: './img/draft_pic.jpg', mName: 'Вера', date: '05.05.2021', time: '9:45', place: 'Малый зал', key: 11 },
                        { day: 'ВТ', pracName: 'Супта', pic: './img/draft_pic.jpg', mName: 'Марина Овсянникова', date: '05.05.2021', time: '10:00', place: 'Малый зал', key: 12 }
                    ], [//массив-день
                        { day: 'ПН', pracName: 'Париврита', pic: '../../img/draft_pic', mName: 'Слава Овсянников', date: '01.05.2021', time: '6:30', place: 'Малый зал', key: 1 },
                        { day: 'ПН', pracName: 'Цикл воина', pic: 'img/draft_pic.jpg', mName: 'Олеся', date: '03.05.2021', time: '8:00', place: 'Малый зал', key: 2 },
                        { day: 'ПН', pracName: 'НС', pic: './img/draft_pic.jpg', mName: 'Слава Хиль', date: '05.05.2021', time: '10:00', place: 'Малый зал', key: 3 },
                        { day: 'ПН', pracName: 'Армус', pic: './img/draft_pic.jpg', mName: 'Слава Хиль', date: '05.05.2021', time: '16:00', place: 'Малый зал', key: 4 },
                        { day: 'ПН', pracName: 'Самакона', pic: './img/draft_pic.jpg', mName: 'Марина Овсянникова', date: '05.05.2021', time: '20:30', place: 'Малый зал', key: 5 },
                        { day: 'ПН', pracName: 'Ханумана', pic: './img/draft_pic.jpg', mName: 'Вера', date: '05.05.2021', time: '20:30', place: 'Малый зал', key: 6 }
                    ],
                    [//массив-день
                        { day: 'ВТ', pracName: 'Раджака', pic: '../../img/draft_pic', mName: 'Слава Овсянников', date: '01.05.2021', time: '6:30', place: 'Малый зал', key: 7 },
                        { day: 'ВТ', pracName: 'НС', pic: 'img/draft_pic.jpg', mName: 'Олеся', date: '03.05.2021', time: '8:00', place: 'Малый зал', key: 8 },
                        { day: 'ВТ', pracName: 'Париврита', pic: './img/draft_pic.jpg', mName: 'Слава Хиль', date: '05.05.2021', time: '12:00', place: 'Малый зал', key: 9 },
                        { day: 'ВТ', pracName: 'Самакона', pic: './img/draft_pic.jpg', mName: 'Вера', date: '05.05.2021', time: '16:00', place: 'Малый зал', key: 11 },
                        { day: 'ВТ', pracName: 'Сету Бандха', pic: './img/draft_pic.jpg', mName: 'Марина Овсянникова', date: '05.05.2021', time: '20:30', place: 'Малый зал', key: 12 }
                    ], [//массив-день
                        { day: 'ПН', pracName: 'Париврита', pic: '../../img/draft_pic', mName: 'Слава Овсянников', date: '01.05.2021', time: '8:00', place: 'Малый зал', key: 1 },
                        { day: 'ПН', pracName: 'Цикл воина', pic: 'img/draft_pic.jpg', mName: 'Олеся', date: '03.05.2021', time: '12:00', place: 'Малый зал', key: 2 },
                        { day: 'ПН', pracName: 'Ханумана', pic: './img/draft_pic.jpg', mName: 'Слава Хиль', date: '05.05.2021', time: '16:00', place: 'Малый зал', key: 3 },
                        { day: 'ПН', pracName: 'Армус', pic: './img/draft_pic.jpg', mName: 'Слава Хиль', date: '05.05.2021', time: '20:30', place: 'Малый зал', key: 4 },
                        { day: 'ПН', pracName: 'Самакона', pic: './img/draft_pic.jpg', mName: 'Марина Овсянникова', date: '05.05.2021', time: '20:30', place: 'Малый зал', key: 5 },
                        { day: 'ПН', pracName: 'Ханумана', pic: './img/draft_pic.jpg', mName: 'Вера', date: '05.05.2021', time: '20:30', place: 'Малый зал', key: 6 }
                    ],
                    [//массив-день
                        { day: 'ВТ', pracName: 'Падма', pic: '../../img/draft_pic', mName: 'Слава Овсянников', date: '01.05.2021', time: '6:30', place: 'Малый зал', key: 7 },
                        { day: 'ВТ', pracName: 'Сету Бандха', pic: 'img/draft_pic.jpg', mName: 'Олеся', date: '03.05.2021', time: '8:00', place: 'Малый зал', key: 8 },
                        { day: 'ВТ', pracName: 'Париврита', pic: './img/draft_pic.jpg', mName: 'Слава Хиль', date: '05.05.2021', time: '12:00', place: 'Малый зал', key: 9 },
                        { day: 'ВТ', pracName: 'Самакона', pic: './img/draft_pic.jpg', mName: 'Вера', date: '05.05.2021', time: '16:00', place: 'Малый зал', key: 11 },
                        { day: 'ВТ', pracName: 'Сету Бандха', pic: './img/draft_pic.jpg', mName: 'Марина Овсянникова', date: '05.05.2021', time: '18:30', place: 'Малый зал', key: 12 }
                    ],
                ],

                [//массив-неделя
                    [//массив-день
                        { day: 'СР', pracName: 'Раджака', pic: '../../img/draft_pic', mName: 'Слава Овсянников', date: '01.05.2021', time: '6:30', place: 'Малый зал', key: 7 },
                        { day: 'СР', pracName: 'Сету Бандха', pic: 'img/draft_pic.jpg', mName: 'Олеся', date: '03.05.2021', time: '10:00', place: 'Малый зал', key: 8 },
                        { day: 'СР', pracName: 'Баланс', pic: './img/draft_pic.jpg', mName: 'Слава Хиль', date: '03.05.2021', time: '11:30', place: 'Малый зал', key: 9 },
                        { day: 'СР', pracName: 'Ханумана', pic: './img/draft_pic.jpg', mName: 'Слава Хиль', date: '03.05.2021', time: '12:00', place: 'Малый зал', key: 10 },
                        { day: 'СР', pracName: 'Самакона', pic: './img/draft_pic.jpg', mName: 'Марина Овсянникова', date: '03.05.2021', time: '16:00', place: 'Малый зал', key: 11 },
                        { day: 'СР', pracName: 'Ханумана', pic: './img/draft_pic.jpg', mName: 'Вера', date: '03.05.2021', time: '20:30', place: 'Малый зал', key: 12 }
                    ]
                ],
                [//массив-неделя
                    [//массив-день
                        { day: 'ЧТ', pracName: 'Раджака', pic: '../../img/draft_pic', mName: 'Слава Овсянников', date: '05.05.2021', time: '9:45', place: 'Малый зал', key: 7 },
                        { day: 'ЧТ', pracName: 'Сету Бандха', pic: 'img/draft_pic.jpg', mName: 'Олеся', date: '05.05.2021', time: '11:30', place: 'Малый зал', key: 8 },
                        { day: 'ЧТ', pracName: 'Париврита', pic: './img/draft_pic.jpg', mName: 'Слава Хиль', date: '05.05.2021', time: '16:00', place: 'Малый зал', key: 9 },
                        { day: 'ЧТ', pracName: 'Ханумана', pic: './img/draft_pic.jpg', mName: 'Слава Овсянников', date: '05.05.2021', time: '18:30', place: 'Малый зал', key: 10 },
                        { day: 'ЧТ', pracName: 'Самакона', pic: './img/draft_pic.jpg', mName: 'Вера', date: '05.05.2021', time: '18:30', place: 'Малый зал', key: 11 },
                        { day: 'ЧТ', pracName: 'Сету Бандха', pic: './img/draft_pic.jpg', mName: 'Марина Овсянникова', date: '05.05.2021', time: '20:30', place: 'Малый зал', key: 12 }
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
            case 'time':
                filterTime = filterValue;
                break
            default:
                filterMas = 'Все';
                filterMas = 'Все';
                filterTime = 'Все'
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

    filterByTime = () => {
        const newSched = this._statSched.map(month => {
            return month.map(week => {
                return week.filter(day => {
                    return day.time === filterTime
                })
            })
        })

        this.endFilter(newSched)
    }

    filterMasPrac = () => {//Фильтрация по мастеру и практике
        const newSched = this._statSched.map(month => {
            return month.map(week => {
                return week.filter(day => {
                    return day.mName === filterMas
                })
            })
        }).map(month => {
            return month.map(week => {
                return week.filter(day => {
                    return day.pracName === filterPrac
                })
            })
        })

        this.endFilter(newSched)
    }

    filterMasTime = () => {//Фильтрация по мастеру и времени
        const newSched = this._statSched.map(month => {
            return month.map(week => {
                return week.filter(day => {
                    return day.mName === filterMas
                })
            })
        }).map(month => {
            return month.map(week => {
                return week.filter(day => {
                    return day.time === filterTime
                })
            })
        })

        this.endFilter(newSched)
    }

    filterPracTime = () => {//Фильтрация по практике и времени
        const newSched = this._statSched.map(month => {
            return month.map(week => {
                return week.filter(day => {
                    return day.pracName === filterPrac
                })
            })
        }).map(month => {
            return month.map(week => {
                return week.filter(day => {
                    return day.time === filterTime
                })
            })
        })

        this.endFilter(newSched)
    }

    filterMasPracTime = () => {//Фильтрация по мастеру, практике и времени
        const newSched = this._statSched.map(month => {
            return month.map(week => {
                return week.filter(day => {
                    return day.mName === filterMas
                })
            })
        }).map(month => {
            return month.map(week => {
                return week.filter(day => {
                    return day.pracName === filterPrac
                })
            })
        }).map(month => {
            return month.map(week => {
                return week.filter(day => {
                    return day.time === filterTime
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

        if (filterMas !== 'Все' && filterPrac === 'Все' && filterTime === 'Все') {//Фильтрация только по мастеру
            this.filterByMas()
            return
        }

        if (filterPrac !== 'Все' && filterMas === 'Все' && filterTime === 'Все') {//Фильтрация только по практике
            this.filterByPrac()
            return
        }

        if (filterTime !== 'Все' && filterMas === 'Все' && filterPrac === 'Все') {//Фильтрация только по времени
            this.filterByTime()
            return
        }

        if(filterMas !== 'Все' && filterPrac !== 'Все' && filterTime === 'Все') {//Фильтрация по мастеру и практике
            this.filterMasPrac()
            return
        }

        if(filterMas !== 'Все' && filterTime !== 'Все' && filterPrac === 'Все') {//Фильтрация по мастеру и времени
            this.filterMasTime()
            return
        }

        if(filterPrac !== 'Все' && filterTime !== 'Все' && filterMas === 'Все') {//Фильтрация по практике и времени
            this.filterPracTime()
            return
        }

        if(filterPrac !== 'Все' && filterMas !== 'Все' && filterTime !== 'Все') {//Фильтрация по мастеру, практике и времени
            this.filterMasPracTime()
            return
        }

        if (filterMas === 'Все' && filterPrac === 'Все' && filterTime === 'Все') {//Сброс фильтра вручную, то есть если пользователь ставит значение 'все' во всех фильтрах. Альтернатива кнопке "Сбросить фильтр"
            this.onReset()
        }
    }

    render() {
        const { dynSched } = this.state;
        return (
            <div className='schedule'>
                <div className='filter'>
                    <FilterSched
                        onFilterSched={this.onFilterSched}
                        onReset={this.onReset}
                    />
                </div>
                <div className='sched'>
                    <SchedMonth
                        dynSched={dynSched}
                    />
                </div>
            </div>
        );
    }
}