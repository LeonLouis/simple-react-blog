import { Outlet } from 'react-router-dom';
import Header from '../components/partials/Header';
import classes from '../modules/RootLayout.module.css';

function RootLayout(props) {
  return (
    <>
      <Header/>
      <main>
        <Outlet/>
      </main>
    </>
  )
}

export default RootLayout;
