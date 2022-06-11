
// Comps
import CartItem from '../CartItem/CartItem';

// Styles
import { Wrapper } from './Cart.styles';

// Types
import { CartItemType } from '../App';

type Props = {
    cartItems: CartItemType[],
    addToCart: (clickedItem: CartItemType) => void,
    removeFromCart: (id: number) => void,
}

const Cart: React.FC<Props> = ({cartItems, addToCart, removeFromCart}) => {
  return (
    <Wrapper>
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? <p>No items in chart</p> : null}
        {cartItems.map((item, key) => 
            <CartItem key={key} item={item} addToCart={addToCart} removeFromCart={removeFromCart}/>
        )}
    </Wrapper>
  )
}

export default Cart