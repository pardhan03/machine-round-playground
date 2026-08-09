import React, { useState } from 'react'

const BacthUpdate = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {

        setCount(count + 1);
        setCount(count + 2);
        setCount(count + 3);

        setTimeout(() => {
            setCount(count + 4);
            setCount(count + 5);
        }, 1000);
    };
    return (
        <div>
            <button onClick={handleClick}>
                {count}
            </button>
        </div>
    )
}

export default BacthUpdate