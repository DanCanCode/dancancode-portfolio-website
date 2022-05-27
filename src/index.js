import ReactDom from "react-dom";
import App from "./components/App";

const app = ReactDom.createRoot(document.getElementById("app"));
app.render(<App />);
