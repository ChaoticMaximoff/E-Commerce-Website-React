import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, deleteFromCart } from "../store/slices/cart";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons'

export const CartItemCard = (props) => {
    const navigate = useNavigate();
    const { cartItem } = props;

    const dispatch = useDispatch();

    const addCart = () => {
        dispatch(addToCart(cartItem));
    };

    const removeCart = () => {
        dispatch(removeFromCart(cartItem));
    };

    const deleteCart = () => {
        dispatch(deleteFromCart(cartItem));
    }


    const redirectToDetails = (id) => {
        navigate(`/product-details/${cartItem.id}`)
    }

    return (
        <div className="" >
            <div className="card rounded-3 mb-4">
                <div className="card-body p-4">
                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-md-2 col-lg-2 col-xl-2">
                            <img
                                src={cartItem?.thumbnail}
                                className="img-fluid rounded-3" alt="Cotton T-shirt" />
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3" onClick={redirectToDetails}>
                            <p className="lead fw-normal mb-2">{cartItem?.title}</p>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <button data-mdb-button-init data-mdb-ripple-init className="btn btn-link px-2"
                                onClick={removeCart}
                            >
                                <FontAwesomeIcon icon={faMinus} color="black" />
                            </button>

                            <input id="form1" min="0" name="quantity" value={cartItem?.quantity} type="number"
                                className="form-control form-control-sm" readOnly />

                            <button data-mdb-button-init data-mdb-ripple-init className="btn btn-link px-2"
                                onClick={addCart}
                            >
                                <FontAwesomeIcon icon={faPlus} color="black" />
                            </button>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h5 className="mb-0 text-start">total: &nbsp; {cartItem?.totalPrice.toFixed(2)} $</h5>
                            <h6 className="text-start text-muted">price: {cartItem?.price} $</h6>
                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            <button href="#!" className="text-danger btn-link bg-transparent"
                                onClick={deleteCart}><FontAwesomeIcon icon={faTrash} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
