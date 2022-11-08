import './IconHeader.css'

export const IconHeader = () => {

    return <div className='flex align-start'>
                <img src={require('../../assets/shopping-cart.png')} width={'60px'} />
                <div>
                    <p className='txt-ecommerce'>E-commerce</p>
                </div>
            </div>
}