import membersData from "../members";
import booksData from "../books";
import slugify from "react-slugify";
const initialState = {
  books: booksData,
  members: membersData,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      const { newBook } = action.payload;
      newBook.id =
        state.books.length === 0
          ? 0
          : state.books[state.books.length - 1].id + 1;
      newBook.slug = slugify(newBook.title);
      return {
        ...state,
        books: [...state.books, newBook],
      };

    /*case "UPDATE_BOOK":
      return { ...state, books: [...state.books] };*/
    case "UPDATE_BOOK":
      return {
        ...state,
        books: state.books.map((book) => {
          if (book.id === action.payload.available.id)
            return action.payload.available;
          else return book;
        }),
      };

    case "ADD_MEMBER":
      const { newMember } = action.payload;
      newMember.id =
        state.members.length === 0
          ? 0
          : state.members[state.members.length - 1].id + 1;
      newMember.slug = slugify(newMember.firstName);
      return {
        ...state,
        members: [...state.members, newMember],
      };
    default:
      return state;
  }
};
export default reducer;
/////////////////////////////////////

/*export const reducer2 = (state2 = initialState2, action) => {
  switch (action.type) {
    case "ADD_MEMBER":
      const { newMember } = action.payload;
      newMember.id =
        state2.members.length === 0
          ? 0
          : state2.members[state2.members.length - 1].id + 1;
      newMember.slug = slugify(newMember.name);
      return {
        ...state2,
        members: [...state2.members, newMember],
      };

    default:
      return state2;
  }
};*/
