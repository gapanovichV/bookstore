import React from 'react'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import './styles/index.scss';
import cn from "classnames";

import {Home} from "pages/Home";
import {Discover} from "pages/Discover";
import {BookDetail} from "pages/BookDetail";
import {AdminPanel} from "pages/AdminPanel";

export enum RoutePath {
  MAIN = '/',
  LOGIN = '/login',
  DISCOVER = '/discover',
  BOOK = '/book',
  ADMIN = '/admin'
}

const router = createBrowserRouter([
  {
    path: RoutePath.MAIN,
    element: <Home/>,
  },
  {
    path: RoutePath.LOGIN,
    element: <div>LOGIN</div>
  },
  {
    path: RoutePath.DISCOVER,
    element: <Discover />
  },
  {
    path: RoutePath.BOOK,
    element: <BookDetail />
  },
  {
    path: RoutePath.ADMIN,
    element: <AdminPanel />
  }
]);

function App() {
  return (
    <div id={'app'} className={cn('app')}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
