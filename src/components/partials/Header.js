import { Link } from 'react-router-dom';
import classes from '../../modules/Header.module.css';
import FavoritesContext from '../../store/favorites-context';
import { useContext } from 'react';

function Header() {
  const favoriteContext = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.siteTitle}><Link to="/">React Blog</Link></div>
      <nav className={classes.menu}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/new-blog">New Blog</Link></li>
          <li><Link to="/favorites">Favorites <span className={classes.badge}>{favoriteContext.totalFavorites}</span></Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;