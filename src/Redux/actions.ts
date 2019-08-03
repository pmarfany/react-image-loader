import {StoreAction, SET_IMAGE_DATA} from "./types";

export function setImageData(image: string | undefined): StoreAction {
  return {
    type: SET_IMAGE_DATA,
    payload: { image },
  };
}
