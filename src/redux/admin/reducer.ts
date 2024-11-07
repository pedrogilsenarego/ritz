import adminTypes from "./types";
import { Admin } from "./types";

const INITIAL_STATE: Admin = {
  preview: null,
};

interface Action {
  type: string;
  payload: any;
}

const adminReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case adminTypes.PREVIEW_PIT:
      return {
        ...state,
        preview: action.payload,
      };

    default:
      return state;
  }
};

export default adminReducer;
