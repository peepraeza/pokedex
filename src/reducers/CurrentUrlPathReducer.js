const DefaultState = 'https://pokeapi.co/api/v2/pokemon?limit=54';

const CurrentUrlPathReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case "LANDING_PAGE":
      return DefaultState;
    case "UPDATE_PAGE":
      return action.payload;
    default:
      return state
  }
};

export default CurrentUrlPathReducer;
