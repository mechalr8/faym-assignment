import React from "react";

const VideoContainer = ({ text }) => {
    function getId(url) {
        const id = url.split("&")[0].split("=")[1];
        // const regExp =
        //     /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        // const match = url.match(regExp);
        // return match && match[2].length === 11 ? match[2] : null;
        return id;
    }

    const videoId = getId(text);

    if (!text) return;
    return (
        <iframe
            className='video-container'
            src={`https://www.youtube.com/embed/${videoId}`}
            title='YouTube video player'
        />
    );
};

export default VideoContainer;
