import Modal from "../UI/Modal"


const OrderModal = ({ close }) => {
    return (
        <Modal close={close}>
            <div className="order-container">
                <div className="order-container--success">
                <img src="/assets/order_success.svg" alt="Order Success" className="img-fluid"  style={{width:'300px'}}/>

                    <div className="message">
                        <h1>Order Successfully Placed!</h1>
                        <span>OrderID #{Math.random().toString(32).slice(2)}</span>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default OrderModal