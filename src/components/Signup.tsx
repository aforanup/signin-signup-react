import { useState } from "react";

const Signup = () => {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [rpassword, setRpassword] = useState("");

    const submitSignupFunction = (event) => {
        event.preventDefault();
        console.log(username, password, rpassword);
        if (password !== null && rpassword !== null && rpassword !== password) {
            console.log("password and repeat password doesnot match");
            return;
        }
        setUsername("");
        setPassword("");
        setRpassword("");
    };
    return (
        <div>
            <form onSubmit={submitSignupFunction}>
                <table>
                    <tr>Sign Up</tr>
                    <tr>
                        <label htmlFor="username-signup">Username: </label>
                        <input
                            id="username-signup"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </tr>

                    <tr>
                        <label htmlFor="password-signup">Password: </label>
                        <input
                            id="password-signup"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </tr>
                    <tr>
                        <label htmlFor="password-signup-repeat">
                            Repeat Password:{" "}
                        </label>
                        <input
                            id="password-signup-repeat"
                            type="password"
                            value={rpassword}
                            onChange={(e) => setRpassword(e.target.value)}
                        />
                    </tr>
                    <tr>
                        <button>Sign up</button>
                    </tr>
                </table>
            </form>
        </div>
    );
};

export default Signup;
