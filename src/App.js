import { useState } from "react";
import DisplayContainer from "./components/DisplayContainer";
import Header from "./components/Header";
import InputContainer from "./components/InputContainer";

function App() {
    const [inputArr, setInputArr] = useState([]);
    return (
        <div className='App'>
            <Header />
            <div className='container'>
                <InputContainer inputArr={inputArr} setInputArr={setInputArr} />
                <DisplayContainer inputArr={inputArr} />
            </div>
        </div>
    );
}

export default App;
