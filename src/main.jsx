import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import theme from "../src/styles/theme";

import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Reviews } from "./pages/Reviews";
import { Blogs } from "./pages/Blogs";
import { Contact } from "./pages/Contact";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <Contact/>
        </ThemeProvider>
    </React.StrictMode>
)