import { useState } from "react";
import DisplayContainer from "./components/DisplayContainer";
import Header from "./components/Header";
import InputContainer from "./components/InputContainer";

function isValidYouTubeUrl(url) {
    if (!url) return false;
    const regExp =
        /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#&?/]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11;
}

function App() {
    const [inputArr, setInputArr] = useState([]);
    return (
        <div className='App'>
            <Header />
            <div className='container'>
                <InputContainer inputArr={inputArr} setInputArr={setInputArr} isValidYouTubeUrl={isValidYouTubeUrl}/>
                <DisplayContainer inputArr={inputArr} isValidYouTubeUrl={isValidYouTubeUrl}/>
            </div>
        </div>
    );
}

export default App;
