import React, {useEffect} from 'react'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import './styles/index.scss';
import cn from "classnames";

import {Home} from "pages/Home";
import {Discover} from "pages/Discover";
import {BookDetail} from "pages/BookDetail";
import {AdminPanel} from "pages/AdminPanel";
import {Cart} from "pages/Cart";
import {useDispatch} from "react-redux";
import {AppDispatch} from "app/providers/StoreProvider";
import {fetchAllBook} from "entities/AllBook";

export enum RoutePath {
  MAIN = '/',
  LOGIN = '/login',
  DISCOVER = '/discover',
  BOOK = '/discover/book',
  ADMIN = '/admin',
  CART = '/cart'
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
    path: `${RoutePath.BOOK}/:id`,
    element: <BookDetail />
  },
  {
    path: RoutePath.ADMIN,
    element: <AdminPanel />
  },
  {
    path: RoutePath.CART,
    element: <Cart />
  }
]);

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchAllBook(1))
  }, []);

  return (
    <div id={'app'} className={cn('app')}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
