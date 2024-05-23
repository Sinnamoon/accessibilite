import {useNavigate} from "react-router-dom";
import "./loginPage.css";


const LoginPage = () => {

    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/`;
        navigate(path);
    }
    return (
        <div className="login-card" id="main-content">
            <h1 className="login-card-title">Login</h1>
            <form action="/">
                <label htmlFor="email">Email: </label>
                <input id="email" name="email" required type="email" aria-label="Email" aria-required="true"/>
                <label htmlFor="password">Password: </label>
                <input id="password" name="password" required type="password" aria-label="Password"
                       aria-required="true"/>
                <button type="submit" onClick={routeChange}>Submit</button>
            </form>
        </div>
    );
}

export default LoginPage;