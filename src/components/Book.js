import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeBook, editBook } from '../redux/actions/bookActions';
import { TextField, Button, Box, Card, CardContent, Typography, IconButton } from '@mui/material';
import { Edit, Delete, Save } from '@mui/icons-material';

const Book = ({ book }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(book.title);
    const [author, setAuthor] = useState(book.author);
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeBook(book.id));
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        dispatch(editBook({ ...book, title, author }));
        setIsEditing(false);
    };

    return (
        <Card sx={{ mt: 2, boxShadow: 3, width: '100%' }}>
            <CardContent>
                {isEditing ? (
                    <Box>
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
                        <IconButton onClick={handleSave} color="primary" sx={{ mt: 2 }}>
                            <Save />
                        </IconButton>
                    </Box>
                ) : (
                    <Box>
                        <Typography variant="h6">{book.title}</Typography>
                        <Typography variant="subtitle1">{book.author}</Typography>
                        <IconButton onClick={handleEdit} color="primary">
                            <Edit />
                        </IconButton>
                        <IconButton onClick={handleRemove} color="secondary">
                            <Delete />
                        </IconButton>
                    </Box>
                )}
            </CardContent>
        </Card>
    );
};

export default Book;
