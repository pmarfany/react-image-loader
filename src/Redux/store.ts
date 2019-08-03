import {createStore as createReduxStore, Store as ReduxStore} from "redux";
import {Store, StoreAction} from "./types";
import reducer from "./reducer";
import {composeWithDevTools} from "redux-devtools-extension";

// InitialStore
const initialStore: Store = { image: undefined };

// Create store for app
const createStore = (): ReduxStore<Store, StoreAction> => (
  createReduxStore(reducer, composeWithDevTools())
);

export { initialStore, createStore };