import { useContext } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import classes from '../../modules/BlogItem.module.css';
import FavoritesContext from '../../store/favorites-context';

function BlogItem({blog}) {
  const favoriteContext = useContext(FavoritesContext);
  const isFavorite = favoriteContext.blogIsFavorite(blog.id);

  function toggleFavoriteItemHandler() {
    if (isFavorite) {
      favoriteContext.removeFavorite(blog.id);
    } else {
      console.log(isFavorite);
      favoriteContext.addFavorite({
        id: blog.id,
        title: blog.title,
        image: blog.image,
        address: blog.address,
        description: blog.description
      });
    }
  }

  return (
    <li className={classes.blogWrap} key={blog.id}>
      <div className={classes.blogImageWrap}>
        <img src={blog.image} alt={blog.title} />
        <span className={classes.hearticon} onClick={toggleFavoriteItemHandler}>
          {isFavorite ? <FaHeart className={classes.fav} size={24}/> : <FaRegHeart size={24}/>}
        </span>
      </div>
      <div className={classes.blogDetails}>
        <h3>{blog.title}</h3>
        <address>{blog.address}</address>
        <p>{blog.description}</p>
      </div>
    </li>
  )
}

export default BlogItem;