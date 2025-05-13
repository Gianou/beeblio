import { useState } from "react";

function Book({ title, author, year, pages, cover }) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div>
      <h2>{title}</h2>
      <h4>{author}</h4>
      <p>Published in : {year}</p>
      <p>Pages : {pages}</p>

      <p>
        <button
          onClick={() => {
            setIsLiked((previousIsLiked) => !previousIsLiked);
          }}
        >
          Like: {isLiked.toString()}
        </button>
      </p>

      <img alt={title} src={cover} style={{ maxHeight: "300px" }} />
    </div>
  );
}

export default Book;
