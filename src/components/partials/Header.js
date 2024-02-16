import { Link } from 'react-router-dom';
import classes from '../../modules/Header.module.css';
import FavoritesContext from '../../store/favorites-context';
import { useContext, useState } from 'react';
import { FaBars } from 'react-icons/fa';

function Header() {
  const favoriteContext = useContext(FavoritesContext);
  const [isToggle, setIsToggle] = useState(false);

  function handleToggleOpenHandler() {
    setIsToggle(!isToggle);
  }

  return (
    <header className={classes.header}>
      <div className={classes.siteTitle}><Link to="/">My Blog</Link></div>
      <nav className={isToggle ? `${classes.mblOpen} ${classes.menu}` : classes.menu}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/new-blog">New Blog</Link></li>
          <li><Link to="/favorites">My Favorites <span className={classes.badge}>{favoriteContext.totalFavorites}</span></Link></li>
        </ul>
      </nav>
      <FaBars className={classes.menuToggleBtn} onClick={handleToggleOpenHandler} />
    </header>
  )
}

export default Header;