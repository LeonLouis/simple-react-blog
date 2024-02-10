import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (blog) => {},
  removeFavorite: (blogId) => {},
  blogIsFavorite: (blogId) => {},
});

export function FavoritesContextProvider(props){
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(blog){
    setUserFavorites((prevFavorites) => {
      return prevFavorites.concat(blog);
    });
  }

  function removeFavoriteHandler(blogId){
    setUserFavorites((prevFavorites) => {
      return prevFavorites.filter(blog => blog.id !== blogId);
    });
  }

  function blogsIsFavoriteHandler(blogId){
    return userFavorites.some(blog => blog.id === blogId)
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    blogIsFavorite: blogsIsFavoriteHandler
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  )
}

export default FavoritesContext;