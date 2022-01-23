import React from 'react';
import './button.scss';
import store from '../../redux/store'
import {changeFromElevator} from '../../redux/actions/elevatorAction'
import {elevate} from '../../redux/actions/buttonActions'
import { liftNav } from '../../utils/liftNav';

const Button = ({ floorNr }) => {
  // store.dispatch(changeFromElevator())
  return ( 
    <div className="button-container">
      <div className="button-wrapper">
        <div className="button-inner">
          <button
            onClick={() => store.dispatch(elevate( liftNav(floorNr, 'elevatorBtn')))}
          >
            {
              floorNr
            }
          </button>
        </div>
      </div>
    </div>
  )
}

export default Button;
