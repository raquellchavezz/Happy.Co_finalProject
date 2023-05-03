import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./components/Navbar";
import ListProducts from "./components/ListProducts";
import "semantic-ui-css/semantic.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/", //always showing root.jsx
//     element: <Root />,
//     children: [
//       { index: true, element: <Home /> },
//       {
//         path: "aboutme",
//         element: <AboutMe />,
//       },
//       {
//         path: "blogs",
//         element: <Blogs />,
//       },
//       {
//         path: "blogs/:blogId",
//         element: <ShowBlog />,
//       },
//     ],
//   },
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }
// export default App;

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <ListProducts />
    </div>
  );
}

export default App;
