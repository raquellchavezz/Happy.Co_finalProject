import { expect, test, it, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MyNavBar from "./components/Navbar";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import FavoriteButton from "./components/FavoriteButton";
import ProductCard from "./components/ProductCard";

//basename prop was not properly being provided to the router component so was getting this error:  FAIL  src/example.test.jsx > Navbar renders correctly
// TypeError: Cannot destructure property 'basename' of 'React__namespace.useContext(...)' as it is null.
//to fix error wrapped the navbar component with router to ensure havea router component wrapping myNavBar
//mynavBar component relies on routing functionality/features from router library like react router dom
//library, such as <Link> and to props, to handle navigation between different routes

//test1: testing if the navbar is defined
test("Navbar renders correctly", () => {
  const { getByTestId } = render(
    <Router>
      {" "}
      <MyNavBar />
    </Router>
  );
  const navbarElement = getByTestId("navbar");
  expect(navbarElement).toBeDefined();
});

//test2 App.jsx:
//notes:
//describe = method used to organize and structure tests, takes a string ("App.jsx") which describes the group of tests being defined + a callback func that has the actual tests
//The render method is used to render a given React component and return an object that provides several utility functions for interacting with the rendered component.
//source: https://dev.to/isiakaabd/beginner-guide-on-unit-testing-in-react-using-react-testing-library-and-vitest-4ifp
describe("App.js", () => {
  //imported App.jsx to test it here, screen and render are imported to be able to interact w the component
  it("Check if the App renders correctly", () => {
    //render our App properly
    render(<App />);
    screen.debug(); // utility function lets you print the current state of the rendered component to the console, helps when writing or debugging tests
  });
});

//test 3: FavoriteButton.jsx
// checking whether the button element rendered by the FavoriteButton component is present in the document.

describe("FavoriteButton.jsx", () => {
  it("Check if the button is in the document", () => {
    render(<FavoriteButton />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});

//test 4: ProductCard
//notes: 
//grouping the tests for the ProductCard component.
//it function defines an individual test case, the test case is about verifying that the component displays an image of the product.
// test ensures that the ProductCard component displays an image of the product by checking if the selected image element has an src attribute.

describe("ProductCard", () => {
  it("displays an image of the product", async () => {
    const product = {  
      id: 1,
      image: "image-url",
      title: "Product Title",
      price: 9.99,
      description: "Product Description",
    };

    const { getByAltText } = render(// used to render the ProductCard component
    // component is rendered with the product object passed as a prop, along with other required props like isFavorite, setFavoriteArray, and favoriteArray. 
    <ProductCard //mockdata is created here 
        product={product}
        isFavorite={false}
        setFavoriteArray={() => {}}
        favoriteArray={[1]}
      />
    );

    const image = await getByAltText("image of product");//await keyword is used because the getByAltText function returns a promise that resolves when the element is found.
    expect(image).toHaveAttribute("src");
    //expect statement verifies that the selected image element has an src attribute
    //toHaveAttribute matcher is used to make this assertion.
  });
});

// describe("ProductCard", async () => {
//   const { getByAltText } = await render(<ProductCard />);
//   it("displays an image of product", () => {
//     const image = getByAltText("image of product");
//     expect(image).toHaveAttribute("src"); // throws an expception if the element cannot be found
//   });
// });
