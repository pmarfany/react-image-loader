// Action types
import {Action} from "redux";

export const SET_MODAL_STATE: string = 'modal/SET_STATE';
export const SET_IMAGE_DATA: string = 'image/SET_DATA';

// Generic types
type StoreActionTypes = typeof SET_MODAL_STATE | typeof SET_IMAGE_DATA;

// Store action type
export interface StoreAction extends Action<StoreActionTypes> {
  payload: Partial<Store>;
}

// Main store interface
export interface Store {
  isModalOpen: boolean;
  image?: string | undefined;
}
