import "./App.css";
import Book from "./components/Book";

function App() {
  const appName = "Beeblio";

  return (
    <div>
      <h1>Welcome to {appName}!</h1>
      <Book
        title="Don Quixote"
        author="Miguel de Cervantes"
        year={1605}
        pages={1032}
        cover="http://fast.hevs.ch/temp/covers/1.png"
      />
    </div>
  );
}

export default App;
