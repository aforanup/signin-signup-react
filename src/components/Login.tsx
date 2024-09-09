import { useState } from "react";

const Login = () => {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");

    const submitLoginFunction = () => {
        setUsername("");
        setPassword("");
    };
    return (
        <div>
            <form onSubmit={submitLoginFunction}>
                <table>
                    <tr>Login</tr>
                    <tr>
                        <input type="text" />
                    </tr>

                    <tr>
                        <input type="password" />
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
