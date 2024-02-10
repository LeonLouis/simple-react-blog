import { Link } from 'react-router-dom';
import classes from '../../modules/Header.module.css';

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.siteTitle}><Link to="/">React Blog</Link></div>
      <nav className={classes.menu}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/new-blog">New Blog</Link></li>
          <li><Link to="/favorites">Favorites</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;