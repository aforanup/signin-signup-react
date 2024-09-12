import Signup from "./components/Signup";
import Login from "./components/Login";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </Router>
    );
};
export default App;
