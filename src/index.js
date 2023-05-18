import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Root from './Root';
import NewsGrid from './Components/NewsGrid';
import Article from './Components/Article'
import { Provider } from 'react-redux';
import store from './Store/index'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <NewsGrid/> 
      },
      {
        path: "/futbol",
        element: <NewsGrid sport="soccer"/>
      },
      {
        path: "/basketball",
        element: <NewsGrid sport="basketball"/>
      },
      {
        path: "/tennis",
        element: <NewsGrid sport="tennis"/>
      },
      {
        path: "/golf",
        element: <NewsGrid sport="golf"/>
      },
      {
        path: "/autoracing",
        element: <NewsGrid sport="autoracing"/>
      },
      {
        path: "/article/:url",
        element: <Article />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
