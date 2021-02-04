import books from "../books";
import members from "../members";
import { useParams, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import UpdateButton from "./Buttons/UpdateButton";
const BooksDetail = () => {
  const books = useSelector((state) => state.books);
  const { bookSlug } = useParams();
  const book = books.find((book) => book.slug === bookSlug);

  let member = members.find((member) => member.id === 5);

  console.log(book.borrowedby);
  if (!book) return <Redirect to="/books" />;
  return (
    <div class="card" style={{ width: "18rem;" }}>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Author: {book.author}</li>
        <li class="list-group-item">Title: {book.title}</li>
        <li class="list-group-item">Genre: {book.genre}</li>
        <li class="list-group-item">
          {book.available ? "Available" : "Not Available"}
        </li>
        <li class="list-group-item">
          Last borrowed By: {member.firstName} {member.lastName}
        </li>
        <UpdateButton book={book} />
      </ul>
    </div>
  );
};
export default BooksDetail;
