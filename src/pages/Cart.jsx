import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/slices/cart";
import { CartItemCard } from "../components/CartItemCard";
export const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.itemList);
    const totalPrice = useSelector(state => state.cart.totalPrice);
    return (
        <div className="container mt-5 pt-5 mb-5">
        <h1 className="text-start">Cart</h1>
        <hr />
        {cartItems.length === 0? (
            <h2 className="text-start text-muted">Cart is empty</h2>
        ) :
        (
            <div className="row d-flex justify-content-center align-items-center h-100">
                {cartItems.map((item) => {
                return (
                    item.quantity > 0 ? <div className="col-12" key={item.id}>
                    <CartItemCard
                        cartItem={item}
                    />
                    </div> : <div></div>
                );
                })}
                <div>
                    <h4 className="text-start">Total Price: {totalPrice.toFixed(2)} $</h4>
                </div>
            </div>
        ) 
    }   
        </div>
    );
}