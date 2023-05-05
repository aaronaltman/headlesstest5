import React from 'react';
import { Container, Grid, Typography,List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/system';
import Image from 'next/image';

const Footer = styled('footer')(({ theme }) => ({
    backgroundColor: '#e5eaf5', // Changed the background color to #e5eaf5
    padding: theme.spacing(5, 3), // Top and bottom padding set to 40px
    color: 'black', // Changed the text color to black
}));

export default function AaronFooter() {
    return (
        <Footer>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <Image
                            src="https://bpheadlesst962.wpengine.com/wp-content/uploads/2023/05/fixdapp-logo.webp" // Replace with the path to your logo
                            alt="Logo"
                            width={300}
                            height={96}
                        />
                    </Grid>
                    <Grid item xs={6} sm={4} md={2}>
                        <Typography variant="h6">ABOUT</Typography>
                        <List>
                            <ListItem>
                                <ListItemText primary="About FIXD" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Careers" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Press" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Reviews" />
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={6} sm={4} md={2}>
                        <Typography variant="h6">CONTACT US</Typography>
                        <List>
                            <ListItem>
                                <ListItemText primary="(925) 854-1766" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="support@fixdapp.com" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="999 Peachtree St NE Suite 840, Atlanta, GA 30309" />
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={6} sm={4} md={2}>
                        <Typography variant="h6">HELP</Typography>
                        <List>
                            <ListItem>
                                <ListItemText primary="Help Center" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Contact Support" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="FIXD app and sensor FAQ" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Returns and warranty" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Manage subscription" />
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={6} sm={4} md={2}>
                        <Typography variant="h6">LEGAL</Typography>
                        <List>
                            <ListItem>
                                <ListItemText primary="Terms of Use" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Privacy Policy" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Advertising Disclosure" />
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Container>
        </Footer>
    );
}
