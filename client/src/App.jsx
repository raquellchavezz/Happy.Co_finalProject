import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./components/Navbar";
import ListProducts from "./components/ListProducts";

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <ListProducts />
    </div>
  );
}

export default App;
