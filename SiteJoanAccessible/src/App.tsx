import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginPage from "./login/LoginPage.tsx";
import Posts from "./posts/Posts.tsx";
import Article from "./articles/Article.tsx";


export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/article/:id" element={<Article/>}/>
                    <Route path="/" element={<Posts/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}