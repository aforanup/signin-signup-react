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
        } else {
            setUsername("");
            setPassword("");
            setRpassword("");
        }
    };
    return (
        <div>
            <form onSubmit={submitSignupFunction}>
                <div>
                    <h1>Sign Up</h1>

                    <div>
                        {/* <label htmlFor="username-signup">Username: </label> */}
                        <input
                            placeholder="Enter Username"
                            id="username-signup"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div>
                        {/* <label htmlFor="password-signup">Password: </label> */}
                        <input
                            placeholder="Enter password"
                            id="password-signup"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        {/* <label htmlFor="password-signup-repeat"> */}
                        {/* Repeat Password: </label> */}
                        <input
                            placeholder="Repeat Password"
                            id="password-signup-repeat"
                            type="password"
                            value={rpassword}
                            onChange={(e) => setRpassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <button>Sign up</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Signup;
