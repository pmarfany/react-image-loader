import React from "react";
import BaseImagePicker from "./BaseImagePicker";
import readImageAsBlob from "../../Utils/readImageAsBlob";
import {connect} from "react-redux";
import {Store} from "../../Redux/types";
import {setImageData} from "../../Redux/actions";

interface MappedProps {
  image: string | undefined;
}

interface DispatchProps {
  setImageData: (image: string | undefined) => void;
}

const ImagePicker: React.FunctionComponent<MappedProps & DispatchProps> = (props) => {
  const onLoadImage = (files: FileList | null) => {
    if ( files === null || files.length < 1 ) { return }

    if ( files[0].type.startsWith('image/') ) {
      readImageAsBlob(files[0]).then(props.setImageData);
    }
  };

  return (
    <BaseImagePicker
      image={props.image}
      onLoadImage={onLoadImage}
      removeImage={() => props.setImageData(undefined)}
      accept="image/*"
    />
  );
};

const mapStateToProps = (state: Store) => ({ image: state.image });
const mapDispatchToProps = { setImageData };

export default connect(mapStateToProps, mapDispatchToProps)(ImagePicker);
