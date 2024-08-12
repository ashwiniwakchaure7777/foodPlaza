import React, { lazy , Suspense} from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import ContactUs from "./components/ContactUs.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import {createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
import Shimmer from "./components/Shimmer.js";
//import Grocery from "./components/Grocery.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";

// Chunking
// Code splitting
// Dynamic Bundling
// Lazy Loading
// On demand loading

const Grocery = lazy(() => import("./components/Grocery.js"));

const AppLayout = () => {
  return (
    //Connected redux store to the react application
    <Provider store={appStore}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout />,
    children:[
      {
        path:'/',
        element:<Body/>,
      },
      {
        path:'/about',
        element:<About />
      },
      {
        path:'/contact',
        element:<ContactUs />,
      },
      {
        path:'/grocery',
        //Wrap component in suspense. Fallback - What should react render when the element is nou loaded
         element:<Suspense fallback={<h1>Loading Grocery</h1>}><Grocery /></Suspense>,
      },
      {
        path:'/restaurants/:resId',
        element:<RestaurantMenu />,
      },
      
    ],
    errorElement:<Error />,
  },
  ]);

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
//All data router objects are passed to this component to render your app and enable the rest of the data APIs.