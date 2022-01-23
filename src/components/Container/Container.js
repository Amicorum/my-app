import React from 'react';
import './container.scss';
import {ReactComponent as Arrow} from '../../assets/icons/down-arrow.svg';
import { lift } from '../../redux/actions';
import { connect } from 'react-redux';

const Container = ({ value, lift, name }) => {
  return (
    <div className="container-outer">
      <div className="container-inner">
        <div className="container-main"/>
        <div className="container-arrows">
          {name !== '6' && <Arrow onClick={(e) =>lift(name, 'floorUp')} className="arrowUp"/>}
          {name!== 'L' && <Arrow onClick={(e) =>lift(name, 'floorDwn')} className="arrowDown"/>}
        </div>
      </div>
    </div>
  )
}
export default connect(null, { lift })(Container);
