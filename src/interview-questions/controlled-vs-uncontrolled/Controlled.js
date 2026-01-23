import { useState } from "react";

function Controlled() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function onSubmit() {
        console.log("Email value: " + email);
        console.log("Password value: " + password);
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <input type="submit" value="Submit" />
        </form>
    );
}

export default Controlled;