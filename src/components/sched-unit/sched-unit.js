import React, {Component} from 'react';
import '../../styles/sched-unit.css'


export default class SchedUnit extends Component {

    
    render() {   
        const {text} = this.props;//Достал текст из пропсов, заложенных выше
        return (
            <div 
            className='unit'
            >{text}</div>
        )
    }
    
}

