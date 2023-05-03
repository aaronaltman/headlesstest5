import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';

const TopBar = () => {
    return (
        <Box sx={{ position: 'fixed', top: 0, width: '100%', zIndex: 999 }}>
            <AppBar position="sticky" sx={{ backgroundColor: '#4caf50' }}>
                <Toolbar>
                    <div style={{ color: '#fff', fontWeight: 'bold' }}>
                        One Line of Text
                    </div>
                    <div style={{ marginLeft: 'auto' }}>
                        <Button
                            variant="outlined"
                            sx={{ color: '#fff', borderColor: '#000', borderRadius: 0 }}
                        >
                            Button
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
            <Box
                sx={{
                    backgroundColor: '#4caf50',
                    color: '#fff',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 16px',
                }}
            >
                <div style={{ fontWeight: 'bold' }}>One Line of Text</div>
                <Button
                    variant="outlined"
                    sx={{
                        color: '#fff',
                        borderColor: '#000',
                        borderRadius: 0,
                        padding: '6px 12px',
                    }}
                >
                    Button
                </Button>
            </Box>
        </Box>
    );
};

export default TopBar;
