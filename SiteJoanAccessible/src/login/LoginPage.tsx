import {useNavigate} from "react-router-dom";
import "./loginPage.css";


const LoginPage = () => {

    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/login`;
        navigate(path);
    }
    return (
        <div className="login-card" id="main-content" aria-label="Main content login page">
            <h1 className="login-card-title">Login</h1>
            <form action="/">
                <label htmlFor="email">Email: </label>
                <input id="email" name="email" required type="email" autoFocus autoComplete={"email"}/>
                <label htmlFor="password">Password: </label>
                <input id="password" name="password" required type="password" autoComplete={"current-password"}/>
                <button type="submit" onClick={routeChange}>Submit</button>
            </form>
        </div>
    );
}

export default LoginPage;