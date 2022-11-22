import './Login.css'
import { LoginService } from './Login.service'
import { useState } from 'react';
import { IconHeader } from '../components/IconHeader';
import { ModalComponent } from '../components/ModalComponent/Modal.Component';
import { SpinnerComponent } from '../components/SpinnerComponent/Spinner';

export const LoginPage = () => {

    const service = new LoginService()

    const [uiInterface, setUiInterface] = useState({
        showPassword: true,
        senha: '',
        nome: '',
        showModal: false,
        responseMessage: '',
        iconAlert: '',
        spinnerActive: false
    });

    const submitLogin = (e) => {
        e.preventDefault()

        if(!uiInterface.nome || !uiInterface.senha) {
            return
        }

        setUiInterface({
            ...uiInterface,
            spinnerActive: true
        })

        setTimeout(() => {
            service.loginRequest({
                login: uiInterface.nome,
                senha: uiInterface.senha
            }).then(response => {
                setUiInterface({
                    ...uiInterface,
                    iconAlert: require('../../assets/check.png'),
                    showModal: true,
                    responseMessage: response.data.message
                })
            }).catch((erro)=> {
                setUiInterface({
                    ...uiInterface,
                    iconAlert: require('../../assets/attention.png'),
                    showModal: true,
                    responseMessage: erro.data.message
                })
            })

            setUiInterface({ 
                ...uiInterface,
                spinnerActive: false 
            })

        }, 4000)
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
                        ...uiInterface,
                        nome: e.target.value
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
                        ...uiInterface,
                        senha: e.target.value
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
                            ...uiInterface,
                            showPassword: !uiInterface.showPassword
                        })
                    }}   
                /> Mostrar senha
            </div>
            <button onClick={submitLogin} className='btn-logar'>
                <div className='flex justify-center'>
                    { uiInterface.spinnerActive ? <SpinnerComponent /> : <p>Login</p> }
                </div>
            </button>
        </form>

        { uiInterface.showModal ?  <ModalComponent
            overlay={() => setUiInterface({
                ...uiInterface,
                nome: uiInterface.nome,
                senha: uiInterface.senha,
                showPassword: uiInterface.showPassword,
                showModal: false
            })}
        >
            <div className='flex justify-center align-center'>
                <p style={{
                    'marginRight': '5px', 
                    'fontWeight': 'bold'
                }}>{ uiInterface.responseMessage }</p>
                <img src={ uiInterface.iconAlert } className="icon-alert"/>
            </div>
        </ModalComponent> : null }
        
    </div>
}