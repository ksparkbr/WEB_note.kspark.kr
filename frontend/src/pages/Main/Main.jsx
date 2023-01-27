import { BrowserRouter, Link, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function MainPage(){
    return <>
        <Header />
            test
            <Link to="/login">test</Link>
        <Footer />
    </>
}