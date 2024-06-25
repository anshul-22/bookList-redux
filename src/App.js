import React from 'react';
import Header from './components/Header';
import AddBook from './components/AddBook';
import BookList from './components/BookList';
import { Container, Box } from '@mui/material';

const App = () => {
    return (
        <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh' }}>
            <Header />
            <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <AddBook />
                <BookList />
            </Container>
        </Box>
    );
};

export default App;
