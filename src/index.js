import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const app = ReactDom.createRoot(document.getElementById("app"));
app.render(<App />);

reportWebVitals();
