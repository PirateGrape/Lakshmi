//Здесь сложены все функции фильтра для фильтрации расписания

let filterPrac = 'Все', filterMas = 'Все';//Фильтры для расписания

const onReset = () => {//Функция для обнуления расписания
    this.setState(() => {
        return { dynSched: this._statSched }
    })

    const selectFilter = document.querySelectorAll('#filter');//Обнуление велью фильтров в интерфейсе
    selectFilter.forEach(select => { select.value = 'Все' })
}
    ,
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
        }
    }
    ,
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
    ,
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
    ,
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
    ,
    endFilter = (newSched) => {
        this.setState(() => { return { dynSched: newSched } })
    }
    ,
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
const filterFunc = { onReset, getNewFilter, onFilterSched, filterByMas, filterByPrac, doubleFilter, endFilter }

export default filterFunc