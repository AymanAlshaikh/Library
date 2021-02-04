import { useState } from "react";
import { addBook, updateBook } from "../store/action";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

const AddBook = () => {
  const bookSlug = useParams().bookSlug;
  const books = useSelector((state) => state.books);
  const bookz = books.find((book) => book.slug === bookSlug);
  const history = useHistory();
  const dispatch = useDispatch();
  const [book, setBook] = useState(
    bookz
      ? bookz
      : {
          author: "",
          title: "",
          borrowedBy: [],
          genre: [],
          available: true,
        }
  );

  const handleChange = (event) => {
    setBook({ ...book, [event.target.name]: event.target.value });
  };
  const resetForm = () => {
    setBook({
      author: "",
      title: "",
      borrowedBy: [],
      genre: [],
      available: true,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (bookz) dispatch(updateBook(book));
    else dispatch(dispatch(addBook(book)));
    resetForm();
    history.push("/books");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Author</label>
        <input
          type="text"
          className="form-control"
          name="author"
          value={book.author}
          onChange={handleChange}
        />
        <small className="form-text text-muted"> Book Author </small>
      </div>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          className="form-control"
          name="title"
          value={book.title}
          onChange={handleChange}
        />
        <small className="form-text text-muted"> Book Title </small>
      </div>
      <div className="form-group">
        <label>Genre</label>
        <input
          type="text"
          className="form-control"
          name="genre"
          value={book.genre}
          onChange={handleChange}
        />
        <small className="form-text text-muted"> Book Genre </small>
      </div>
      <div className="form-group">
        <label>Available</label>
        <input
          type="text"
          className="form-control"
          name="available"
          value={book.available}
          onChange={handleChange}
        />
        <small className="form-text text-muted"> Book Abailablity </small>
      </div>
      <div className="form-group">
        <label>Borrowed by</label>
        <input
          type="number"
          className="form-control"
          name="borrowedby"
          value={book.borrowedBy}
          onChange={handleChange}
        />
        <small className="form-text text-muted"> Borrowed by </small>
      </div>

      <button type="submit" className="btn btn-primary">
        {bookz ? "UPDATE" : "ADD"}
      </button>
    </form>
  );
};

export default AddBook;
