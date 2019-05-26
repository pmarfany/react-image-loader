import {SET_IMAGE_DATA, SET_MODAL_STATE, Store, StoreAction} from "./types";
import {initialStore} from "./store";

const reducer = (state: Store = initialStore, action: StoreAction): Store => {
  switch( action.type ) {
    case SET_MODAL_STATE:
    case SET_IMAGE_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default reducer;