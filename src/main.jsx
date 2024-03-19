import React from "react";
import ReactDOM from "react-dom/client";

import theme from "../src/styles/theme";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Reviews } from "./pages/Reviews";
import { ThemeProvider } from "styled-components";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Home/>
            <About/>
            <Reviews/>
        </ThemeProvider>
    </React.StrictMode>
)