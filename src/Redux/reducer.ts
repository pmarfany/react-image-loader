import {SET_IMAGE_DATA, Store, StoreAction} from "./types";
import {initialStore} from "./store";

const reducer = (state: Store = initialStore, action: StoreAction): Store => {
  if ( action.type === SET_IMAGE_DATA ) { return { ...state, ...action.payload }; }
  return state;
};

export default reducer;