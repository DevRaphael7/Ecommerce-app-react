import './MainHeader.css'

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
                                <li>Fantasia
                                <div class="sub-menu">
                                    <ul>
                                        <li>Fantasia</li>
                                        <li>Ficção Cientifica</li>
                                        <li>Romance</li>
                                        <li>Filosofia</li>
                                        <li>História</li>
                                    </ul>
                                </div>
                                </li>
                                <li>Ficção Cientifica</li>
                                <li>Romance</li>
                                <li>Filosofia</li>
                                <li>História</li>
                            </ul>
                        </div>
                    </li>
                    <li>Sobre nós</li>
                    <li>Contato</li>
                </ul>
            </nav>
        </header>
}