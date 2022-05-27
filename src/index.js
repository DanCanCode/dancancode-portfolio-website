import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";

const app = ReactDom.createRoot(document.getElementById("app"));
app.render(<App />);
