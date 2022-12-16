import React, { useImperativeHandle, forwardRef, useRef, useState } from "react";

const Child = (props, ref) => {

    const inputRef = useRef();

    const [count, setCount] = useState(0)

    useImperativeHandle(ref, () => {
        return {
            focusInput: () => inputRef.current.focus(),
            checkCount: count
        }
    })

    return (
        <div>
            <input ref={inputRef}/>
            <br />
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default forwardRef(Child);
