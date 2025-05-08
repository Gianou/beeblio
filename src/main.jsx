import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// The App component will be used in the future exercices
import App from "./App.jsx";

const appName = "Beeblio";
const date = new Date();

const greetsAccodringToPeriodOfDay = () => {
  let periodOfDay = date.getHours() < 12 ? "morning" : "afternoon";
  return <p>Good {periodOfDay}!</p>;
};

createRoot(document.getElementById("root")).render(
  <div>
    <h1>Welcome to {appName}!</h1>
    <p>
      The date is currently : {date.toLocaleDateString()}{" "}
      {date.toLocaleTimeString()}
    </p>
    {greetsAccodringToPeriodOfDay()}
    <p>
      <a
        href="https://en.wikipedia.org/wiki/Bee"
        target="_blank"
        rel="noreferrer"
        className="App-link"
      >
        Learn about bees
      </a>
    </p>
    <p>
      <a
        href="https://en.wikipedia.org/wiki/Library"
        target="_blank"
        rel="noreferrer"
        className="App-link"
      >
        Learn about libraries
      </a>
    </p>
  </div>
);
