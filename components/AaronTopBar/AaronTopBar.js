import React from 'react';
import { AppBar, Toolbar, Button, Box, Container } from '@mui/material';

const TopBar = () => {
    return (
        <Box sx={{ position: 'fixed', top: -80, width: '100%', zIndex: 999 }}>
            <AppBar position="static" sx={{ backgroundColor: '#4caf50' }}>
                <Container maxWidth="lg">
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexGrow: 1,
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
                                marginLeft: '1rem',
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
