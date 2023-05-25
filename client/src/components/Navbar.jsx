import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Menu, Segment } from "semantic-ui-react";
import Logo from "../assets/happyco.png";
import { useState, useEffect } from "react";
import { Image, Icon } from "semantic-ui-react";

function MyNavBar({ setUserObj }) {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  // console.log("From Navbar", user, "From Navbar", isAuthenticated);
  const [activeItem, setActiveItem] = useState("home"); //this will help determine what item we are in the in the nav bar so we can go to the correct page

  // // Check if user is authenticated and extract the email if available
  // const email = isAuthenticated ? user.email : "";

  const sendUser = (user) => {
    //passes state variable to body
    fetch("/api/user", {
      //matches the route in the backend
      //, it sends a POST request to the "/api/user" endpoint with the user data in the request body.
      //{user:user}, changed this for proxy
      method: "POST", //post method to add resource to db
      body: JSON.stringify({ user }), //stringifying the user obj, body is set to a JSON-encoded string containing the user data.
      headers: {
        "Content-type": "application/json", //The headers are set to indicate that the content type of the request is JSON.
      },
    })
      .then((response) => response.json()) //we want to get the response convert to json
      .then((data) => {
        //get that data and
        // console.log(data);
      });
  };
  const handleItemClick = (e, { name }) => {
    // console.log("name from navbar, checking active", name);
    //on navbar
    // name property is used to identify the clicked menu item.
    setActiveItem(name); //name property of the menu item object is extracted and passed to the setActiveItem function.
  };

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/", //went to user profile before
      },
    });
    setUserObj(user); //// Pass the user object to setUserObj
    //Pass the user data to the target page using URL parameters
  };
  useEffect(() => {
    if (isAuthenticated) {
      setUserObj(user); // Set the user object after successful login
      sendUser(user);
    }
  }, [isAuthenticated, user, setUserObj]);

  return (
    <>
      <Segment inverted data-testid="navbar" id="navbar">
        {/*component that creates a segment, which is a flexible and reusable content container used for grouping and displaying content*/}
        {/*segment creates a container for the menu component */}
        <Menu inverted secondary className="custom-menu">
          {" "}
          {/*menu creates a horizontal menu*/}
          {/*inverted inverts the color scheme so that the text/other elms are white and the backgorund is dark */}
          <Menu.Item header className="logo-item">
            <Image //can use img from semantic and size it there
              src={Logo}
              size="medium"
              circular
              className="logo-image"
            />
          </Menu.Item>
          <Menu.Item
            className="home"
            icon={<Icon name="home" size="big" style={{ margin: "10 10px" }} />}
            name="home"
            active={activeItem === "home"}
            as={Link} //this will help the route link back to the below
            to="/" //this is the list of all products
            onClick={handleItemClick} //handleItemClick will be rendered
          />
          <Menu.Item
            className="favorites"
            icon={<Icon name="heart outline" size="big" />}
            name="Favorites"
            active={activeItem === "Favorites"} //is the current state of active item = the string favorites?
            as={Link}
            to="/favorites"
            onClick={handleItemClick}
          />
          {/* {!user ? null : ( //if there is no user then show nothing, if there is a user show their profiel
            <Menu.Item
              name="Your profile" //text label
              active={activeItem === "Your profile"} //active prop specifies whether the menu item should be highlighted as the currently active item
              as={Link}
              to="/user-profile"
              onClick={handleItemClick}
            />
          )} */}
          <Menu.Menu position="right">
            <Menu.Item
              icon={<Icon name="user outline" size="big" />}
              className="logInLogOutButton" // used to render a single item in a menu
              name={!isAuthenticated ? "Log In" : "Log Out"} //if they're signed out show log in vs if not shw
              onClick={() =>
                !isAuthenticated
                  ? handleLogin()
                  : logout({ returnTo: window.location.origin })
              }
            />
          </Menu.Menu>
        </Menu>
      </Segment>
      <Outlet />
    </>
  );
}

export default MyNavBar;
