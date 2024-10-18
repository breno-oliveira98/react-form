import { useRef, useState } from "react";
import "./App.css";
import { Button } from "./components/button/Button";
import { Input } from "./components/input/Input";
import { InputSelect } from "./components/input/InputSelect";

function App() {
  const [formData, setFormData] = useState({})
  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value })
  }
  const [nomeCompleto, setNomeCompleto] = useState('');
  const enviar = (e) => {
    e.preventDefault();
    console.log('Form', formData)
  }
  return (
    <>
      <main className="form-pessoa ">
        <h2>Cadstro de Pessoa</h2>
        <form className="row g-3" onSubmit={enviar}>
        <Input
         type="text"
         id={'nome'}
         label={'Nome Completo'}
         handleChange={handleChange}
         />
        <Input
         type="text"
         id={'nome-mae'}
         label={'Nome Mãe'}
         />
        <Input
         type="date"
         id={'data-nascimento'}
         inputSize={'2'}
         label={'Data de Nascimento'}
         />
        <Input
         type="email"
         id={'email'}
         inputSize={'5'}
         label={'Email'}
         />
        <Input
         type="password"
         id={'senha'}
         inputSize={'5'}
         label={'Senha'}
         />
        <Input
         type="text"
         id={'cep'}
         inputSize={'3'}
         label={'CEP'}
         />
        <Input
         type="text"
         id={'endereco'}
         inputSize={'9'}
         label={'Endereço'}
         />
        <Input
         type="text"
         id={'numero'}
         inputSize={'1'}
         label={'Número'}
         />
        <Input
         type="text"
         id={'complemento'}
         inputSize={'11'}
         label={'Complemento'}
         />
        <Input
         type="text"
         id={'bairro'}
         inputSize={'4'}
         label={'Bairro'}
         />
         <InputSelect
         id={'estado'}
         inputSize={'4'}
         label={'Estado'}
         />
         <InputSelect
         id={'cidade'}
         inputSize={'4'}
         label={'Cidade'}
         />
         <Button
         name={'Cadastrar'}
         color={'primary'}
         type={'submit'}
         />
         <Button
         name={'Limpar'}
         color={'secondary'}
         type={'reset'}
         />
        </form>
        <div>
          {nomeCompleto}
        </div>
      </main>
    </>
  );
}

export default App;
