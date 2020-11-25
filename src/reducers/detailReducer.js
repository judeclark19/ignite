const initState = {
  game: {},
  screenshots: {},
};

const detailReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_DETAIL":
      return {
        ...state,
        game: action.payload.game,
        screenshots: action.payload.screenshots,
      };
    default:
      return {
        ...state,
      };
  }
};

export default detailReducer;
