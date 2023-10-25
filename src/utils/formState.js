export const initialState = {
  userName: '',
  userEmail: '',
  userMessage: '',
};

export const formReducer = (state, action) => {
  switch (action.type) {
    case 'RESET':
      return initialState;
    case 'INPUT_CHANGE':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
