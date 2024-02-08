const coffeeReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD':
        state.push(
          action.payload
        )
        return state;
      case 'CLEAR':
        state = [];
        return state;
      default:
        return state;
    }
  };
  
  export default coffeeReducer;