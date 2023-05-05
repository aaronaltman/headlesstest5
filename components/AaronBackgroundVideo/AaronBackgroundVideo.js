import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
const BackgroundVideo = ({ videoId }) => {
    const playerRef = useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.youtube.com/iframe_api';
        document.body.appendChild(script);

        const onYouTubeIframeAPIReady = () => {
            if (!playerRef.current) return;

            new window.YT.Player(playerRef.current, {
                videoId: videoId,
                width: '100%',
                height: '100%',
                playerVars: {
                    autoplay: 1,
                    controls: 0,
                    disablekb: 1,
                    fs: 0,
                    iv_load_policy: 3,
                    modestbranding: 1,
                    playsinline: 1,
                    rel: 0,
                    showinfo: 0,
                    loop: 1,
                },
            });
        };

        if (window.YT) {
            onYouTubeIframeAPIReady();
        } else {
            window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
        }

        return () => {
            document.body.removeChild(script);
        };
    }, [videoId]);

    return (
        <Box
            sx={{
                position: 'relative',
                overflow: 'hidden',
                width: '100%',
                height: '100vh',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                },
            }}
        >
            <div
                ref={playerRef}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '100%',
                    height: '100%',
                    transform: 'translate(-50%, -50%)',
                }}
            />
        </Box>
    );
};

export default BackgroundVideo;
