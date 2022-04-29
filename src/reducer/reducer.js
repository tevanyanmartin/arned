import initialState from "./initialState";
export const SET_USER ='SET_USER';
export const SET_DIALOG = 'SET_DIALOG'
const reducer = (state = initialState, action) => {
  switch (action.type) {
    
    case SET_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case SET_DIALOG:{
      return{
        ...state,
        dialogState: action.payload
      }
    }
    default:
      return state;
  }
};

export default reducer;
