import BookItem from "./BookItem";
import SearchBar from "./SearchBar";
import AddButton from "./Buttons/AddButton";
import books from "../books";

import { useSelector } from "react-redux";
import { useState } from "react";
const BookList = () => {
  const books = useSelector((state) => state.books);
  const [query, setQuery] = useState("");
  const bookshop = books
    .filter(
      (book) =>
        book.title.toLocaleLowerCase().includes(query) ||
        book.genre[0].toLowerCase().includes(query)
    )
    .map((book) => <BookItem key={book.id} book={book} />);
  return (
    <div>
      {" "}
      <SearchBar setQuery={setQuery} />
      <AddButton />
      {bookshop}
    </div>
  );
};
export default BookList;
