import { useContext, useState } from "react";
import AuthContext from "../contexts/AuthContext";

function AddBookForm({ books, setBooks }) {
  // 3. Access the context
  const isLoggedIn = useContext(AuthContext);

  const emptyBook = { title: "", author: "", year: "", pages: "", cover: "" };

  const [newBook, setNewBook] = useState(emptyBook);

  const handleFormInputChange = (event) => {
    const { name, value } = event.target;
    setNewBook((prevNewBook) => ({ ...prevNewBook, [name]: value })); //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setBooks([newBook, ...books]);
    setNewBook(emptyBook);
  };

  // Added "if-return" conditional rendering
  if (!isLoggedIn) {
    return;
  }

  return (
    <div>
      <h2>Add a new Book</h2>
      <form onSubmit={handleFormSubmit} className="NewBook-Form">
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          value={newBook.title}
          onChange={handleFormInputChange}
        />
        <input
          type="text"
          id="author"
          name="author"
          placeholder="Author"
          value={newBook.author}
          onChange={handleFormInputChange}
        />
        <input
          type="number"
          id="year"
          name="year"
          placeholder="Year of Publication"
          value={newBook.year}
          onChange={handleFormInputChange}
        />
        <input
          type="number"
          id="pages"
          name="pages"
          placeholder="Number of Pages"
          value={newBook.pages}
          onChange={handleFormInputChange}
        />
        <input
          type="text"
          id="cover"
          name="cover"
          placeholder="Cover URL"
          value={newBook.cover}
          onChange={handleFormInputChange}
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBookForm;
