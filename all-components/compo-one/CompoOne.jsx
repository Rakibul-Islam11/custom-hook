import { useState } from "react";


const CompoOne = () => {
    const [count, setCount] = useState(0);

    const handleCountIncerment = () => {
        setCount(count + 1)
    }
    const handleCountDecrement = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <h1>compo one</h1>
            <div>{count}</div>
            <button onClick={handleCountIncerment}>increment</button>
            <button onClick={handleCountDecrement}>decrement</button>
        </div>
    );
};

export default CompoOne;