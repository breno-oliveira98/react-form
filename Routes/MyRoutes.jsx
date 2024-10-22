import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "../src/Pages/LoginPage";
import { CadastroPage } from "../src/Pages/CadastroPage";
import { TesteComp } from "../src/Pages/TesteComp";

export const MyRoutes = () => {
    return ( 
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={ <LoginPage/> }/>
                    <Route path="/cadastro" element={ <CadastroPage/> }/>
                    <Route path="/testecomp" element={ <TesteComp/> }/>
                </Routes>
            </BrowserRouter>
        </>
     );
}