import { Outlet } from 'react-router-dom';
import Header from '../components/partials/Header';
import classes from '../modules/RootLayout.module.css';
import Footer from '../components/partials/Footer';

function RootLayout() {
  return (
    <>
      <Header/>
      <main className={classes.container}>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default RootLayout;
