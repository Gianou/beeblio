import "./App.css";
import Book from "./components/Book";

function App() {
  const appName = "Beeblio";

  const thirdBookData = {
    title: "The Adventures of Huckleberry Finn",
    author: "Mark Twain",
    year: 1884,
    pages: 327,
    cover: "http://fast.hevs.ch/temp/covers/3.jpeg",
  };

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

      <Book
        title="Alice's Adventures in Wonderland"
        author="Lewis Carroll"
        year={1865}
        pages={192}
        cover="http://fast.hevs.ch/temp/covers/2.jpeg"
      />
      {/* 
        Alternative and more concise syntax:
          If the props are grouped in an object, 
          and the object keys match the name of the props defined in the component, 
          you can pass the object using the spread operator syntax, 
          like below
          https://react.dev/learn/passing-props-to-a-component
          https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
       */}
      <Book {...thirdBookData} />
    </div>
  );
}

export default App;
