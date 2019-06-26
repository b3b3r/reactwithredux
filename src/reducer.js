const initialState = {
counter: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADDONE':    
      return {
        counter : state.counter +1
      }
    case 'ADDTEN':
      return {
        counter : state.counter +10
      }
    case 'REMOVEONE':
    return {
      counter : state.counter -1
    }
    case 'REMOVETEN':
    return {
      counter : state.counter -10
    }
    case 'RESET':
    return {
      counter : 0
    }
    default:
      return state;
  }
}

export default counterReducer;
