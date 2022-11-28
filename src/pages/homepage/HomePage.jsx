import './HomePage.css'

export const HomePage = () => {

    const produtos = [
        {
            "nome": "Celular",
            "preco": 450.0,
            "cover": "https://i.zst.com.br/thumbs/12/28/3a/-550637268.jpg"
        },
        {
            "nome": "Relógio digital",
            "preco": 34.0,
            "cover": "https://static.dafiti.com.br/p/Touro-Boots-Rel%C3%B3gio-Digital-Touro-Boots-Pulseira-Silicone-Preto-2432-4714674-1-zoom.jpg"
        },
        {
            "nome": "Xbox One",
            "preco": 2500.5,
            "cover": "https://files.tecnoblog.net/wp-content/uploads/2020/12/Xbox-One-500GBa.jpg"
        },
        {
            "nome": "1984 - George Orwell",
            "preco": 15.99,
            "cover": "https://m.media-amazon.com/images/I/819js3EQwbL.jpg"
        }
    ]

    const getProdutos = () => {
        return produtos.map(value => (
            <div class="product-container">
                <img src={value.cover} />
                <div className='info'>
                    <h4>{ value.nome }</h4>
                    <br />
                    <p>{ value.preco.toFixed(2) } R$</p>
                    <br />
                    <button>
                        Ver mais
                    </button>
                </div>
            </div>
        ))
    }

    const filtrar = (e) => {
        console.log(e.target.value)
    }

    return <section style={{'background': '#f2f2f2'}} className="h-full">
        
        <header>
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

        <section className='products'>
            <div className='flex justify-spacer filtro'>
                <p>Filtro</p>

                <select name="select" onChange={filtrar}>
                    <option value="1">Ordem crescente</option>
                    <option value="2">Ordem descrecente</option>
                    <option value="3">Ordem alfabética</option>
                </select>
            </div>

            <hr />

            <div className="products-grid">
                { getProdutos() }
            </div>
        </section>

    </section>
}