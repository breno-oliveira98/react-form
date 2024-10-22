import React, { useState } from 'react';

export const InputWithIcon = ({ type = 'password', inputSize = 2, id, label, handleChange }) => {
    const [inputType, setInputType] = useState(type);
    const [icon, setIcon] = useState('bi-eye'); // Estado para o ícone

    const mostrarSenha = () => {
        setInputType(prevType => {
            const newType = prevType === 'password' ? 'text' : 'password';
            setIcon(newType === 'text' ? 'bi-eye-slash' : 'bi-eye'); // Altera o ícone
            return newType;
        });
    };

    return ( 
        <div className={`col-md-${inputSize}`}>
            <label htmlFor={id} className="form-label">
                {label}
            </label>
            <div className='position-relative'>
                <input
                    type={inputType}
                    autoComplete="off"
                    className="form-control"
                    id={id}
                    onChange={handleChange}
                />
                <i
                    className={`bi ${icon}`}
                    id="btn-senha"
                    style={{ position: 'absolute', right: '3%', top: '50%',  cursor: 'pointer', fontSize: '20px' }}
                    onClick={mostrarSenha}
                ></i>
            </div>
        </div>
    );
}
