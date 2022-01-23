const initialState = {
  floor: '1'
}

const buttonReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ELEVATE':
      return {
        ...state,
        floor: action.name,
      }
    default:
      return state;
  }
}

export default buttonReducer;
