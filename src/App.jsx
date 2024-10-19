import { useRef, useState } from "react";
import "./App.css";
import { Button } from "./components/button/Button";
import { Input } from "./components/input/Input";
import { InputSelect } from "./components/input/InputSelect";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(JSON.stringify(formData));
  };

  const handleReset = () => {
    setFormData({});
  };

  const handleCepChange = (e) => {
    const cep = e.target.value;
    setFormData({ ...formData, cep: cep})
    if(cep.length === 8) {
      getCep(cep)
    }
  }

  const getCep = async (cep) => {
    try {
      const res = await axios.get(
        `https://brasilapi.com.br/api/cep/v2/${cep}`
      );
      console.log(res.data);

      setFormData({
        ...formData,
        endereco: res.data.street,
        bairro: res.data.neighborhood,
        cidade: res.data.city,
        estado: res.data.state
      })
      return res.data;
    } catch (error) {
      console.error('Erro ao buscar o CEP', error)
      return null
    }
    
  };

  const resultado = JSON.stringify(formData, null, 2);

  const enviar = (e) => {
    e.preventDefault();
    console.log("Form", formData);
  };
  return (
    <>
      <main className="form-pessoa ">
        <h2>Cadstro de Pessoa</h2>
        <form className="row g-3" onSubmit={enviar} onReset={handleReset}>
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
            inputSize={"2"}
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
          <Input
            type="password"
            id={"senha"}
            inputSize={"5"}
            label={"Senha"}
            handleChange={handleChange}
          />
          <Input
            type="text"
            id={"cep"}
            inputSize={"3"}
            label={"CEP"}
            handleChange={(e) => {
              handleCepChange(e);
              handleChange(e);
              }}
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
            inputSize={"1"}
            label={"Número"}
            handleChange={handleChange}
          />
          <Input
            type="text"
            id={"complemento"}
            inputSize={"11"}
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
        </form>
        <div className="text-white">
          <pre>{resultado !== "{}" ? resultado : ""}</pre>
        </div>
      </main>
    </>
  );
}

export default App;
