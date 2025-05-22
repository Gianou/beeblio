import { useState } from "react";
import "./App.css";
import Book from "./components/Book";
import AddBookForm from "./components/AddBookForm";

function App() {
  const appName = "Beeblio";
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Don Quixote",
      author: "Miguel de Cervantes",
      year: 1605,
      pages: 1032,
      cover: "http://fast.hevs.ch/temp/covers/1.png",
    },
    {
      id: 2,
      title: "Alice's Adventures in Wonderland",
      author: "Lewis Carroll",
      year: 1865,
      pages: 192,
      cover: "http://fast.hevs.ch/temp/covers/2.jpeg",
    },
    {
      id: 3,
      title: "The Adventures of Huckleberry Finn",
      author: "Mark Twain",
      year: 1884,
      pages: 327,
      cover: "http://fast.hevs.ch/temp/covers/3.jpeg",
    },
  ]);

  return (
    <div>
      <h1>Welcome to {appName}!</h1>

      <AddBookForm books={books} setBooks={setBooks} />

      {books.map((book) => (
        <Book bookData={book} key={book.id} />
      ))}
    </div>
  );
}

export default App;
