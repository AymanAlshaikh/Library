const DELETE_BOOK = "DELETE_BOOK";
const ADD_BOOK = "ADD_BOOK";
const UPDATE_BOOK = "UPDATE_BOOK";

const DELETE_MEMBER = "DELETE_MEMBER";
const ADD_MEMBER = "ADD_MEMBER";
const UPDATE_MEMBER = "UPDATE_MEMBER";

export const addMember = (newMember) => ({
  type: ADD_MEMBER,
  payload: { newMember },
});

export const addBook = (newBook) => ({
  type: ADD_BOOK,
  payload: { newBook },
});

export const updateBook = (available) => ({
  type: UPDATE_BOOK,
  payload: { available: available },
});

export const deleteBook = (bookId) => {
  return { type: DELETE_BOOK, payload: { bookId } };
};
