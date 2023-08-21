import React, { useRef } from "react";

const InputContainer = ({ inputArr, setInputArr, isValidYouTubeUrl }) => {
    function addInputBox() {
        setInputArr((s) => [...s, { type: "text", value: "" }]);
    }

    const handleTextChange = (e) => {
        const index = e.target.id;
        setInputArr((s) => {
            const newArr = s.slice();
            newArr[index].value = e.target.value;
            return newArr;
        });
    };

    const handleSort = () => {
        const _inputArr = [...inputArr];
        const draggedItemContent = _inputArr.splice(dragItem.current, 1)[0];
        _inputArr.splice(dragOverItem.current, 0, draggedItemContent);
        dragItem.current = null;
        dragOverItem.current = null;
        setInputArr(_inputArr);
    };

    const dragItem = useRef();
    const dragOverItem = useRef();

    return (
        <div className='input-container'>
            {inputArr.map((input, i) => (
                <div
                    key={i}
                    className='input-item'
                    draggable
                    onDragStart={() => (dragItem.current = i)}
                    onDragEnter={() => (dragOverItem.current = i)}
                    onDragEnd={handleSort}
                    onDragOver={(e) => e.preventDefault()}
                >
                    <span style={{ color: "#7958ff", fontSize: "1.5rem" }}>
                        &#9776;
                    </span>
                    <input
                        onChange={handleTextChange}
                        value={input.value}
                        id={i}
                        type={input.type}
                    />
                </div>
            ))}
            <button
                className='btn'
                onClick={() => addInputBox()}
                disabled={
                    inputArr.length > 0 &&
                    !isValidYouTubeUrl(inputArr[inputArr.length - 1]?.value)
                }
            >
                +
            </button>
        </div>
    );
};

export default InputContainer;
