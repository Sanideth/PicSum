import React, { useContext } from "react";
import { getClass } from "../../utilities/utilities";
import { Context } from "../../components/context/Context";
import Image from "../../components/Image";
function Photos() {
  const { allPhotos } = useContext(Context);
  const imageElements = allPhotos.map((img, index) => (
    <Image key={img.id} data={img} className={getClass(index)} />
  ));

  return <main className="photos">{imageElements}</main>;
}

export default Photos;
