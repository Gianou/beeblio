import { useEffect, useState } from "react";

// Note that the Book component was refactored to accept a book object instead of each prop separately
function Book({ bookData }) {
  const [isLiked, setIsLiked] = useState(
    localStorage.getItem(bookData.title)
      ? JSON.parse(localStorage.getItem(bookData.title))
      : false
  );

  useEffect(() => {
    console.log(bookData.title + " like status changed to : " + isLiked);
    localStorage.setItem(bookData.title, JSON.stringify(isLiked));
  }, [isLiked]);

  /* 2. Element variable for the formatted book title */
  let formattedTitle;
  if (isLiked) {
    formattedTitle = <h2 style={{ color: "lightgreen" }}>{bookData.title}</h2>;
  } else {
    formattedTitle = <h2 style={{ color: "white" }}>{bookData.title}</h2>;
  }

  return (
    <div>
      {/* Render the formatted title element variable */}
      {formattedTitle}
      <h4>{bookData.author}</h4>
      <p>Published in : {bookData.year}</p>
      <p>Pages : {bookData.pages}</p>

      <p>
        <button
          onClick={() => {
            setIsLiked((previousIsLiked) => !previousIsLiked);
          }}
        >
          {/* 1. Conditional rendering with inline ternary operator */}
          {isLiked ? "❤️" : "🤍"}
        </button>
      </p>

      <img
        alt={bookData.title}
        src={bookData.cover}
        style={{ maxHeight: "300px" }}
      />
    </div>
  );
}

export default Book;
