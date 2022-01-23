import { ELEVATE } from '../actionTypes';

const getElemName = (e) =>{
  if (e?.target?.getAttribute('name') !== undefined) {
    return e.target.getAttribute('name')
  } else {
    return e
  }
}

export const lift = (e, source) => dispatch => {
    let name = getElemName(e)
    switch (source) {
      case 'elevatorBtn':
        
        break;
      case 'floorUp':
      
        break;
      case 'floorDwn':
    
        break;
    
      default:
        break;
    }
    dispatch({ type: ELEVATE, name });
}

