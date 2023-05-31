const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();
const path = require("path");
const db = require("./db/db-connection.js");
const { Configuration, OpenAIApi } = require("openai"); //package importing from openai
const { auth } = require("express-oauth2-jwt-bearer");
//without --save will need to update package.json manually
const { AuthenticationClient } = require("auth0");
const { response } = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

const REACT_BUILD_DIR = path.join(__dirname, "..", "client", "dist");
app.use(express.static(REACT_BUILD_DIR));
app.use(cors());
app.use(express.json());

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
    //need an if stamenet to see if they are already in the db
    //find user by email see if exist if they dont proceed if not skip insert
    const userEmail = await db.query("SELECT * FROM users WHERE email = $1", [
      userProfile.email, //we are selecting all the info frm the users table where the email of the userProfile matches, passing in the user's email
    ]);
    if (userEmail.rows.length === 0) {
      //if the userEmail in the db row has a length of 0, meaning it doesn't exist
      const newUser = {
        //then we want to create a newUser for this email and add it to the db
        first_name: req.body.user.given_name,
        email: req.body.user.email,
      };
      const result = await db.query(
        "INSERT INTO users(first_name, email) VALUES ($1,$2) RETURNING *",
        [newUser.first_name, newUser.email]
      );
      console.log("line 47", result.rows[0]);
      res.json(result.rows[0]);
    }
  } catch (e) {
    console.log(e.message);
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
  try {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      console.log("response.data: ", response.data);
      let result = response.data;
      res.send(result);
    });
  } catch (error) {
    console.log("error from catch server.js", error);
  }
});

//GET ALL FAVS FOR USER ID
//TODO: test data into fav table to match whoever is logged in to see if this works
app.get("/api/user/getFavs/:email", async (req, res) => {
  //  the email is being passed in the request URL as a parameter
  try {
    const { email } = req.params; //key is what you're getting off the object --> obj destructing
    //insert test data into fav table that match user id for whoever is logged in atm force there to be favs
    const { rows: favorites } = await db.query(
      "SELECT product_id FROM favorites WHERE email =$1",
      // "SELECT f.product_id FROM favorites f JOIN users u ON u.user_id = f.id WHERE u.email = $1", //the $1 in the SQL query is a parameter marker that is replaced with the first element in the array, which is the email value of the user.
      //his parameter allows the SQL query to be dynamically generated with the value of the email variable that was passed in the request.
      [email] //array containing one elem which is the value of the email varaible
    );
    res.send(favorites);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: e.message });
  }
});

//add a favorite
app.post("/api/addFavProduct/:productId/:userEmail", async (req, res) => {
  const newFav = { id: req.params.productId }; //getting data from the url params
  const userEmail = { email: req.params.userEmail };
  console.log([newFav.id]);
  const result = await db.query(
    "INSERT INTO favorites (product_id, email) VALUES ($1, $2) returning *",
    [newFav.id, userEmail.email]
  );
  console.log(result.rows[0]);
  res.json(result.rows[0]);
});
//remoove favorite

app.delete("/api/removeFavProduct/:productId", async (req, res) => {
  try {
    const removeFav = { id: req.params.productId };
    const result = await db.query(
      "DELETE FROM favorites WHERE product_id = $1",
      [removeFav.id]
    );
    res.json("Product was deleted, coming from server.js");
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }
});

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Hola, Server listening on ${PORT}`);
});
