import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import theme from "../src/styles/theme";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Reviews } from "./pages/Reviews";
import { Blogs } from "./pages/Blogs";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Home/>
            <About/>
            <Reviews/>
            <Blogs/>
        </ThemeProvider>
    </React.StrictMode>
)