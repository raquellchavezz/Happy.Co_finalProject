import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
//accessed thru outlet
const Profile = () => {
  const { user } = useAuth0();

  const sendUser = (user) => {
    //passes state variable to body
    fetch("/api/user", {
      //{user:user}, changed this for proxy
      method: "POST",
      body: JSON.stringify({ user }), //stringifying the user obj, key be name of varaible and
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };
  if (!user) {
    //if user hasnt been loaded by auth0 yet
    return "loading"; //
  }
  return (
    <div>
      <img src={user.picture} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{JSON.stringify(user)}</p>
      <button
        onClick={() => {
          sendUser(user); //forcing server to connect to api user
        }}
      >
        test
      </button>
    </div>
  );
};

export default Profile;
