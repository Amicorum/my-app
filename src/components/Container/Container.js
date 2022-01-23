import React from 'react';
import './container.scss';
import {ReactComponent as Arrow} from '../../assets/icons/down-arrow.svg';
import {elevate} from '../../redux/actions/buttonActions'
import store from '../../redux/store'
import { liftNav } from '../../utils/liftNav';


const Container = ({ value, lift, name }) => {
   

  return (
    <div className="container-outer">
      <div className="container-inner">
        <div className="container-main"/>
        <div className="container-arrows">
          {name !== '6' && <Arrow onClick={(e) =>store.dispatch(elevate( liftNav(name, 'floorUp')))} className="arrowUp"/>}
          {name!== '1' && <Arrow onClick={(e) =>store.dispatch(elevate( liftNav(name, 'floorUp')))} className="arrowDown"/>}
        </div>
      </div>
    </div>
  )
}
export default Container;
