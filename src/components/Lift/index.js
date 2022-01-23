import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './lift.scss';

const Lift = ({ floor, lastFloor }) => {

  const [transitionTime, setTransitionTime] = useState(5)
  const [doorPosition, setDoorPosition] = useState(true)


  const manageDoorOpen = (arrivalTime) => {
    setTimeout(() => {  
      setDoorPosition(!doorPosition)
      setTimeout(() => {
        setDoorPosition(true)
      }, 5000);
    }, `${arrivalTime}000`);
  }

  const calcTransition = (current, last) => {
    let interval = 5
    const currentFlr = parseInt(current)
    const lastFlr = parseInt(last)
    if (currentFlr > lastFlr) {
      interval = (currentFlr - lastFlr)* interval
    } else {
      interval = (lastFlr - currentFlr)* interval
      if(currentFlr === lastFlr){
        manageDoorOpen(interval)
      }
    }
    manageDoorOpen(interval.toString())
    return interval.toString()
  }


  useEffect(() => {
    console.log(floor,lastFloor);
    setTransitionTime(calcTransition(floor,lastFloor))
    const person = document.querySelector('.person');
    switch (floor) {
      case '1':
        person.style.bottom = 80 + 'px';
        break
      case '2':
        person.style.bottom = 150 + 'px';
        break
      case '3':
        person.style.bottom = 220 + 'px';
        break
      case '4':
        person.style.bottom = 290 + 'px';
        break
      case '5':
        person.style.bottom = 360 + 'px';
        break
      case '6':
        person.style.bottom = 430 + 'px';
        break
      default:
        person.style.bottom = 80 + 'px';
    }
  }, [floor,lastFloor])

  return (
    <div className="person" style={{transition: `all ${transitionTime}s`}}>
      <div className="curtain">
        <div className="curtain__wrapper">
          <input type="checkbox" disabled checked={doorPosition}/>
          <div className="curtain__panel curtain__panel--left"/>
          <div className="curtain__content">
          {floor}
          </div>
          <div className="curtain__panel curtain__panel--right"/>
        </div> 
      </div>
    </div>
    )
}
const mapStateToProps = (state) => ({
  floor: state.buttonReducer.floor,
})
export default connect(mapStateToProps)(Lift);
