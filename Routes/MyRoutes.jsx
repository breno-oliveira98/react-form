import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "../src/Pages/LoginPage";
import { CadastroPage } from "../src/Pages/CadastroPage";

export const MyRoutes = () => {
    return ( 
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={ <LoginPage/> }/>
                    <Route path="/cadastro" element={ <CadastroPage/> }/>
                </Routes>
            </BrowserRouter>
        </>
     );
}