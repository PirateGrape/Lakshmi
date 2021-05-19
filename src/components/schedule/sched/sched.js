import React, { Component } from 'react'
import SchedMonth from '../sched-components/sched-month'
import FilterSched from '../../filter-sched'
import SchedChangeRoom from '../sched-change-room'

import '../../../styles/sched.css'

let filterPrac = 'Все', filterMas = 'Все', filterTime = 'Все';//Фильтры для расписания
const smallSched = [//массив-месяц
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
            { day: 'ВТ', pracName: 'Самакона', pic: './img/draft_pic.jpg', mName: 'Вера', date: '05.05.2021', time: '9:45', place: 'Малый зал', key: 10 },
            { day: 'ВТ', pracName: 'Супта', pic: './img/draft_pic.jpg', mName: 'Марина Овсянникова', date: '05.05.2021', time: '10:00', place: 'Малый зал', key: 11 }
        ], [//массив-день
            { day: 'ПН', pracName: 'Париврита', pic: '../../img/draft_pic', mName: 'Слава Овсянников', date: '01.05.2021', time: '6:30', place: 'Малый зал', key: 12 },
            { day: 'ПН', pracName: 'Цикл воина', pic: 'img/draft_pic.jpg', mName: 'Олеся', date: '03.05.2021', time: '8:00', place: 'Малый зал', key: 13 },
            { day: 'ПН', pracName: 'НС', pic: './img/draft_pic.jpg', mName: 'Слава Хиль', date: '05.05.2021', time: '10:00', place: 'Малый зал', key: 14 },
            { day: 'ПН', pracName: 'Армус', pic: './img/draft_pic.jpg', mName: 'Слава Хиль', date: '05.05.2021', time: '16:00', place: 'Малый зал', key: 15 },
            { day: 'ПН', pracName: 'Самакона', pic: './img/draft_pic.jpg', mName: 'Марина Овсянникова', date: '05.05.2021', time: '20:30', place: 'Малый зал', key: 16 },
            { day: 'ПН', pracName: 'Ханумана', pic: './img/draft_pic.jpg', mName: 'Вера', date: '05.05.2021', time: '20:30', place: 'Малый зал', key: 17 }
        ],
        [//массив-день
            { day: 'ВТ', pracName: 'Раджака', pic: '../../img/draft_pic', mName: 'Слава Овсянников', date: '01.05.2021', time: '6:30', place: 'Малый зал', key: 18 },
            { day: 'ВТ', pracName: 'НС', pic: 'img/draft_pic.jpg', mName: 'Олеся', date: '03.05.2021', time: '8:00', place: 'Малый зал', key: 19 },
            { day: 'ВТ', pracName: 'Париврита', pic: './img/draft_pic.jpg', mName: 'Слава Хиль', date: '05.05.2021', time: '12:00', place: 'Малый зал', key: 20 },
            { day: 'ВТ', pracName: 'Самакона', pic: './img/draft_pic.jpg', mName: 'Вера', date: '05.05.2021', time: '16:00', place: 'Малый зал', key: 21 },
            { day: 'ВТ', pracName: 'Сету Бандха', pic: './img/draft_pic.jpg', mName: 'Марина Овсянникова', date: '05.05.2021', time: '20:30', place: 'Малый зал', key: 22 }
        ], [//массив-день
            { day: 'ПН', pracName: 'Париврита', pic: '../../img/draft_pic', mName: 'Слава Овсянников', date: '01.05.2021', time: '8:00', place: 'Малый зал', key: 23 },
            { day: 'ПН', pracName: 'Цикл воина', pic: 'img/draft_pic.jpg', mName: 'Олеся', date: '03.05.2021', time: '12:00', place: 'Малый зал', key: 24 },
            { day: 'ПН', pracName: 'Ханумана', pic: './img/draft_pic.jpg', mName: 'Слава Хиль', date: '05.05.2021', time: '16:00', place: 'Малый зал', key: 25 },
            { day: 'ПН', pracName: 'Армус', pic: './img/draft_pic.jpg', mName: 'Слава Хиль', date: '05.05.2021', time: '20:30', place: 'Малый зал', key: 26 },
            { day: 'ПН', pracName: 'Самакона', pic: './img/draft_pic.jpg', mName: 'Марина Овсянникова', date: '05.05.2021', time: '20:30', place: 'Малый зал', key: 27 },
            { day: 'ПН', pracName: 'Ханумана', pic: './img/draft_pic.jpg', mName: 'Вера', date: '05.05.2021', time: '20:30', place: 'Малый зал', key: 28 }
        ],
        [//массив-день
            { day: 'ВТ', pracName: 'Падма', pic: '../../img/draft_pic', mName: 'Слава Овсянников', date: '01.05.2021', time: '6:30', place: 'Малый зал', key: 29 },
            { day: 'ВТ', pracName: 'Сету Бандха', pic: 'img/draft_pic.jpg', mName: 'Олеся', date: '03.05.2021', time: '8:00', place: 'Малый зал', key: 30 },
            { day: 'ВТ', pracName: 'Париврита', pic: './img/draft_pic.jpg', mName: 'Слава Хиль', date: '05.05.2021', time: '12:00', place: 'Малый зал', key: 31 },
            { day: 'ВТ', pracName: 'Самакона', pic: './img/draft_pic.jpg', mName: 'Вера', date: '05.05.2021', time: '16:00', place: 'Малый зал', key: 32 },
            { day: 'ВТ', pracName: 'Сету Бандха', pic: './img/draft_pic.jpg', mName: 'Марина Овсянникова', date: '05.05.2021', time: '18:30', place: 'Малый зал', key: 33 }
        ],
    ],
    [//массив-неделя
        [//массив-день
            { day: 'СР', pracName: 'Раджака', pic: '../../img/draft_pic', mName: 'Слава Овсянников', date: '01.05.2021', time: '6:30', place: 'Малый зал', key: 34 },
            { day: 'СР', pracName: 'Сету Бандха', pic: 'img/draft_pic.jpg', mName: 'Олеся', date: '03.05.2021', time: '10:00', place: 'Малый зал', key: 35 },
            { day: 'СР', pracName: 'Баланс', pic: './img/draft_pic.jpg', mName: 'Слава Хиль', date: '03.05.2021', time: '11:30', place: 'Малый зал', key: 36 },
            { day: 'СР', pracName: 'Ханумана', pic: './img/draft_pic.jpg', mName: 'Слава Хиль', date: '03.05.2021', time: '12:00', place: 'Малый зал', key: 37 },
            { day: 'СР', pracName: 'Самакона', pic: './img/draft_pic.jpg', mName: 'Марина Овсянникова', date: '03.05.2021', time: '16:00', place: 'Малый зал', key: 38 },
            { day: 'СР', pracName: 'Ханумана', pic: './img/draft_pic.jpg', mName: 'Вера', date: '03.05.2021', time: '20:30', place: 'Малый зал', key: 39 }
        ]
    ],
    [//массив-неделя
        [//массив-день
            { day: 'ЧТ', pracName: 'Раджака', pic: '../../img/draft_pic', mName: 'Слава Овсянников', date: '05.05.2021', time: '9:45', place: 'Малый зал', key: 40 },
            { day: 'ЧТ', pracName: 'Сету Бандха', pic: 'img/draft_pic.jpg', mName: 'Олеся', date: '05.05.2021', time: '11:30', place: 'Малый зал', key: 41 },
            { day: 'ЧТ', pracName: 'Париврита', pic: './img/draft_pic.jpg', mName: 'Слава Хиль', date: '05.05.2021', time: '16:00', place: 'Малый зал', key: 42 },
            { day: 'ЧТ', pracName: 'Ханумана', pic: './img/draft_pic.jpg', mName: 'Слава Овсянников', date: '05.05.2021', time: '18:30', place: 'Малый зал', key: 43 },
            { day: 'ЧТ', pracName: 'Самакона', pic: './img/draft_pic.jpg', mName: 'Вера', date: '05.05.2021', time: '18:30', place: 'Малый зал', key: 44 },
            { day: 'ЧТ', pracName: 'Сету Бандха', pic: './img/draft_pic.jpg', mName: 'Марина Овсянникова', date: '05.05.2021', time: '20:30', place: 'Малый зал', key: 45 }
        ]
    ],
],
    bigSched = [//массив-месяц
        [//массив-неделя
            [//массив-день
                { day: 'ПН', pracName: 'Будха', pic: '../../img/draft_pic', mName: 'Алексей Сартаков', date: '01.05.2021', time: '6:30', place: 'Малый зал', key: 101 },
                { day: 'ПН', pracName: 'Баланс', pic: 'img/draft_pic.jpg', mName: 'Алена', date: '03.05.2021', time: '8:00', place: 'Малый зал', key: 102 },
                { day: 'ПН', pracName: 'Армус', pic: './img/draft_pic.jpg', mName: 'Слава Хиль', date: '05.05.2021', time: '9:45', place: 'Малый зал', key: 103 },
                { day: 'ПН', pracName: 'Будха', pic: './img/draft_pic.jpg', mName: 'Галина', date: '05.05.2021', time: '11:30', place: 'Малый зал', key: 104 },
                { day: 'ПН', pracName: 'Раджака', pic: './img/draft_pic.jpg', mName: 'Вячеслава', date: '05.05.2021', time: '16:00', place: 'Малый зал', key: 105 },
                { day: 'ПН', pracName: 'Ханумана', pic: './img/draft_pic.jpg', mName: 'Вера', date: '05.05.2021', time: '20:30', place: 'Малый зал', key: 106 }
            ],
            [//массив-день
                { day: 'ВТ', pracName: 'Будха', pic: '../../img/draft_pic', mName: 'Слава Овсянников', date: '01.05.2021', time: '11:30', place: 'Малый зал', key: 107 },
                { day: 'ВТ', pracName: 'Сету Бандха', pic: 'img/draft_pic.jpg', mName: 'Мария', date: '03.05.2021', time: '12:00', place: 'Малый зал', key: 108 },
                { day: 'ВТ', pracName: 'Падма', pic: './img/draft_pic.jpg', mName: 'Слава Хиль', date: '05.05.2021', time: '18:30', place: 'Малый зал', key: 109 },
                { day: 'ВТ', pracName: 'Самакона', pic: './img/draft_pic.jpg', mName: 'Алексей Сартаков', date: '05.05.2021', time: '9:45', place: 'Малый зал', key: 110 },
                { day: 'ВТ', pracName: 'Супта', pic: './img/draft_pic.jpg', mName: 'Марина Овсянникова', date: '05.05.2021', time: '10:00', place: 'Малый зал', key: 111 }
            ], [//массив-день
                { day: 'ПН', pracName: 'Париврита', pic: '../../img/draft_pic', mName: 'Слава Овсянников', date: '01.05.2021', time: '6:30', place: 'Малый зал', key: 112 },
                { day: 'ПН', pracName: 'Цикл воина', pic: 'img/draft_pic.jpg', mName: 'Олеся', date: '03.05.2021', time: '8:00', place: 'Малый зал', key: 113 },
                { day: 'ПН', pracName: 'Баланс', pic: './img/draft_pic.jpg', mName: 'Слава Хиль', date: '05.05.2021', time: '10:00', place: 'Малый зал', key: 114 },
                { day: 'ПН', pracName: 'Армус', pic: './img/draft_pic.jpg', mName: 'Слава Хиль', date: '05.05.2021', time: '16:00', place: 'Малый зал', key: 115 },
                { day: 'ПН', pracName: 'Будха', pic: './img/draft_pic.jpg', mName: 'Марина Овсянникова', date: '05.05.2021', time: '20:30', place: 'Малый зал', key: 116 },
                { day: 'ПН', pracName: 'Ханумана', pic: './img/draft_pic.jpg', mName: 'Вера', date: '05.05.2021', time: '20:30', place: 'Малый зал', key: 117 }
            ],
            [//массив-день
                { day: 'ВТ', pracName: 'Раджака', pic: '../../img/draft_pic', mName: 'Слава Овсянников', date: '01.05.2021', time: '6:30', place: 'Малый зал', key: 118 },
                { day: 'ВТ', pracName: 'Баланс', pic: 'img/draft_pic.jpg', mName: 'Олеся', date: '03.05.2021', time: '8:00', place: 'Малый зал', key: 119 },
                { day: 'ВТ', pracName: 'Париврита', pic: './img/draft_pic.jpg', mName: 'Слава Хиль', date: '05.05.2021', time: '12:00', place: 'Малый зал', key: 120 },
                { day: 'ВТ', pracName: 'Самакона', pic: './img/draft_pic.jpg', mName: 'Вера', date: '05.05.2021', time: '16:00', place: 'Малый зал', key: 121 },
                { day: 'ВТ', pracName: 'Сету Бандха', pic: './img/draft_pic.jpg', mName: 'Марина Овсянникова', date: '05.05.2021', time: '20:30', place: 'Малый зал', key: 122 }
            ], [//массив-день
                { day: 'ПН', pracName: 'Париврита', pic: '../../img/draft_pic', mName: 'Слава Овсянников', date: '01.05.2021', time: '8:00', place: 'Малый зал', key: 123 },
                { day: 'ПН', pracName: 'Цикл воина', pic: 'img/draft_pic.jpg', mName: 'Олеся', date: '03.05.2021', time: '12:00', place: 'Малый зал', key: 124 },
                { day: 'ПН', pracName: 'Ханумана', pic: './img/draft_pic.jpg', mName: 'Слава Хиль', date: '05.05.2021', time: '16:00', place: 'Малый зал', key: 125 },
                { day: 'ПН', pracName: 'Армус', pic: './img/draft_pic.jpg', mName: 'Слава Хиль', date: '05.05.2021', time: '20:30', place: 'Малый зал', key: 26 },
                { day: 'ПН', pracName: 'Самакона', pic: './img/draft_pic.jpg', mName: 'Марина Овсянникова', date: '05.05.2021', time: '20:30', place: 'Малый зал', key: 127 },
                { day: 'ПН', pracName: 'Ханумана', pic: './img/draft_pic.jpg', mName: 'Вера', date: '05.05.2021', time: '20:30', place: 'Малый зал', key: 128 }
            ],
            [//массив-день
                { day: 'ВТ', pracName: 'Падма', pic: '../../img/draft_pic', mName: 'Слава Овсянников', date: '01.05.2021', time: '6:30', place: 'Малый зал', key: 129 },
                { day: 'ВТ', pracName: 'Сету Бандха', pic: 'img/draft_pic.jpg', mName: 'Олеся', date: '03.05.2021', time: '8:00', place: 'Малый зал', key: 130 },
                { day: 'ВТ', pracName: 'Париврита', pic: './img/draft_pic.jpg', mName: 'Слава Хиль', date: '05.05.2021', time: '12:00', place: 'Малый зал', key: 131 },
                { day: 'ВТ', pracName: 'Самакона', pic: './img/draft_pic.jpg', mName: 'Вера', date: '05.05.2021', time: '16:00', place: 'Малый зал', key: 132 },
                { day: 'ВТ', pracName: 'Сету Бандха', pic: './img/draft_pic.jpg', mName: 'Марина Овсянникова', date: '05.05.2021', time: '18:30', place: 'Малый зал', key: 133 }
            ],
        ],
        [//массив-неделя
            [//массив-день
                { day: 'СР', pracName: 'Раджака', pic: '../../img/draft_pic', mName: 'Слава Овсянников', date: '01.05.2021', time: '6:30', place: 'Малый зал', key: 134 },
                { day: 'СР', pracName: 'Сету Бандха', pic: 'img/draft_pic.jpg', mName: 'Олеся', date: '03.05.2021', time: '10:00', place: 'Малый зал', key: 135 },
                { day: 'СР', pracName: 'Баланс', pic: './img/draft_pic.jpg', mName: 'Слава Хиль', date: '03.05.2021', time: '11:30', place: 'Малый зал', key: 136 },
                { day: 'СР', pracName: 'Ханумана', pic: './img/draft_pic.jpg', mName: 'Слава Хиль', date: '03.05.2021', time: '12:00', place: 'Малый зал', key: 137 },
                { day: 'СР', pracName: 'Самакона', pic: './img/draft_pic.jpg', mName: 'Марина Овсянникова', date: '03.05.2021', time: '16:00', place: 'Малый зал', key: 138 },
                { day: 'СР', pracName: 'Ханумана', pic: './img/draft_pic.jpg', mName: 'Вера', date: '03.05.2021', time: '20:30', place: 'Малый зал', key: 139 }
            ]
        ],
        [//массив-неделя
            [//массив-день
                { day: 'ЧТ', pracName: 'Раджака', pic: '../../img/draft_pic', mName: 'Слава Овсянников', date: '05.05.2021', time: '9:45', place: 'Малый зал', key: 140 },
                { day: 'ЧТ', pracName: 'Сету Бандха', pic: 'img/draft_pic.jpg', mName: 'Олеся', date: '05.05.2021', time: '11:30', place: 'Малый зал', key: 141 },
                { day: 'ЧТ', pracName: 'Париврита', pic: './img/draft_pic.jpg', mName: 'Слава Хиль', date: '05.05.2021', time: '16:00', place: 'Малый зал', key: 142 },
                { day: 'ЧТ', pracName: 'Ханумана', pic: './img/draft_pic.jpg', mName: 'Слава Овсянников', date: '05.05.2021', time: '18:30', place: 'Малый зал', key: 143 },
                { day: 'ЧТ', pracName: 'Самакона', pic: './img/draft_pic.jpg', mName: 'Вера', date: '05.05.2021', time: '18:30', place: 'Малый зал', key: 144 },
                { day: 'ЧТ', pracName: 'Сету Бандха', pic: './img/draft_pic.jpg', mName: 'Марина Овсянникова', date: '05.05.2021', time: '20:30', place: 'Малый зал', key: 145 }
            ]
        ],
    ];

