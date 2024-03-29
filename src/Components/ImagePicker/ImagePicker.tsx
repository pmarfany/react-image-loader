import React, {SyntheticEvent} from "react";
import GrayButton from "../RoundButton/GrayButton";
import AccentButton from "../RoundButton/AccentButton";
import StyledPicker from "./StyledPicker";
import isNullOrUndefined from "../../Utils/isNullOrUndefined";
import {Store} from "../../Redux/types";

interface IImagePicker extends Store {
  accept: string;
  onLoadImage: (files: FileList | null) => void;
  removeImage: (e: SyntheticEvent<HTMLSpanElement>) => void;
}

const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'copy';
};

const BaseImagePicker: React.FunctionComponent<IImagePicker> = (props) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onDrop = (entry: 'dataTransfer' | 'target') => (e: any) => {
    e.preventDefault();
    props.onLoadImage(e[entry].files);
  };

  const openPicker = () => {
    if ( inputRef.current === null ) { return }
    inputRef.current.click();
  };

  return (
    <StyledPicker
      image={props.image}
      onDragEnter={handleDragStart}
      onDragOver={handleDragStart}
      onDrop={onDrop('dataTransfer')}
    >
      { !isNullOrUndefined(props.image) &&
        <GrayButton round onClick={props.removeImage} />
      }
      <AccentButton round onClick={openPicker} />
      <input type="file" accept={props.accept} onChange={onDrop('target')} ref={inputRef}/>
    </StyledPicker>
  );
};

export default BaseImagePicker;
