import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Menu, Segment } from "semantic-ui-react";
import Logo from "../assets/BlueTechtonicaWord.png";
import { useState } from "react";
import { Image } from "semantic-ui-react";
function MyNavBar(props) {
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading } =
    useAuth0();
  console.log("From Navbar", user, "From Navbar", isAuthenticated);
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };
  const sendUser = (user) => {
    //passes state variable to body
    fetch("/api/user", {
      //{user:user}, changed this for proxy
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ user }), //stringifying the user obj, key be name of varaible and
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };
  const handleLogin = async () => {
    try {
      await loginWithRedirect({
        onRedirectCallback: async (appState) => {
          // Get user data from Auth0
          const user = await getUser();

          // Store user data in your database
          try {
            const newUser = {
              first_name: user.given_name,
              email: user.email,
            };
            const result = await db.query(
              "INSERT INTO users(first_name, email) VALUES ($1,$2) RETURNING *",
              [newUser.first_name, newUser.email]
            );
            console.log("New user added:", result.rows[0]);
          } catch (error) {
            console.error("Error adding user to database:", error);
          }

          // Redirect to the app state's target URL
          window.location.replace(
            appState && appState.targetUrl
              ? appState.targetUrl
              : window.location.pathname
          );
        },
      });
    } catch (error) {
      console.error(error);
    }
  };
  // const handleLogin = async () => {
  //   await loginWithRedirect({
  //     //test this see if this is execute
  //     onRedirect: async (url) => {
  //       const user = await getUser();
  //       //when redirect after loggin in, invoke the callbakc func
  //       await sendUser(user); //await makes sure its done
  //       console.log("onRedirect:", user);
  //       window.location.replace(url);
  //     },
  //     // appState: {
  //     //   returnTo: "/", //went to user profile before
  //     // },
  //   });
  // };

  return (
    <>
      <Segment inverted>
        <Menu inverted secondary>
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
            onClick={handleItemClick}
          />

          <Menu.Item
            name="Favorites"
            active={activeItem === "favorites"}
            as={Link}
            to="/Favorites"
            onClick={handleItemClick}
          />

          {!user ? null : ( //if there is no user then show nothing, if there is a user show their profiel
            <Menu.Item
              name="Your profile"
              active={activeItem === "user-profile"}
              as={Link}
              to="/user-profile"
            />
          )}
          <Menu.Menu position="right">
            <Menu.Item
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
