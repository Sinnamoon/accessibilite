import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginPage from "./login/LoginPage.tsx";
import Posts from "./posts/Posts.tsx";


export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Posts/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}