import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import layout
import { RootLayout } from "./components";
// import pages
import { Bookmarks, Definition, Error, History, Home } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "search/:searchWord",
        element: <Definition />,
      },
      {
        path: "bookmarks",
        element: <Bookmarks />,
      },
      {
        path: "history",
        element: <History />,
      },
    ],
  },
  {
    path: "*",
    element: (
      <div>
        <h1>Not Found</h1>
      </div>
    ),
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
