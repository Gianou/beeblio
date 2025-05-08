function Book({ title, author, year, pages, cover }) {
  return (
    <div>
      <h2>{title}</h2>
      <h4>{author}</h4>
      <p>Published in : {year}</p>
      <p>Pages : {pages}</p>
      <img alt={title} src={cover} style={{ maxHeight: "300px" }} />
    </div>
  );
}

export default Book;
