export const ADD_BOOK = 'ADD_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const EDIT_BOOK = 'EDIT_BOOK';

export const addBook = (book) => ({
    type: ADD_BOOK,
    payload: book,
});

export const removeBook = (id) => ({
    type: REMOVE_BOOK,
    payload: id,
});

export const editBook = (book) => ({
    type: EDIT_BOOK,
    payload: book,
});
