import React from 'react';
import { connect } from 'react-redux';
import { lift } from '../../redux/actions';
import './button.scss';
// import store from '../../redux/store'
// import {
//   changeFromElevator
// } from '../../redux/actions/elevatorAction'

const Button = ({ value, lift, name }) => {
  // store.dispatch(changeFromElevator())
  return (
    <div className="button-container">
      <div className="button-wrapper">
        <div className="button-inner">
          <button
            onClick={(e) => lift(e, 'elevatorBtn')}
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

export default connect(null, { lift })(Button);
