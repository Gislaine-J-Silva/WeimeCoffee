import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import theme from "../src/styles/theme";

import  Header from "./components/Header";
import { CartProvider } from "./context/CartContext";

import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Reviews } from "./pages/Reviews";
import { Blogs } from "./pages/Blogs";
import { Contact } from "./pages/Contact";
import { Baseboard } from "./pages/Baseboard";
import { Menu } from "./pages/Menu";
import { Products } from "./pages/Products";
/*
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Profile } from "./pages/Profile";
*/


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <CartProvider>
                <Header/>
                <Home/>
                <About/>
                <Menu/>
                <Products/>
                <Reviews/>
                <Blogs/>
                <Contact/>
                <Baseboard/>

            </CartProvider>
        </ThemeProvider>
    </React.StrictMode>
)