import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Header from "./Components/Header";

// Import Pages Link
import Header from './Components/Header'
import Anime from './Pages/Anime/Anime';
import Bollywood from './Pages/Bollywood/Bollywood';
import Hollywood from './Pages/Hollywood/Hollywood';
import Korean from './Pages/korean/Korean';
import Punjabi from './Pages/Punjabi/Punjabi';
import Romance from './Pages/Romance/Romance';
import South from './Pages/South/South';
import SuperHit from './Pages/SuperHit/SuperHit'

import A from "./A/a";

// Import Pages Link

// Import the Routes of the Page Link or Url
const router = createBrowserRouter([
     {
          path: "/",
          element: <A/>, // Header component
          children:[
               {
                    path: "/Anime",
                    element: <Anime />, // Anime page
               },
               {
                    path: "/Bollywood",
                    element: <Bollywood />, // Bollywood page
               },
               {
                    path: "/Hollywood",
                    element: <Hollywood />, // Hollywood page
               },
               {
                    path: "/Korean",
                    element: <Korean />, // Korean page
               },
               {
                    path: "/Punjabi",
                    element: <Punjabi />,
               },
               {
                    path: "/Romance",
                    element: <Romance />,
               },
               {
                    path: "/South",
                    element: <South />,
               },
               {
                    path: "/SuperHit",
                    element: <SuperHit />,
               },
          ]
     }
 
   
]);
// Import the Routes of the Page Link or Url

function App() {
     return <RouterProvider router={router} />;
}

export default App;
