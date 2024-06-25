// src/components/BookList.js

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import { TextField, Box } from '@mui/material';

const BookList = () => {
    const books = useSelector((state) => state.bookReducer.books);
    const [filter, setFilter] = useState('');

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(filter.toLowerCase()) ||
        book.author.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <Box sx={{ width: '100%' }}>
            <TextField
                label="Search Books"
                variant="outlined"
                margin="normal"
                fullWidth
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            {filteredBooks.map((book) => (
                <Book key={book.id} book={book} />
            ))}
        </Box>
    );
};

export default BookList;
