import React from "react";
import VideoContainer from "./VideoContainer";

const DisplayContainer = ({ inputArr }) => {
    if (inputArr.length === 0) return;
    return (
        <div className='display-container'>
            {inputArr.map((input, i) => (
                <VideoContainer key={i} text={input.value} />
            ))}
        </div>
    );
};

export default DisplayContainer;
