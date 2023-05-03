import React from 'react';
import { AppBar, Toolbar, Button, Box, Container } from '@mui/material';

const TopBar = () => {
    return (
        <Box sx={{ position: 'fixed', top: 0, width: '100%', zIndex: 999 }}>
            <AppBar position="static" sx={{ backgroundColor: '#4caf50' }}>
                <Container maxWidth="lg">
                    <Toolbar
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
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
                                color: '#fff',
                                borderColor: '#000',
                                borderRadius: 0,
                                marginLeft: 'auto',
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
