import {StoreAction, SET_MODAL_STATE, SET_IMAGE_DATA} from "./types";

export function setModalState(isModalOpen: boolean): StoreAction {
  return {
    type: SET_MODAL_STATE,
    payload: { isModalOpen },
  };
}

export function setImageData(image: string | undefined): StoreAction {
  return {
    type: SET_IMAGE_DATA,
    payload: { image },
  };
}
