import React from "react";

const VideoContainer = ({ text, isValidYouTubeUrl }) => {
    function getId(url) {
        const regExp =
            /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#&?/]*).*/;
        const match = url.match(regExp);
        return match && match[2].length === 11 ? match[2] : null;
    }

    const videoId = getId(text);

    if (!isValidYouTubeUrl(text)) return;
    return (
        <iframe
            className='video-container'
            src={`https://www.youtube.com/embed/${videoId}`}
            title='YouTube video player'
        />
    );
};

export default VideoContainer;
