import React, { useEffect, useState } from "react";
const Context = React.createContext();

function ContextProvider(props) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    )
      .then((response) => response.json())
      .then((data) => setAllPhotos(data));
  }, []);

  function toggleFavorite(id) {
    const newImageArray = allPhotos.map((img) => {
      if (img.id === id) {
        console.log(img.isFavorite);
        return {
          ...img,
          isFavorite: !img.isFavorite,
        };
      }

      return img;
    });
    setAllPhotos(newImageArray);
  }

  function addImageToCart(image) {
    setCartItems((prevItems) => [...prevItems, image]);
    console.log(cartItems);
  }
  function removeImageFromCart(id) {
    const newCart = cartItems.filter((item) => item.id !== id);
    setCartItems(newCart);
  }
  function clearCart() {
    setCartItems([]);
  }
  return (
    <Context.Provider
      value={{
        allPhotos,
        cartItems,
        toggleFavorite,
        addImageToCart,
        removeImageFromCart,
        clearCart,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
