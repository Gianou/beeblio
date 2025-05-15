import { useEffect, useState } from "react";

function Book({ title, author, year, pages, cover }) {
  /* 3. Update isLiked state initialization */
  const [isLiked, setIsLiked] = useState(
    localStorage.getItem(title)
      ? JSON.parse(localStorage.getItem(title))
      : false
  );

  useEffect(() => {
    /* 1. Add a useEffect to the Book component that logs the status changes of the isLiked state */
    console.log(title + " like status changed to : " + isLiked);

    /* 2. With a useEffect, save the isLiked value in the LocalStorage everytime it changes */
    localStorage.setItem(title, JSON.stringify(isLiked));
  }, [isLiked]);

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
