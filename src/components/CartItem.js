import React, { useContext, useState } from "react";
import { Context } from "./context/Context";
import PropTypes from "prop-types";

function CartItem(props) {
  const [hovered, setHovered] = useState(false);
  const { removeImageFromCart } = useContext(Context);

  return (
    <div className="cart-item">
      <i
        className={`ri-delete-bin-${hovered ? `fill` : `line`}`}
        onClick={() => removeImageFromCart(props.data.id)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      ></i>
      <img src={props.data.url} alt="Cart Img" width="130px" />
      <p>$5.99</p>
    </div>
  );
}

CartItem.propTypes = {
  data: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};

export default CartItem;
