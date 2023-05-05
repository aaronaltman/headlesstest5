import React from 'react';
import { Box, Typography } from '@mui/material';
const VideoEmbed = ({ url, title }) => {
    const embedUrl = (url) => {
        let embedUrl;
        if (url.includes('youtube.com') || url.includes('youtu.be')) {
            const videoId = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/)[2].split(/[^0-9a-z_-]/i)[0];
            embedUrl = `https://www.youtube.com/embed/${videoId}`;
        } else if (url.includes('vimeo.com')) {
            const videoId = url.split('/')[3];
            embedUrl = `https://player.vimeo.com/video/${videoId}`;
        }
        return embedUrl;
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <iframe
                title={title}
                src={embedUrl(url)}
                width="560"
                height="315"
                allowFullScreen
                style={{
                    maxWidth: '100%',
                    borderRadius: '4px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                }}
            />
            {title && (
                <Typography variant="h6" component="div" sx={{ mt: 2 }}>
                    {title}
                </Typography>
            )}
        </Box>
    );
};

export default VideoEmbed;
