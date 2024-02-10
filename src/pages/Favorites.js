import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
import BlogList from '../components/blogs/BlogList';


function Favorites() {
  const favoriteContext = useContext(FavoritesContext);

  return (
    <section>
      <h1>Favorite Blogs</h1>
      {favoriteContext.totalFavorites > 0 ?
        <BlogList data={favoriteContext.favorites}/>
      : <center>No Favorite Blogs yet.</center>}
    </section>
  )
}

export default Favorites;