import './Modal.Component.css'

export const ModalComponent = (props) => {

    const clickOverlay = () => {
        props.overlay()
    }

    return <div className="modal-window show flex center">
        <div className="modal-overlay show" id="overlay" onClick={clickOverlay}></div>
        <div className="alert txt-center">
            { props.children }
        </div>
    </div>
}