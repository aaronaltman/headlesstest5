// TopBar.js
import React from 'react';
import { AppBar, Toolbar, Button, Box, Container } from '@mui/material';

const TopBar = () => {
    return (
        <Box sx={{ position: 'fixed', width: '100%', zIndex: 999 }}>
            <AppBar position="sticky" sx={{ backgroundColor: '#23a25a', height: '4rem', textAlign:'center', }}>
                <Container maxWidth="xs">
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minHeight: '3rem', // Update the toolbar height
                        }}
                    >
                        <div
                            style={{
                                color: '#fff',
                                fontWeight: 'bold',
                                marginRight: '1rem', // Adjust the spacing between the text and button
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
