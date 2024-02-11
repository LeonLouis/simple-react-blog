import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoutesFromElements, RouterProvider, createBrowserRouter, Route } from 'react-router-dom';
import { FavoritesContextProvider } from './store/favorites-context';
import RootLayout from './pages/RootLayout';
import Home from './pages/Home';
import NewBlog, { action as newBlogAction } from './pages/NewBlog';
import Favorites from './pages/Favorites';
import PageNotFound from './pages/PageNotFound';
import SingleBlog, { loader as singleBlogLoader } from './pages/SingleBlog';
import './modules/globals.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route path="/" element={<Home/>} />
      <Route path="new-blog" element={<NewBlog/>} action={newBlogAction}/>
      <Route path="favorites" element={<Favorites/>}/>
      <Route path="/blogs/:id" element={<SingleBlog/>} loader={singleBlogLoader}/>
      <Route path="*" element={<PageNotFound/>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <FavoritesContextProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </FavoritesContextProvider>
);