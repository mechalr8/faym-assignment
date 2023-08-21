import React, { useRef } from "react";

const InputContainer = ({ inputArr, setInputArr }) => {
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
        console.log(inputArr);
        const draggedItemContent = _inputArr.splice(dragItem.current, 1)[0];
        console.log("draggedItemContent ", draggedItemContent);
        _inputArr.splice(dragOverItem.current, 0, draggedItemContent);
        console.log(_inputArr)
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
                    className='input-item'
                    draggable
                    onDragStart={() => (dragItem.current = i)}
                    onDragEnter={() => (dragOverItem.current = i)}
                    onDragEnd={handleSort}
                    onDragOver={(e) => e.preventDefault()}
                >
                    <span style={{ color: "#7958ff", fontSize: "1.5rem" }}>
                        &#x25B6;
                    </span>
                    <input
                        key={i}
                        onChange={handleTextChange}
                        value={input.value}
                        id={i}
                        type={input.type}
                    />
                </div>
            ))}
            <button className='btn' onClick={addInputBox}>
                +
            </button>
        </div>
    );
};

export default InputContainer;
