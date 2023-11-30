import './CartWidget.css'
import * as Icon from 'react-bootstrap-icons';

const CartWidget = () => {
    return (
        <div className='cartWidget'>
            <button className='botonNavbar'>
                <Icon.CartFill />
                <span>2</span>
            </button>
        </div>
    );
}

export default CartWidget;