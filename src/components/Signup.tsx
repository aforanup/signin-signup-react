import { useState } from "react";

const Signup = () => {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    const submitSignupFunction = () => {
        setUsername("");
        setPassword("");
    };
    return (
        <div>
            <form onSubmit={submitSignupFunction}>
                <table>
                    <tr>Sign Up</tr>
                    <tr>
                        <input type="text" />
                    </tr>

                    <tr>
                        <input type="password" />
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
