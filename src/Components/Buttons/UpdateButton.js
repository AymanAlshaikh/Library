import { updateBook } from "../../store/action";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import books from "../../books";
const UpdateButton = (props) => {
  const dispatch = useDispatch();
  return (
    <Link to={`/books/${props.book.slug}/update`}>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => {
          dispatch(updateBook(props.available));
        }}
      >
        Update
      </button>
    </Link>
  );
};

export default UpdateButton;
