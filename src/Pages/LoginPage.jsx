import { Link } from "react-router-dom";
import { Button } from "../components/button/Button";
import { Input } from "../components/input/Input";

export const LoginPage = () => {
    return ( 
        <div className="d-flex justify-content-center align-items: center; " style={{height: '100vh'}}>
            <form className="row g-1 my-auto" style={{width: '400px', height: 'auto', background: 'white', padding: '20px', borderRadius: '10px'}}>
                <h1 className="text-center">Faça o seu login</h1>
                <Input
                inputSize={12}
                type="text"
                label={'Usuário'}
                id={'usuario'}
                />
                <Input
                inputSize={12}
                type="password"
                label={'Senha'}
                id={'senha'}
                />
                <Button
                name="Entrar"
                color="primary"
                type="submit"
                Size={12}
                />
                <div className="text-center">
                    <span>Esqueceu sua senha?<br/>
                    <Link to="/">Clique aqui</Link>
                    </span>
                </div>
                <div className="text-center">
                    <span>Ainda não tem uma Conta?<br/>
                    <Link className="btn btn-success btn-sm" to="/cadastro">Cadastre-se</Link>
                    </span>
                </div>
            </form>
        </div>
     );
}