import './IconHeader.css'

export const IconHeader = () => {

    return <div className='flex align-center'>
                <img src={require('../../assets/shopping-cart.png')} width={'60px'} />
                <p className='txt-ecommerce'>E-commerce</p>
            </div>
}