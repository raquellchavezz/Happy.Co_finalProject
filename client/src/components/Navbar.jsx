import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Menu, Segment } from "semantic-ui-react";
import Logo from "../assets/BlueTechtonicaWord.png";
import { useState, useEffect } from "react";
import { Image } from "semantic-ui-react";

function MyNavBar(props) {
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading } =
    useAuth0();
  console.log("From Navbar", user, "From Navbar", isAuthenticated);
  const [activeItem, setActiveItem] = useState("home"); //this will help determine what item we are in the in the nav bar so we can go to the correct page
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
        console.log(data);
      });
  };
  const handleItemClick = (e, { name }) => {
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
    //Pass the user data to the target page using URL parameters
  };
  useEffect(() => {
    if (isAuthenticated) {
      // should be re-run whenever the isAuthenticated or user values change
      sendUser(user); //if the user is auth then we will send user data to backend
    }
  }, [isAuthenticated, user]);

  return (
    <>
      <Segment inverted>
        {/*component that creates a segment, which is a flexible and reusable content container used for grouping and displaying content*/}
        {/*segment creates a container for the menu component */}
        <Menu inverted secondary>
          {" "}
          {/*menu creates a horizontal menu*/}
          {/*inverted inverts the color scheme so that the text/other elms are white and the backgorund is dark */}
          <Menu.Item header>
            <Image //can use img from semantic and size it there
              src={Logo}
              size="small"
            />
          </Menu.Item>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            as={Link} //this will help the route link back to the below
            to="/" //this is the list of all products
            onClick={handleItemClick} //handleItemClick will be rendered
          />
          <Menu.Item
            name="Favorites"
            active={activeItem === "favorites"} //is the current state of active item = the string favorites?
            as={Link}
            to="/favorites"
            onClick={handleItemClick}
          />
          {!user ? null : ( //if there is no user then show nothing, if there is a user show their profiel
            <Menu.Item
              name="Your profile" //text label
              active={activeItem === "user-profile"} //active prop specifies whether the menu item should be highlighted as the currently active item
              as={Link}
              to="/user-profile"
            />
          )}
          <Menu.Menu position="right">
            <Menu.Item // used to render a single item in a menu
              name={!isAuthenticated ? "Log In" : "Log Out"} //if they're signed out show log in vs if not shw
              onClick={() => (!isAuthenticated ? handleLogin() : logout())}
            />
          </Menu.Menu>
        </Menu>
      </Segment>
      <Outlet />
    </>
  );
}

export default MyNavBar;

// import { useEffect } from "react";
// import Container from "react-bootstrap/Container";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import Logo from "../assets/BlueTechtonicaWord.png";
// import { Link, Outlet } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";

// function MyNavBar(props) {
//   const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

//   console.log("From Navbar", user, "From Navbar", isAuthenticated);

//   const handleLogin = async () => {
//     await loginWithRedirect({
//       appState: {
//         returnTo: "/user-profile",
//       },
//     });
//   };

//   return (
//     <>
//       <Navbar data-testid="navbar" bg="dark" variant="dark" sticky="top">
//         <Container>
//           <Navbar.Brand href="/">
//             <img
//               src={Logo}
//               height="30"
//               className="d-lg-inline-block"
//               alt="React Bootstrap logo"
//             />
//           </Navbar.Brand>
//           {!user ? null : (
//             <Nav.Link to="/user-profile" as={Link}>
//               {" "}
//               {/*if there is no user dont do anything, if there is convert navlink --> to a router link*/}
//               {user.name}
//             </Nav.Link>
//           )}
//           <Navbar.Toggle />
//           <Navbar.Collapse className="justify-content-end">
//             <Navbar.Text>
//               {!isAuthenticated ? ( //
//                 <button onClick={() => handleLogin()}>Log In</button>
//               ) : (
//                 <button
//                   onClick={() =>
//                     logout({
//                       logoutParams: { returnTo: window.location.origin },
//                     })
//                   }
//                 >
//                   Log Out
//                 </button>
//               )}
//             </Navbar.Text>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//       <Outlet />
//     </>
//   );
// }

// export default MyNavBar;
