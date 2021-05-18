import React, { Component } from 'react'

export default class FilterRememberButton extends Component {

    render() {
        const { onRememberFilter } = this.props
        return (
            <button
                onClick={onRememberFilter}>Запомнить фильтры</button>
        )
    }

}