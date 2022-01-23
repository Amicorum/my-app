import React from 'react';
import Button from './components/Button';
import Container from './components/Container';
import liftData from './data';
import Lift from './components/Lift';
import './App.scss';
import {usePrevious} from './utils/getPrewValHook'
import { useSelector } from 'react-redux'

function App() {
  const state = useSelector((state) => state.buttonReducer)
  const {floor} = usePrevious(state) || {floor: '1'}
  
  return (
    <div className="flex">
      <div className="main-space">
        <div className="btn-holder">
          {
            liftData.map((lift, idx) => (
              <Button key={idx} name={lift.name} value={lift.name} />
            ))
          }
        </div>
        <div className="ctn-holder">
          {
            liftData.map((lift, idx) => (
              <Container key={`${lift.name}${idx}`} name={lift.name} value={lift.name} />
            ))
          }
          <Lift lastFloor={floor} />
        </div>
      </div>
    </div>
  )
}

export default App;
