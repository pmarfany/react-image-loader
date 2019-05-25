import React, {useState} from "react";
import BaseImagePicker from "./BaseImagePicker";
import readImageAsBlob from "../../Utils/readImageAsBlob";

const ImagePicker: React.FunctionComponent = () => {
  const [data, setData] = useState<string | undefined>(undefined);

  const removeImage = () => { setData(undefined); };

  const onLoadImage = (files: FileList | null) => {
    if ( files === null || files.length < 1 ) { return }

    if ( files[0].type.startsWith('image/') ) {
      readImageAsBlob(files[0]).then(setData);
    }
  };

  return (
    <BaseImagePicker
      image={data}
      onLoadImage={onLoadImage}
      removeImage={removeImage}
      accept="image/*"
    />
  );
};

export default ImagePicker;
