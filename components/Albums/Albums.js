import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';

import client from '/apolloClient';

import { Card, CardMedia, CardContent, Typography, Modal, Box, Fade, Backdrop } from '@mui/material';
import Grid from '@mui/material/Grid';

const GET_ALBUMS = gql`
  query GetAlbums {
    albums(first: 3) {
      nodes {
        albumTitle
        albumDate
        id
        uri
        albumCover {
          sourceUrl
        }
      }
    }
  }
`;

export default function ImageGallery() {
    const { loading, error, data } = useQuery(GET_ALBUMS, {
        client: client,
    });

    const [open, setOpen] = useState(false);
    const [activeAlbum, setActiveAlbum] = useState(null);

    const handleOpen = (album) => {
        setOpen(true);
        setActiveAlbum(album);
    };

    function handleClose(event, reason) {
        if (reason === 'backdropClick' || reason === 'escapeKeyDown') {
            setOpen(false);
            document.body.style.overflow = '';
        }
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <Box sx={{ mt: 10 }}>
                <Grid container spacing={3}>
                    {data.albums.nodes.map((album) => (
                        <Grid item xs={12} sm={6} md={4} key={album.id}>
                            <Card onClick={() => handleOpen(album)}>
                                {album.albumCover && (
                                    <CardMedia component="img" alt={album.albumTitle} height="140" image={album.albumCover.sourceUrl} />
                                )}
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {album.albumTitle}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    sx: {
                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                        zIndex: (theme) => theme.zIndex.drawer + 1,
                    },
                }}
            >
                <Fade in={open}>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '80%',
                            maxWidth: 600,
                            bgcolor: 'background.paper',
                            boxShadow: 24,
                            p: 4,
                        }}
                    >
                        {activeAlbum && (
                            <>
                                <CardMedia component="img" alt={activeAlbum.albumTitle} image={activeAlbum.albumCover.sourceUrl} />
                                <Typography id="modal-title" variant="h6" component="h2">
                                    {activeAlbum.albumTitle}
                                </Typography>
                            </>
                        )}
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
