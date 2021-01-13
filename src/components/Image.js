import React from "react";

function Image(props) {
  return (
    <div className={`${props.className} image-container`}>
      <img
        src={props.data.url}
        className="image-grid"
        alt={`Img-${props.data.id}`}
      />
    </div>
  );
}

export default Image;
