import React, { useContext } from "react";
import { Context } from "./context/Context";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover";

function Image(props) {
  const [hovered, domRef] = useHover();
  const {
    toggleFavorite,
    addImageToCart,
    removeImageFromCart,
    cartItems,
  } = useContext(Context);

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
    if (cartItems.find((item) => item.id === props.data.id)) {
      return (
        <i
          className="ri-shopping-cart-fill cart"
          onClick={() => removeImageFromCart(props.data.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-add-circle-line cart"
          onClick={() => addImageToCart(props.data)}
        ></i>
      );
    }
  }

  return (
    <div className={`${props.className} image-container`} ref={domRef}>
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

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};

export default Image;
