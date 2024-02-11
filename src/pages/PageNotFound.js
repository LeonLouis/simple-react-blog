import { Link } from 'react-router-dom';
import classes from '../modules/PageNotFound.module.css';

function PageNotFound() {
  return (
    <section>
      <h1 className={classes.pnfTitle}>404 Page Not Found</h1>
      <p className={classes.pnfText}>The page you're looking for could not be found.</p>
      <div className={classes.pnfBtn}><Link to="/">Back to Homepage</Link></div>
    </section>
  )
}

export default PageNotFound;