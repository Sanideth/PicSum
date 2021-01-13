import React, { useState, useContext } from "react";
import { Context } from "./context/Context";

function Image(props) {
  const [hovered, setHovered] = useState(false);
  const { toggleFavorite } = useContext(Context);

  function heartIcon() {
    if (props.data.isFavorite) {
      return (
        <i
          className="ri-heart-fill favorite"
          onClick={() => toggleFavorite(props.data.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-heart-line favorite"
          onClick={() => toggleFavorite(props.data.id)}
        ></i>
      );
    }
  }
  function plusIcon() {
    if (hovered) {
      return <i className="ri-add-circle-line cart"></i>;
    }
  }

  return (
    <div
      className={`${props.className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={props.data.url}
        className="image-grid"
        alt={`Img-${props.data.id}`}
      />
      {heartIcon()}
      {plusIcon()}
    </div>
  );
}

export default Image;
