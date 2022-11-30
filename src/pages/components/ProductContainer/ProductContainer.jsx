export const ProductContainer = ({ value, index }) => {

    return <div class="product-container" key={index + 1}>
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
}