import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
const DOMAIN = import.meta.env.VITE_AUTH0_DOMAIN;
const CLIENTID = import.meta.env.VITE_AUTH0_CLIENT_ID;
const IDENTIFIER = import.meta.env.VITE_INDETIFIER;
ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain={DOMAIN}
    clientId={CLIENTID}
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: IDENTIFIER,
      scope: "openid profile email", //lets you read id, profile and email
    }}
  >
    <App />
  </Auth0Provider>
);
