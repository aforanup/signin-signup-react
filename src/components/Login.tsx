import { useState } from "react";

const Login = () => {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");

    const submitLoginFunction = (event) => {
        event.preventDefault();
        // console.log(username, password);
        setUsername("");
        setPassword("");
    };
    return (
        <div>
            <form onSubmit={submitLoginFunction}>
                <div>
                    <h1>Signin</h1>

                    <div>
                        {/* <label htmlFor="username-login">Username: </label> */}
                        <input
                            placeholder="Enter Username"
                            id="username-login"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div>
                        {/* <label htmlFor="password-login">Password: </label> */}
                        <input
                            placeholder="Enter password"
                            id="password-login"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <button>Login</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
