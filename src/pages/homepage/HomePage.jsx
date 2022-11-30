import { useState } from 'react'
import { SortingService } from '../../services/Sorting.service'
import { SpinnerComponent } from '../components/SpinnerComponent/Spinner';
import { useSelector } from "react-redux";

import './HomePage.css'
import { ProductContainer } from '../components/ProductContainer/ProductContainer';

export const HomePage = () => {

    const [showSpinner, setShowSpinner] = useState(false);

    let [getProdutos, setProdutos] = useState(useSelector((state) => state.product))

    let [getProdutosFilter, setProdutosFilter] = useState(getProdutos)
    let [getListCategoryFilter, setListCategoryFilter] = useState([])

    const getProdutosHtmlTemplate = () => {
        return getProdutosFilter.map((value, index) => (<ProductContainer value={value} key={index}/>))
    }

    const filtrar = (e) => {
        const sortingService = new SortingService("preco");
        
        setShowSpinner(true);

        setTimeout(() => {
            if(e.target.value === "1") {
                setProdutosFilter(sortingService.sortingBubbleSort(getProdutosFilter, true))
            } else if (e.target.value === "2") {
                setProdutosFilter(sortingService.sortingBubbleSort(getProdutosFilter))
            } else if (e.target.value === "3") {
                sortingService.setKey("nome")
                setProdutosFilter(sortingService.sortingString(getProdutosFilter, true))
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