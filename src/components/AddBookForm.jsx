import { useState } from "react";

function AddBookForm({ books, setBooks }) {
  // Empty book template for resetting the form
  const emptyBook = { title: "", author: "", year: "", pages: "", cover: "" };

  // State for the new book -> stores the data about the new book we are preparing in the form
  const [newBook, setNewBook] = useState(emptyBook);

  const handleFormInputChange = (event) => {
    // The syntax below is called object destructuring, it achieves the same as the commented code
    // const name = event.target.name;
    // const value = event.target.value;
    const { name, value } = event.target;
    console.log(event.target);

    setNewBook((prevNewBook) => ({ ...prevNewBook, [name]: value })); //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
  };

  // Form submit handler
  const handleFormSubmit = (event) => {
    event.preventDefault();
    //console.log(newBook);
    setBooks([newBook, ...books]);
    setNewBook(emptyBook); // Reset the form
  };

  return (
    <div>
      <h2>Add a new Book</h2>
      {/* The css is defined in App.css */}
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
