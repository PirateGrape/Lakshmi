import React, {Component} from 'react';
import '../../styles/sched-unit.css'


export default class SchedUnit extends Component {

    
    render() {   
        const {day, pracName, mName, date, time, place} = this.props;//Достал текст из пропсов, заложенных выше
        let {pic} = this.props;
        if(pracName==='shawasana') {pic = '../../img/draft_pic.jpg'};
        return (
          <>
            <div className='menu-card'>
                <p className='day'>{day}</p>
                <p className='pracName'>{pracName}</p>
                <img src={pic} alt='A yogi practicing'></img>
                <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nemo quo tempore iusto voluptatum optio quos dolore deleniti.</div>
                <p className="master">{mName}</p>
                <p className="date">{date} {time}</p>
                <p className='place'>{place}</p>
            </div>
          </>
        )
    }
    
}

