import React from 'react';
import './button.scss';
import store from '../../redux/store'
import {changeFromElevator} from '../../redux/actions/elevatorAction'
import {elevate} from '../../redux/actions/buttonActions'
import { liftNav } from '../../utils/liftNav';

const Button = ({ value, lift, name }) => {
  // store.dispatch(changeFromElevator())
  // const getElemName = (e) =>{
  //   if (e?.target?.getAttribute('name') !== undefined) {
  //     return e.target.getAttribute('name')
  //   } else {
  //     return e
  //   }
  // }
  
  // const liftNav = (e, source) => {
  //   // console.log(e, source);
  //     let name = getElemName(e)
  //     switch (source) {
  //       case 'elevatorBtn':
          
  //         break;
  //       case 'floorUp':
        
  //         break;
  //       case 'floorDwn':
      
  //         break;
      
  //       default:
  //         break;
  //     }
  //     store.dispatch(elevate(name))
  //   }

  return ( 
    <div className="button-container">
      <div className="button-wrapper">
        <div className="button-inner">
          <button
            onClick={(e) => store.dispatch(elevate( liftNav(e, 'elevatorBtn')))}
            name={name}
          >
            {
              value
            }
          </button>
        </div>
      </div>
    </div>
  )
}

export default Button;
