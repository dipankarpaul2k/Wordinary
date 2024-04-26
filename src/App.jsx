import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import layout
import { RootLayout } from "./components";
// import pages
import { Bookmarks, Definition, Error, History, Home, NotFound } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: "search/:searchWord",
        element: <Definition />,
        errorElement: <Error />,
      },
      {
        path: "bookmarks",
        element: <Bookmarks />,
        errorElement: <Error />,
      },
      {
        path: "history",
        element: <History />,
        errorElement: <Error />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
