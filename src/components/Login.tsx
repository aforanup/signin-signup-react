import { useState } from "react";

const Login = () => {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");

    const submitLoginFunction = (event) => {
        event.preventDefault();
        console.log(username, password);
        setUsername("");
        setPassword("");
    };
    return (
        <div>
            <form onSubmit={submitLoginFunction}>
                <table>
                    <tr>Login</tr>
                    <tr>
                        <label htmlFor="username-login">Username: </label>
                        <input
                            id="username-login"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </tr>

                    <tr>
                        <label htmlFor="password-login">Password: </label>
                        <input
                            id="password-login"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </tr>
                    <tr>
                        <button>Login</button>
                    </tr>
                </table>
            </form>
        </div>
    );
};

export default Login;
