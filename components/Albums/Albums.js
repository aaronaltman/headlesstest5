import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';

import client from '/apolloClient';

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid } from '@mui/material';

const GET_ALBUMS = gql`
  query GetAlbums {
    albums(first: 3) {
      nodes {
        albumTitle
        id
        uri
      }
    }
  }
`;

export default function Albums() {
    const { loading, error, data } = useQuery(GET_ALBUMS, {
        client: client,
    });

    const [open, setOpen] = useState(false);
    const [activeAlbumTitle, setActiveAlbumTitle] = useState('');

    const handleClickOpen = (albumTitle) => {
        setOpen(true);
        setActiveAlbumTitle(albumTitle);
    };

    const handleClose = () => {
        setOpen(false);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <Grid container spacing={3}>
            {data.albums.nodes.map(({ albumTitle, id, uri }) => (
                <Grid item xs={12} sm={4} key={id}>
                    <h3>Album Title - {albumTitle}</h3>
                    <Button variant="outlined" color="primary" onClick={() => handleClickOpen(albumTitle)}>
                        View Details
                    </Button>
                    <br />
                    <b>Album ID:</b>
                    <p>{id}</p>
                    <br />
                    <b>Album URI:</b>
                    <p>{uri}</p>
                    <br />
                </Grid>
            ))}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Album Details</DialogTitle>
                <DialogContent>
                    <DialogContentText>Album Title: {activeAlbumTitle}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Grid>
    );
}
