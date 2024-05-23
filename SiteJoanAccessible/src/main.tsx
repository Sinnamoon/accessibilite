import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Navbar from "./navigation/Navbar.tsx";
import Footer from "./footer/Footer.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode>
    <div className="flex flex-col min-h-screen">
        <Navbar/>
        <main className="flex-1">
            <App/>
        </main>
        <Footer/>
    </div>
</React.StrictMode>,)
