import { useEffect, useState } from "react";

function Book({ title, author, year, pages, cover }) {
  const [isLiked, setIsLiked] = useState(
    localStorage.getItem(title)
      ? JSON.parse(localStorage.getItem(title))
      : false
  );

  useEffect(() => {
    console.log(title + " like status changed to : " + isLiked);
    localStorage.setItem(title, JSON.stringify(isLiked));
  }, [isLiked]);

  /* 2. Element variable for the formatted book title */
  let formattedTitle;
  if (isLiked) {
    formattedTitle = <h2 style={{ color: "lightgreen" }}>{title}</h2>;
  } else {
    formattedTitle = <h2 style={{ color: "white" }}>{title}</h2>;
  }

  return (
    <div>
      {/* Render the formatted title element variable */}
      {formattedTitle}
      <h4>{author}</h4>
      <p>Published in : {year}</p>
      <p>Pages : {pages}</p>

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

      <img alt={title} src={cover} style={{ maxHeight: "300px" }} />
    </div>
  );
}

export default Book;
