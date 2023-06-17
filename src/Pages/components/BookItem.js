export const BookItem = ({ book, handleMoveTo }) => {
  return (
    <div>
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Category: {book.category}</p>
      <select value={book.category} onChange={(event) => handleMoveTo(book.id, event)}>
        <option value="Currently Reading">Currently Reading</option>
        <option value="Want to Read">Want to Read</option>
        <option value="Read">Read</option>
      </select>
    </div>
  );
};
