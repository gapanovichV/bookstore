import React from 'react'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import './styles/index.scss';
import cn from "classnames";

import {Home} from "pages/Home";

export enum RoutePath {
  MAIN = '/',
  LOGIN = '/login'
}

const router = createBrowserRouter([
  {
    path: RoutePath.MAIN,
    element: <Home/>,
  },
  {
    path: RoutePath.LOGIN,
    element: <div>LOGIN</div>
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
