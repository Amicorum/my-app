import React from 'react';
import './container.scss';
import {ReactComponent as Arrow} from '../../assets/icons/down-arrow.svg';
import {elevate} from '../../redux/actions/buttonActions'
import store from '../../redux/store'
import { liftNav } from '../../utils/liftNav';


const Container = ({ floorNr }) => {
   

  return (
    <div className="container-outer">
      <div className="container-inner">
        <div className="container-main"/>
        <div className="container-arrows">
          {floorNr !== '6' && <Arrow onClick={() =>store.dispatch(elevate( liftNav(floorNr, 'floorUp')))} className="arrowUp"/>}
          {floorNr!== '1' && <Arrow onClick={() =>store.dispatch(elevate( liftNav(floorNr, 'floorUp')))} className="arrowDown"/>}
        </div>
      </div>
    </div>
  )
}
export default Container;
