import { createContext, useState, useEffect } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (blog) => {},
  removeFavorite: (blogId) => {},
  blogIsFavorite: (blogId) => {},
});

export function FavoritesContextProvider(props){
  const [userFavorites, setUserFavorites] = useState([]);

  useEffect(() => {
    getFavorites();
  }, []);

  async function getFavorites(){
    await fetch(`${process.env.REACT_APP_FIREBASE_URL}/blogs.json?orderBy="favorite"&equalTo=1`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const blogs = [];

      for (const key in data){
        const blog = {
          id: key,
          ...data[key]
        };
        blogs.push(blog);
      }
      setUserFavorites(blogs);
    });
  }

  async function addFavoriteHandler(blog){
    let blogId = blog.id;
    delete blog.id;
    await fetch(`${process.env.REACT_APP_FIREBASE_URL}/blogs/${blogId}.json`, {
      method: 'PATCH',
      body: JSON.stringify(blog),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    getFavorites();
  }

  async function removeFavoriteHandler(blogId){
    await fetch(`${process.env.REACT_APP_FIREBASE_URL}/blogs/${blogId}.json`, {
      method: 'PATCH',
      body: JSON.stringify({favorite: 0}),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    getFavorites();
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