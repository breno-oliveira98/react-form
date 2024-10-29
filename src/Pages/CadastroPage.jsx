import { useState, useEffect, useRef } from "react";
import { Button } from "../components/button/Button";
import { Input } from "../components/input/Input";
import { InputSelect } from "../components/input/InputSelect";
import { Link } from "react-router-dom";
import { InputWithIcon } from "../components/input/InputWithIcon";
import axios from "axios";
import { maskCep } from '../util/cep';

export const CadastroPage = () => {
  const [formData, setFormData] = useState({});
  const [estados, setEstados] = useState([]);
  const [cidades, setCidades] = useState([]);
  const numeroRef = useRef(null)

  const handleChange = (e) => {
    const { id, value } = e.target;
    //console.log(id, value);

    if (id === 'cep') {
      setFormData({ ...formData, cep: maskCep(value) })
    } else {
      setFormData({ ...formData, [id]: value })
    }
  }


  const fetchCep = async (cep) => {
    try {
      const response = await axios.get(`https://brasilapi.com.br/api/cep/v2/${cep}`)

      const data = response.data;
      console.log('cep', data);

      setFormData({
        ...formData,
        endereco: data.street,
        bairro: data.neighborhood,
        estado: data.state,
      })
        setTimeout(() => {
          numeroRef.current.focus()
        }, 800);
      
    } catch (error) {
      console.log('error', error);
    }
  }

  useEffect(() => {
    // '?' O interrogação antes de uma propriedade ou função ser chamada, faz um check se existe, acessa a propriedade if (formData.cep && formData.cep.length === 8) {
    if (formData.cep?.length === 10) {
      fetchCep(maskCep(formData.cep));
    }
  }, [formData.cep])

  const fetchEstados = async () => {
    try {
      const response = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`);
      setEstados(response.data.sort((a, b) => a.nome.localeCompare(b.nome)));
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    fetchEstados();
  }, []);

  const fetchCidades = async () => {
    try {
      const response = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/23/municipios`);
      setCidades(response.data.sort((a,b) => a.nome.localeCompare(b.nome)));
    } catch (error) {
      console.log('error', error);
    }
  } 

  useEffect(() => {
    fetchCidades()
  }, [])


  

  const resultado = JSON.stringify(formData, null, 2);

  const enviar = (e) => {
    e.preventDefault();
    console.log("Form", formData);
  };
  return (
    <div>
      <div className="form-pessoa d-flex justify-content-center align-items: center;" style={{height: '100vh'}}>
        <form className="row g-3 my-auto" 
        onSubmit={enviar} 
        style={{width: '700px', height: 'auto', background: 'white', padding: '20px', borderRadius: '10px'}}>
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
            value={formData.cep}
            handleChange={handleChange}
          />
          <Input
            type="text"
            id={"endereco"}
            inputSize={"9"}
            label={"Endereço"}
            value={formData.endereco}
            handleChange={handleChange}
          />
          <Input
            type="text"
            id={"numero"}
            inputSize={"2"}
            ref={numeroRef}
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
            value={formData.bairro}
            handleChange={handleChange}
          />
          <InputSelect
            id={"estado"}
            inputSize={"4"}
            label={"Estado"}
            value={formData.estado}
            options={estados.map(item => ({
              value: item.sigla,
              label: `${item.id} - ${item.nome}`
            }))}
            handleChange={handleChange}
          />
          <InputSelect
            id={"cidade"}
            inputSize={"4"}
            label={"Cidade"}
            value={formData.cidade}
            options={cidades.map(item => ({
              value: item.nome,
              label: item.nome
            }))}
            handleChange={handleChange}
          />
          <Button name={"Cadastrar"} color={"primary"} type={"submit"} />
          <Button name={"Limpar"} color={"secondary"} type={"reset"} onClick={() => setFormData({})} />
          <div className="text-center"><span>Ja tem uma conta? <Link to="/">Entre</Link></span></div>
          
        </form>
      </div>
      <div className="d-flex justify-content-center">
          <pre>{resultado !== "{}" ? resultado : ""}</pre>
        </div>
    </div>
  );
};
