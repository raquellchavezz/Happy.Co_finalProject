const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");
const db = require("./db/db-connection.js");
const { Configuration, OpenAIApi } = require("openai"); //package importing from openai
const { auth } = require("express-oauth2-jwt-bearer");
//without --save will need to update package.json manually
const { AuthenticationClient } = require("auth0");
const app = express();
const PORT = process.env.PORT || 8080;

const REACT_BUILD_DIR = path.join(__dirname, "..", "client", "dist");
app.use(express.static(REACT_BUILD_DIR));
app.use(cors());
app.use(express.json());

//try later:
// const jwtCheck = auth({
//   audience: "https://raquelproject/api",
//   issuerBaseURL: "https://dev-78xt8e8z32ol28ys.us.auth0.com/",
//   tokenSigningAlg: "RS256",
// });
const auth0 = new AuthenticationClient({
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENT_ID,
});
// creates an endpoint for the route "/""
app.get("/", async (req, res) => {
  // const userProfile = await auth0.getProfile(req.auth.payload);
  // console.log("user profile:", userProfile);
  res.sendFile(path.join(REACT_BUILD_DIR, "index.html"));
});

//creating endpoiny for a new user to be inserted into the database table called user
app.post("/api/user", async (req, res) => {
  try {
    const userProfile = req.body.user;
    const newUser = {
      first_name: req.body.user.given_name,
      email: req.body.user.email,
    };
    const result = await db.query(
      "INSERT INTO users(first_name, email) VALUES ($1,$2) RETURNING *",
      [newUser.first_name, newUser.email]
    );
    console.log("line 47", result.rows[0]);
    res.json(result.rows[0]); //setting as response for post request and returnd in json format
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  } //if query failed why?
});

// create the get request for users in the endpoint '/api/users'

app.get("/api/users", async (req, res) => {
  try {
    const object = await db.query("SELECT * FROM users");
    let users = object.rows;
    res.send(users);

    // const { rows: users } = await db.query("SELECT * FROM users"); ^ same thing as above but this is object destructuring
    // res.send(users);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

// create the get request to get all the products from the api
app.get("/api/products", async (req, res) => {
  // const userProfile = await auth0.getProfile(req.auth.token);
  // console.log("user profile:", userProfile);
  //jwtCheck only ppl logged in/auth can see this endpoint
  //use the first obj jwtCheck as a middleware
  fetch("https://fakestoreapi.com/products") //making the request to the API
    .then((response) => response.json()) //response converted to obj
    .then((result) => {
      // console.log("Success:", result);
      res.send(result); //result variable needs to be inside scope bc variable won't exist outside of scope
    }); //result variable needs to be inside scope bc variable won't exist outside of scope
});

//GET ALL FAVS FOR USER ID
//TODO: test data into fav table to match whoever is logged in to see if this works 
app.get("api/user/getFavs/:email", async (req, res) => {
  try {
    const { email } = req.params; //key is what you're getting off the object --> obj destructing
    //insert test data into fav table that match user id for whoever is logged in atm force there to be favs 
    const { rows: favorites } = await db.query(
      "SELECT f.product_id FROM favorites f JOIN users u ON u.user_id = f.user_id WHERE email = $1",
      [email]
    );
    res.send(favorites);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ e });
  }
});

app.post("/api/favorites", async (req, res) => {
  const newFav = { id: req.body.id };
  console.log([newFav.id]);
  const result = await db.query(
    "INSERT INTO favorites(product_id) VALUES returning *",
    [newFav.id]
  );
  console.log(result.rows[0]);
  res.json(result.rows[0]);
});

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Hola, Server listening on ${PORT}`);
});
