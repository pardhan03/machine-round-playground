import { useState, useRef, useCallback } from "react";
function useHoldCounter({
    initial = 0,
    step = 1,
    delay = 100
} = {}) {
    const [count, setCount] = useState(initial);
    const intervalRef = useRef(null);

    // we need useCallback here only if our function will used inside the useEffect hook
    // beacuse useEffect hook only call after re-render
    // we don't want to create this function on every re-render until dependency hasn't changed
    const startIncrement = useCallback(() => {
        console.log('called ')
        if (intervalRef.current) return; // if already exist return
        intervalRef.current = setInterval(() => {
            setCount((prev) => prev + step);
        }, delay);
    }, [step, delay])

    const stopIncrement = useCallback(() => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    },[])

    return { count, startIncrement, stopIncrement }
}

export default useHoldCounter;