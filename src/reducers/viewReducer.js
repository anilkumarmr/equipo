const INITIAL_STATE = {
   minimized: false,
   width: "230px",
};

export const viewReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case "MINIMIZE_SIDEBAR":
         return {
            ...state,
            width: "70px",
            minimized: true,
         };
      case "MAXIMIZE_SIDEBAR":
         return {
            ...state,
            width: "230px",
            minimized: false,
         };

      default:
         return state;
   }
};

export default viewReducer;
