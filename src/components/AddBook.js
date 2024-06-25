import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/actions/bookActions';
import { TextField, Button, Box } from '@mui/material';

const AddBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = {
            id: Date.now(),
            title,
            author,
        };
        dispatch(addBook(newBook));
        setTitle('');
        setAuthor('');
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4, width: '100%' }}>
            <TextField
                label="Book Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                variant="outlined"
                margin="normal"
                required
                fullWidth
            />
            <TextField
                label="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                variant="outlined"
                margin="normal"
                required
                fullWidth
            />
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2, width: '100%' }}>
                Add Book
            </Button>
        </Box>
    );
};

export default AddBook;
