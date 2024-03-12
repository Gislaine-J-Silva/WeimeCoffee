import { BrowserRouter } from "react-router-dom";

import { AppRouter } from "./app.routes";

export function Routes(){
    const { user } = useAuth();

    return(
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    )
}