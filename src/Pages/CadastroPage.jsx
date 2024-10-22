import { useState } from "react";
import { Button } from "../components/button/Button";
import { Input } from "../components/input/Input";
import { InputSelect } from "../components/input/InputSelect";
import { Link } from "react-router-dom";
import { InputWithIcon } from "../components/input/InputWithIcon";

export const CadastroPage = () => {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(JSON.stringify(formData));
  };

  const handleReset = () => {
    setFormData({});
  };

  const resultado = JSON.stringify(formData, null, 2);

  const enviar = (e) => {
    e.preventDefault();
    console.log("Form", formData);
  };
  return (
    <div>
      <div className="form-pessoa d-flex justify-content-center align-items: center;" style={{height: '100vh'}}>
        <form className="row g-3 my-auto" onSubmit={enviar} onReset={handleReset} style={{width: '700px', height: 'auto', background: 'white', padding: '20px', borderRadius: '10px'}}>
        <h2 className="text-center">Cadastro de Pessoa</h2>
          <Input
            type="text"
            id={"nome"}
            label={"Nome Completo"}
            handleChange={handleChange}
          />
          <Input
            type="text"
            id={"nome-mae"}
            label={"Nome Mãe"}
            handleChange={handleChange}
          />
          <Input
            type="date"
            id={"data-nascimento"}
            inputSize={"3"}
            label={"Data de Nascimento"}
            handleChange={handleChange}
          />
          <Input
            type="email"
            id={"email"}
            inputSize={"5"}
            label={"Email"}
            handleChange={handleChange}
          />
          <InputWithIcon
            type="password"
            id={"senha"}
            inputSize={"4"}
            label={"Senha"}
            handleChange={handleChange}
          />
          <Input
            type="text"
            id={"cep"}
            inputSize={"3"}
            label={"CEP"}
            handleChange={handleChange}
          />
          <Input
            type="text"
            id={"endereco"}
            inputSize={"9"}
            label={"Endereço"}
            handleChange={handleChange}
          />
          <Input
            type="text"
            id={"numero"}
            inputSize={"2"}
            label={"Número"}
            handleChange={handleChange}
          />
          <Input
            type="text"
            id={"complemento"}
            inputSize={"10"}
            label={"Complemento"}
            handleChange={handleChange}
          />
          <Input
            type="text"
            id={"bairro"}
            inputSize={"4"}
            label={"Bairro"}
            handleChange={handleChange}
          />
          <InputSelect
            id={"estado"}
            inputSize={"4"}
            label={"Estado"}
            handleChange={handleChange}
          />
          <InputSelect
            id={"cidade"}
            inputSize={"4"}
            label={"Cidade"}
            handleChange={handleChange}
          />
          <Button name={"Cadastrar"} color={"primary"} type={"submit"} />
          <Button name={"Limpar"} color={"secondary"} type={"reset"} />
          <div className="text-center"><span>Ja tem uma conta? <Link to="/login">Entre</Link></span></div>
          
        </form>
      </div>
      <div className="d-flex justify-content-center">
          <pre>{resultado !== "{}" ? resultado : ""}</pre>
        </div>
    </div>
  );
};
