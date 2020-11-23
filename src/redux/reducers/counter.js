const initialState = {
  count: 0,
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        count: state.count + 1,
      };
    case "SUP":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}
