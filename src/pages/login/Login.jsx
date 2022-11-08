import './Login.css'
import { LoginService } from './Login.service'
import React, { useState } from 'react';
import { IconHeader } from '../components/IconHeader';

export const LoginPage = () => {

    const service = new LoginService()

    const [uiInterface, setUiInterface] = useState({
        showPassword: true,
        senha: '',
        nome: ''
    });

    const submitLogin = (e) => {
        if(!uiInterface.nome || !uiInterface.senha) {
            e.preventDefault()
            return
        }

        service.loginRequest({
            nome: uiInterface.nome,
            senha: uiInterface.senha
        })
    }

    return <div className='container'>
        
        <IconHeader />

        <form style={{'marginTop': '1rem'}}>
            <div className='grid form-container'>
                <label>Nome</label>
                <input 
                    type="text" 
                    placeholder='Seu nome' 
                    onChange={(e) => setUiInterface({
                        nome: e.target.value,
                        senha: uiInterface.senha,
                        showPassword: uiInterface.showPassword 
                    })}
                    value={uiInterface.nome}
                /> 
            </div>
            <div className='grid form-container'>
                <label>Senha</label>
                <input 
                    type={ uiInterface.showPassword ? 'password' : 'text' }
                    placeholder='Sua senha' 
                    onChange={(e) => setUiInterface({
                        nome: uiInterface.nome,
                        senha: e.target.value,
                        showPassword: uiInterface.showPassword
                    })}
                    value={uiInterface.senha}   
                /> 
            </div>
            <div className='flex'>
                <input 
                    type="checkbox" 
                    value={uiInterface.showPassword} 
                    onChange={() => {
                        setUiInterface({
                            showPassword: !uiInterface.showPassword
                        })
                    }}   
                /> Mostrar senha
            </div>
            <button onClick={submitLogin} className='btn-logar'>
                Login
            </button>
        </form>
    </div>
}