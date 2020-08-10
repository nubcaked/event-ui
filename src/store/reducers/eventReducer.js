const initState = {
  msg: 'hey'
}

const eventReducer = (state = {}, action) => {
  switch(action.type) {
    case 'FETCH_EVENTS_SUCCESS':
      // state.events = [];
      console.log(action.data);
      return {
        ...state,
        list: action.data
      }
    case 'test':
      console.log('testing...');
      const newState = Object.assign({}, state, {msg: action.data})
      return newState;
    default:
      return state;
  }
}

export default eventReducer;