import "./App.css";

function App() {
  const appName = "Beeblio";
  const date = new Date();

  const greetsAccodringToPeriodOfDay = () => {
    let periodOfDay = date.getHours() < 12 ? "morning" : "afternoon";
    return <p>Good {periodOfDay}!</p>;
  };

  return (
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
}

export default App;
