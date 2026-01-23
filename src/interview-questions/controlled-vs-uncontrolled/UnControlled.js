import { useRef } from "react";

function UnControlled() {
    const emailRef = useRef();
    const passwordRef = useRef();

    function onSubmit() {
        console.log("Email value: " + emailRef.current.value);
        console.log("Password value: " + passwordRef.current.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="name" ref={nameRef} required />
            <input type="email" name="email" ref={emailRef} required />
            <input type="submit" value="Submit" />
        </form>
    );
}

export default UnControlled;