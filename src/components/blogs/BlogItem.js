import { useContext, useState } from 'react';
import { FaEdit, FaHeart, FaRegHeart, FaTrash } from 'react-icons/fa';
import classes from '../../modules/BlogItem.module.css';
import FavoritesContext from '../../store/favorites-context';
import { Link, useNavigate } from 'react-router-dom';
import Modal from '../modals/Modals';


function BlogItem({blog}) {
  const navigate = useNavigate();
  const favoriteContext = useContext(FavoritesContext);
  const isFavorite = favoriteContext.blogIsFavorite(blog.id);
  const [isShowModal, setIsShowModal] = useState(false);

  function toggleFavoriteItemHandler() {
    if (isFavorite) {
      favoriteContext.removeFavorite(blog.id);
    } else {
      favoriteContext.addFavorite({
        id: blog.id,
        title: blog.title,
        image: blog.image,
        address: blog.address,
        description: blog.description,
        favorite: 1
      });
    }
  }

  function toggleModalHandler() {
    setIsShowModal(!isShowModal);
  }

  async function deleteBlogHandler() {
    await fetch(`${process.env.REACT_APP_FIREBASE_URL}/blogs/${blog.id}.json`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    setIsShowModal(!isShowModal);
    navigate(0);
  }

  return (
    <>
      <li className={classes.blogWrap} key={blog.id}>
          <div className={classes.blogImageWrap}>
            <img src={blog.image} alt={blog.title} />
            <span className={classes.hearticon} onClick={toggleFavoriteItemHandler}>
              {isFavorite ? <FaHeart className={classes.fav} size={24}/> : <FaRegHeart size={24}/>}
            </span>
          </div>
          <div className={classes.blogDetails}>
            <Link to={`/blogs/${blog.id}`}>
              <h3>{blog.title}</h3>
            </Link>
            <address>{blog.address}</address>
            <p>{blog.description}</p>

            <div className={classes.actions}>
              <Link to={`/edit-blog/${blog.id}`}><FaEdit className={classes.edit} size={18}/></Link>
              <FaTrash className={classes.trash} size={18} onClick={toggleModalHandler}/>
            </div>
          </div>
      </li>
      {isShowModal && (
        <Modal toggleModal={toggleModalHandler} deleteBlog={deleteBlogHandler}/>
      )}
    </>
  )
}

export default BlogItem;