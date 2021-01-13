import React, { useEffect, useState } from "react";
const Context = React.createContext();

function ContextProvider(props) {
  const [allPhotos, setAllPhotos] = useState([]);

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
  return (
    <Context.Provider value={{ allPhotos, toggleFavorite }}>
      {props.children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
