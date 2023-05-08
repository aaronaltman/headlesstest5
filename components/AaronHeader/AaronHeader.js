import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Container, Link, Menu, MenuItem, ListItemIcon } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { NavigationMenu, SkipNavigationLink } from '../';

export default function AaronHeader({ className, menuItems }) {
    const [isNavShown, setIsNavShown] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuClick = (event) => {
        setIsNavShown(!isNavShown);
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setIsNavShown(false);
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Container maxWidth="lg">
                    <Toolbar>
                        <SkipNavigationLink />
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={handleMenuClick}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Link href="/" underline="none" color="inherit">
                                <a>
                                    <Image
                                        src="https://bpheadlesst962.wpengine.com/wp-content/uploads/2023/05/fixdapp-logo.webp"
                                        alt="Blueprint media logo"
                                        width={150}
                                        height={48}
                                        layout="intrinsic"
                                    />
                                </a>
                            </Link>
                        </Typography>
                        <NavigationMenu
                            id="primary-navigation"
                            className={className}
                            menuItems={menuItems}
                            open={isNavShown}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>
                                <ListItemIcon>
                                    <SearchIcon />
                                </ListItemIcon>
                                <Link href="/search" underline="none" color="inherit">
                                    Search
                                </Link>
                            </MenuItem>
                        </NavigationMenu>
                    </Toolbar>
                </Container>
            </AppBar>
            <Menu
                id="primary-navigation"
                anchorEl={anchorEl}
                open={isNavShown}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'primary-navigation',
                }}
            >
                {menuItems.map((item, index) => (
                    <MenuItem key={index} onClick={handleClose}>
                        <Link href={item.href} underline="none" color="inherit">
                            {item.title}
                        </Link>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
}
