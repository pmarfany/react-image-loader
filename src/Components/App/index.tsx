import React from "react";
import ImagePicker from "../ImagePicker/ImagePicker";
import readImageAsBlob from "../../Utils/readImageAsBlob";
import {connect} from "react-redux";
import {Store} from "../../Redux/types";
import {setImageData} from "../../Redux/actions";
import Message from "../Message";
import isNullOrUndefined from "../../Utils/isNullOrUndefined";

interface DispatchProps {
  setImageData: (image: string | undefined) => void;
}

const App: React.FunctionComponent<Store & DispatchProps> = (props) => {
  const onLoadImage = (files: FileList | null) => {
    if ( files === null || files.length < 1 ) { return; }
    if ( !files[0].type.startsWith('image/') ) { return; }

    readImageAsBlob(files[0]).then(props.setImageData);
  };

  return (
    <>
      <ImagePicker
        image={props.image}
        onLoadImage={onLoadImage}
        removeImage={() => props.setImageData(undefined)}
        accept="image/*"
      />
      <Message children={isNullOrUndefined(props.image)
        ? 'Select \'+\' or drop an image into the container'
        : 'Drop a new image, use the edit button, or remove it with the cross button'
      }/>
    </>
  );
};

const mapStateToProps = (state: Store) => ({ image: state.image });
const mapDispatchToProps = { setImageData };

export default connect(mapStateToProps, mapDispatchToProps)(App);
