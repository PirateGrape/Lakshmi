import React, { Component } from 'react'

export default class SchedChangeRoom extends Component {
    onActive = (e) => {
        const buttons = document.querySelectorAll('btn');
        buttons.forEach(button => { console.log(button) })
    }
    render() {
        const { onChangeRoom, onActivateBtn, smallSched, bigSched, sevSched, onClearFilters } = this.props;

        return (
            <div className='change-room-box'>
                <button className='btn small active'
                    onClick={(event) => {
                        onChangeRoom(smallSched);
                        onActivateBtn(event, '.btn');
                        onClearFilters();
                    }}
                >Малый зал</button>
                <button className='btn big'
                    onClick={(e) => {
                        onChangeRoom(bigSched);
                        onActivateBtn(e, '.btn');
                        onClearFilters();
                    }}>Большой зал</button>
                <button className='btn big'
                    onClick={(e) => {
                        onChangeRoom(sevSched);
                        onActivateBtn(e, '.btn');
                        onClearFilters();
                    }}>Северск</button>
            </div>
        )
    }
}