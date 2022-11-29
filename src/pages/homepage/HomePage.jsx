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
            "cover": "https://i.zst.com.br/thumbs/12/28/3a/-550637268.jpg",
            "type": "phone"
        },
        {
            "nome": "Relógio digital",
            "preco": 34.0,
            "cover": "https://static.dafiti.com.br/p/Touro-Boots-Rel%C3%B3gio-Digital-Touro-Boots-Pulseira-Silicone-Preto-2432-4714674-1-zoom.jpg",
            "type": "clock"
        },
        {
            "nome": "Xbox One",
            "preco": 2500.5,
            "cover": "https://files.tecnoblog.net/wp-content/uploads/2020/12/Xbox-One-500GBa.jpg",
            "type": "game"
        },
        {
            "nome": "1984 - George Orwell",
            "preco": 15.99,
            "cover": "https://m.media-amazon.com/images/I/819js3EQwbL.jpg",
            "type": "book"
        },
        {
            "nome": "DualSense - PS5",
            "preco": 300.50,
            "cover": "https://gmedia.playstation.com/is/image/SIEPDC/dualsense-thumbnail-ps5-01-en-17jul20?$native$",
            "type": "game"
        },
        {
            "nome": "PS5",
            "preco": 5000.99,
            "cover": "https://files.tecnoblog.net/wp-content/uploads/2020/11/playstation_5_produto-700x700.png",
            "type": "game"
        },
        {
            "nome": "Mouse Gamer RGB",
            "preco": 120.99,
            "cover": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/p/g/pgm-p301-rgb4.jpg",
            "type": "game"
        }
    ])

    let [getProdutosFilter, setProdutosFilter] = useState(getProdutos)
    let [getListCategoryFilter, setListCategoryFilter] = useState([])

    const getProdutosHtmlTemplate = () => {
        return getProdutosFilter.map((value, index) => (
            <div class="product-container" key={index + 1}>
                <img src={value.cover} />
                <div className='info'>
                    <h4>{ value.nome }</h4>
                    <br />
                    <p>{ value.preco.toFixed(2) } R$</p>
                    <br />
                    <button className='btn-blue'>
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
                setProdutosFilter(sortingService.sortingBubbleSort(getProdutosFilter, true))
            } else if (e.target.value === "2") {
                setProdutosFilter(sortingService.sortingBubbleSort(getProdutosFilter))
            }

            setShowSpinner(false)
        }, 2500)
    }

    const addCategory = (e) => {
        if(e.target.checked) {
            setListCategoryFilter([
                ...getListCategoryFilter,
                e.target.value
            ])
        } else setListCategoryFilter(getListCategoryFilter.filter(value => value != e.target.value));
    }

    const filtrarPorCategoria = () => {
        return getProdutos.filter(value => {
            if(getListCategoryFilter.includes(value.type)){
                return value;
            }
        })
    }

    const uniqueListTypes = () => {
        let uniqueArrayTypes = [];

        getProdutos.map(value => {
            if(!uniqueArrayTypes.includes(value.type)) {
                uniqueArrayTypes.push(value.type)
            }
        })

        return uniqueArrayTypes
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
                

            <div className='flex w-full content-template'>
                <div className='container-types-filter'>
                    <h1>Aplicar filtros</h1>

                    <hr />
                    
                    <ul>
                        { uniqueListTypes().map(value => <li className='flex align-center'>
                                <input type={'checkbox'} onClick={addCategory} value={value}/>
                                <p>{value}</p>
                            </li>)
                        }
                    </ul>

                    <div className='btn-c'>
                        <button className='btn-blue' onClick={() => {
                            setProdutosFilter(filtrarPorCategoria())
                        }}>
                            Aplicar filtro
                        </button>
                    </div>
                </div>

                <div className="products-grid justify-spacer w-full">
                    { showSpinner ? <SpinnerComponent /> : getProdutosHtmlTemplate() }
                </div>
            </div>
        </section>

    </section>
}