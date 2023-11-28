import React from 'react'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import './styles/index.scss';
import cn from "classnames";

import {Home} from "pages/Home";
import {Discover} from "pages/Discover";

export enum RoutePath {
  MAIN = '/',
  LOGIN = '/login',
  DISCOVER = '/discover'
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
  }
]);

function App() {
  return (
    <div className={cn('app')}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
