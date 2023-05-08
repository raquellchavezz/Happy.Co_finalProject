import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./components/Navbar";
import ListProducts from "./components/ListProducts";
import "semantic-ui-css/semantic.min.css";
import Profile from "./components/Profile";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Router,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MyNavBar />}>
      <Route index element={<ListProducts />} />
      <Route path="user-profile" element={<Profile />} />
    </Route>
  )
);
function App() {
  return (
    <RouterProvider router={router} />
    // <div className="App">
    //   <MyNavBar />
    //   <ListProducts />
    // </div>
  );
}

export default App;
