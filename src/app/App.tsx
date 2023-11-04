import React from 'react'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import cn from "classnames";
import './styles/index.scss';

import {Main} from "pages/Main";
import path from "path";


export enum RoutePath {
  MAIN = '/',
  LOGIN = '/login'
}

const router = createBrowserRouter([
  {
    path: RoutePath.MAIN,
    element: <Main/>,
  },
  {
    path: RoutePath.LOGIN,
    element: <div>LOGIHN</div>
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
