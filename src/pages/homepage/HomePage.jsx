import { useState } from 'react'
import { SortingService } from '../../services/Sorting.service'
import { SpinnerComponent } from '../components/SpinnerComponent/Spinner';
import './HomePage.css'

export const HomePage = () => {

    const [showSpinner, setShowSpinner] = useState(false);

    let [getProdutos, setProdutos] = useState([
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
        },
        {
            "nome": "DualSense - PS5",
            "preco": 300.50,
            "cover": "https://gmedia.playstation.com/is/image/SIEPDC/dualsense-thumbnail-ps5-01-en-17jul20?$native$"
        },
        {
            "nome": "PS5",
            "preco": 5000.99,
            "cover": "https://files.tecnoblog.net/wp-content/uploads/2020/11/playstation_5_produto-700x700.png"
        },
        {
            "nome": "Mouse Gamer RGB",
            "preco": 120.99,
            "cover": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/p/g/pgm-p301-rgb4.jpg"
        }
    ])

    const getProdutosHtmlTemplate = () => {
        return getProdutos.map((value, index) => (
            <div class="product-container" key={index + 1}>
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
        const sortingService = new SortingService("preco");
        
        setShowSpinner(true);

        setTimeout(() => {
            if(e.target.value === "1") {
                setProdutos(sortingService.sortingBubbleSort(getProdutos, true))
            } else if (e.target.value === "2") {
                setProdutos(sortingService.sortingBubbleSort(getProdutos))
            }

            setShowSpinner(false)
        }, 2500)
    }

    return <section style={{'background': '#f2f2f2'}}>
        
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

            <div className="products-grid justify-spacer">
                { showSpinner ? <SpinnerComponent /> : getProdutosHtmlTemplate() }
            </div>
        </section>

    </section>
}