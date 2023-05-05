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
  res.json({ message: "Hola, from My template ExpressJS with React-Vite" });
});

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
    console.log(result.rows[0]);
    res.json(result.rows[0]); //setting as response for post request and returnd in json format
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  } //if query failed why?
});

// console.log("user profile:", userProfile);

//   }

// });

// create the get request for users in the endpoint '/api/users'
// app.get("/api/users", async (req, res) => {
//   try {
//     const object = await db.query("SELECT * FROM users");
//     let users = object.rows;
//     res.send(users);

// const { rows: users } = await db.query("SELECT * FROM users"); ^ same thing as above but this is object destructuring
// res.send(users);
//   } catch (e) {
//     return res.status(400).json({ e });
//   }
// });

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

// delete request for students
// app.delete("/api/students/:studentId", async (req, res) => {
//   try {
//     const studentId = req.params.studentId;
//     await db.query("DELETE FROM students WHERE id=$1", [studentId]);
//     console.log("From the delete request-url", studentId);
//     res.status(200).end();
//   } catch (e) {
//     console.log(e);
//     return res.status(400).json({ e });
//   }
// });

// //A put request - Update a student
// app.put("/api/students/:studentId", async (req, res) => {
//   //console.log(req.params);
//   //This will be the id that I want to find in the DB - the student to be updated
//   const studentId = req.params.studentId;
//   const updatedStudent = {
//     id: req.body.id,
//     firstname: req.body.firstname,
//     lastname: req.body.lastname,
//     iscurrent: req.body.is_current,
//   };
//   console.log("In the server from the url - the student id", studentId);
//   console.log(
//     "In the server, from the react - the student to be edited",
//     updatedStudent
//   );
//   // UPDATE students SET lastname = "something" WHERE id="16";
//   const query = `UPDATE students SET firstname=$1, lastname=$2, is_current=$3 WHERE id=${studentId} RETURNING *`;
//   const values = [
//     updatedStudent.firstname,
//     updatedStudent.lastname,
//     updatedStudent.iscurrent,
//   ];
//   try {
//     const updated = await db.query(query, values);
//     console.log(updated.rows[0]);
//     res.send(updated.rows[0]);
//   } catch (e) {
//     console.log(e);
//     return res.status(400).json({ e });
//   }
// });

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Hola, Server listening on ${PORT}`);
});
