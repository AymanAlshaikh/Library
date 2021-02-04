import { Link } from "react-router-dom";
import UpdateButton from "./Buttons/UpdateButton";
import { updateBook } from "../store/action";
import { useDispatch } from "react-redux";
const BookItem = (props) => {
  console.log(props.book.available);
  const dispatch = useDispatch();
  return (
    <div className="col-sm-12">
      <div class="card" style={{ background: "grey" }}>
        <h5 class="card-header">{props.book.id}</h5>
        <div class="card-body">
          <h5 class="card-title">{props.book.title}</h5>
          <p class="card-text">{props.book.genre}</p>
          <Link to={`/books/${props.book.slug}`} class="btn btn-primary">
            More
          </Link>
        </div>

        <UpdateButton book={props.book} />
      </div>
    </div>
  );
};
export default BookItem;
