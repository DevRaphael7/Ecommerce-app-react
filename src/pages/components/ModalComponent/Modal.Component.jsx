import './Modal.Component.css'

export const ModalComponent = (props) => {

    const closeModal = () => {
        props.overlay()
    }

    return <div className="modal-window show flex center">
        <div className="modal-overlay show" id="overlay" onClick={closeModal}></div>
        <div className='alert'>
            <div className='header-modal'>
                <button
                    className='btn-close-modal'
                    onClick={closeModal}
                >Fechar</button>
            </div>
            <div  className='prop-dev'>
                { props.children }
            </div>
        </div>
    </div>
}