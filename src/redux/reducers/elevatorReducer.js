import {
  CHANGE_FLOOR_FROM_ELEVATOR,
  CHANGE_FLOOR_FROM_OUTSIDE
} from '../types'

const initialState = {
    //direction must be up/down
    direction: 'up',
    elevator:[
      {
        floor: '6',
        isCurrent: false,
        insideBtnActive: false,
        upBtnActive: false,
        downBtnActive: false
      },
      {
        floor: '5',
        isCurrent: false,
        insideBtnActive: false,
        upBtnActive: false,
        downBtnActive: false
      },
      {
        floor: '4',
        isCurrent: false,
        insideBtnActive: false,
        upBtnActive: false,
        downBtnActive: false
      },
      {
        floor: '3',
        isCurrent: false,
        insideBtnActive: false,
        upBtnActive: false,
        downBtnActive: false
      },
      {
        floor: '2',
        isCurrent: false,
        insideBtnActive: false,
        upBtnActive: false,
        downBtnActive: false
      },
      {
        floor: '1',
        isCurrent: true,
        insideBtnActive: false,
        upBtnActive: false,
        downBtnActive: false
      }
    ]
  }
  
  
  const elevatorReducer = (state = initialState, action) => {
    switch (action.type) {
      case CHANGE_FLOOR_FROM_ELEVATOR:
        return {
          ...state,
          direction: action.direction,
          elevator: action.elevator
        }
      default:
        return state;
    }
  }
  
  export default elevatorReducer;
  