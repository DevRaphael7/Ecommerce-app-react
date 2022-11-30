import './MainHeader.css'
import { Link } from 'react-router-dom'
import { rotas } from './rotas'

export const MainHeader = () => {

    return <header>
            <div class="cabecalho">
                <h1>Ecommerce App</h1>
                <div class="btns-home">
                    <a><button class="button-f">Login</button></a>
                    <a><button class="button-f">Cadastrar</button></a>
                </div>
            </div>
            <nav class="nav-links">
                <ul>
                    <li class="ativar">Livros
                        <div class="sub-menu">
                            <ul>
                                { rotas.map(value => <Link to={'/detail/' + value.type}><li>{value.name}</li></Link>) }
                            </ul>
                        </div>
                    </li>
                    <li>Sobre nós</li>
                    <li>Contato</li>
                </ul>
            </nav>
        </header>
}