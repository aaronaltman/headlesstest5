// TopBar.js
import React from 'react';
import { AppBar, Toolbar, Button, Box, Container } from '@mui/material';

const TopBar = () => {
    return (
        <Box sx={{ position: 'fixed', width: '100%', zIndex: 999 }}>
            <AppBar position="sticky" sx={{ backgroundColor: '#23a25a' }}>
                <Container maxWidth="lg">
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center', // Center the content horizontally
                            flexGrow: 1,
                            width: '100%', // Add this line
                        }}
                    >
                        <div
                            style={{
                                color: '#fff',
                                fontWeight: 'bold',
                                marginRight: 'auto',
                            }}
                        >
                            One Line of Text
                        </div>
                        <Button
                            variant="outlined"
                            sx={{
                                color: '#000',
                                borderColor: '#000',
                                borderRadius: 0,
                                marginLeft: 'auto',
                                backgroundColor: '#fff', // Change the button background color
                            }}
                        >
                            Button
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
};

export default TopBar;