export default class Scheduele extends Component {
    constructor(props) {

        super(props);
        this.state = {//Динамическое расписание в стейте, потому что оно меняется
            dynSched: smallSched,
            statSched: smallSched

        };
        this._statSched = this.state.dynSched//Статическое расписание вне стейта, потому что оно не должно меняться
    }


    //Функция-фильтр для расписания. При помощи селектов над расписанием пользователь сможет получать расписание только с определенным местером или по определенной практике

    onReset = () => {//Функция для обнуления расписания
        this.setState(() => {
            return { dynSched: this.state.statSched }
        })


    }

    onClearFilters = () => {
        const selectFilter = document.querySelectorAll('#filter');//Обнуление велью фильтров в интерфейсе
        selectFilter.forEach(select => { select.value = 'Все' });
        filterMas = 'Все';//Обнуление всех фильтров
        filterPrac = 'Все';
        filterTime = 'Все';
    }

    getNewFilter = (e) => {//Функция для определения, что фильтруем
        let { target } = e,//Для упрощенной записи в будущем
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
                filterPrac = 'Все';
                filterTime = 'Все'
        }
    }

    test = () => {
        
    }

    filterBy = (whereToFilt, filter) => {//Функция для фильтрации расписания по заданному фильтру в заданном расписании
        const newSched = whereToFilt.map(month => {//"Докапывание до дня, чтобы вернуть не дни, а дни в неделях в месяце, чтобы не сломать рендер, который выстраивает дни в неделях в месяцах"
            return month.map(week => {
                return week.filter(day => {
                    if (filter === filterMas) {
                        return day.mName === filterMas
                    }
                    if (filter === filterPrac) {
                        return day.pracName === filterPrac
                    }
                    if (filter === filterTime) {
                        return day.time === filterTime
                    }
                    return day
                })
            })
        })
        return newSched
    }

    endFilter = (newSched) => {//Функция для сокращения кода в фильтрации. Закладывает отфильтрованное расписание в dynSched
        this.setState(() => { return { dynSched: newSched } })
    }

    onFilterSched = (e) => {//Сама функция для фильтрации расписания

        this.getNewFilter(e)//Сначала получение фильтра

        //Потом определение, насколько конкретной должна быть фильтрация и фильтрация

        if (filterMas !== 'Все' && filterPrac === 'Все' && filterTime === 'Все') {//Фильтрация только по мастеру            
            this.endFilter(this.filterBy(this.state.statSched, filterMas))
            return
        }

        if (filterPrac !== 'Все' && filterMas === 'Все' && filterTime === 'Все') {//Фильтрация только по практике
            this.endFilter(this.filterBy(this.state.statSched, filterPrac))
            return
        }

        if (filterTime !== 'Все' && filterMas === 'Все' && filterPrac === 'Все') {//Фильтрация только по времени
            this.endFilter(this.filterBy(this.state.statSched, filterTime))
            return
        }

        if (filterMas !== 'Все' && filterPrac !== 'Все' && filterTime === 'Все') {//Фильтрация по мастеру и практике
            this.endFilter(this.filterBy(this.filterBy(this.state.statSched, filterMas), filterPrac))
            return
        }

        if (filterMas !== 'Все' && filterTime !== 'Все' && filterPrac === 'Все') {//Фильтрация по мастеру и времени
            this.endFilter(this.filterBy(this.filterBy(this.state.statSched, filterMas), filterTime))
            return
        }

        if (filterPrac !== 'Все' && filterTime !== 'Все' && filterMas === 'Все') {//Фильтрация по практике и времени
            this.endFilter(this.filterBy(this.filterBy(this.state.statSched, filterPrac), filterTime))
            return
        }

        if (filterPrac !== 'Все' && filterMas !== 'Все' && filterTime !== 'Все') {//Фильтрация по мастеру, практике и времени
            this.endFilter(this.filterBy(this.filterBy(this.filterBy(this.state.statSched, filterMas), filterPrac), filterTime))
            return
        }

        if (filterMas === 'Все' && filterPrac === 'Все' && filterTime === 'Все') {//Сброс фильтра "вручную", то есть если пользователь ставит значение 'все' во всех фильтрах. Альтернатива кнопке "Сбросить фильтр"
            this.onReset()
            this.onClearFilters()
        }

    }

    onActivateBtn = (event, klass) => {//Функция для выделения любой активной кнопки
        const btns = document.querySelectorAll(klass);
        btns.forEach(btn => { btn.classList.remove('active') });
        event.target.classList.add('active')
    }

    onChangeRoom = (nextSched) => {//Функция для открытия расписания любого другого зала
        this.setState(() => { return { dynSched: nextSched } })
        this.setState(() => { return { statSched: nextSched } })
    }


    /////Функция запоминания фильтров

    ////

    render() {
        const { dynSched } = this.state;

        return (
            <>
                <button onClick={() => { this.test() }}>TESTBUTTON</button>
                <div className='schedule'>
                    <SchedChangeRoom
                        smallSched={smallSched}
                        bigSched={bigSched}
                        onChangeRoom={this.onChangeRoom}
                        onActivateBtn={this.onActivateBtn}
                        onClearFilters={this.onClearFilters}
                    />
                    <div className='filter'>
                        <FilterSched
                            onFilterSched={this.onFilterSched}
                            onReset={this.onReset}
                            onClearFilters={this.onClearFilters}
                            key='FilterSched'
                        />
                    </div>
                    <div className='sched'>
                        <SchedMonth
                            dynSched={dynSched}
                            key='SchedMoth'
                        />
                    </div>
                </div>
            </>
        )
    }
}