import { useEffect, useState, useContext } from "react";
import AuthContext from "../contexts/AuthContext";

function Book({ bookData }) {
  // 3. Access the context
  const isLoggedIn = useContext(AuthContext);

  const [isLiked, setIsLiked] = useState(
    localStorage.getItem(bookData.title)
      ? JSON.parse(localStorage.getItem(bookData.title))
      : false
  );

  useEffect(() => {
    console.log(bookData.title + " like status changed to : " + isLiked);
    localStorage.setItem(bookData.title, JSON.stringify(isLiked));
  }, [isLiked]);

  // Added condition for element conditional rendering
  let formattedTitle;
  if (isLiked && isLoggedIn) {
    formattedTitle = <h2 style={{ color: "lightgreen" }}>{bookData.title}</h2>;
  } else {
    formattedTitle = <h2 style={{ color: "white" }}>{bookData.title}</h2>;
  }

  return (
    <div>
      {formattedTitle}
      <h4>{bookData.author}</h4>
      <p>Published in : {bookData.year}</p>
      <p>Pages : {bookData.pages}</p>

      {/* Added && operator conditional rendering */}
      {isLoggedIn && (
        <p>
          <button
            onClick={() => {
              setIsLiked((previousIsLiked) => !previousIsLiked);
            }}
          >
            {isLiked ? "❤️" : "🤍"}
          </button>
        </p>
      )}

      <img
        alt={bookData.title}
        src={bookData.cover}
        style={{ maxHeight: "300px" }}
      />
    </div>
  );
}

export default Book;
