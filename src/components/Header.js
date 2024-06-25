import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';

const Header = () => {
    return (
        <AppBar position="static" sx={{ mb: 4 }}>
            <Toolbar>
                <BookIcon sx={{ mr: 2 }} />
                <Typography variant="h6" component="div">
                    Book Tracker
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
