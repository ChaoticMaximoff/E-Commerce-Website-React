import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/slices/cart";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from  '@fortawesome/free-solid-svg-icons'

export const ProductCard = (props) => {
  const navigate = useNavigate();
  const { productItem } = props;

  const dispatch = useDispatch();

  const addCart = () => {
      dispatch(addToCart(productItem));
  };


  const redirectToDetails = (id) => {
    navigate(`/product-details/${id}`)
  }

  return (
    <div className="card" >
      <img src={productItem.thumbnail} className="card-img-top" alt="..." />
      <div className="card-body">
        {productItem.stock != 0 ? (
            <span className="position-absolute badge text-bg-success" style= {{
            left: "1em", top:"1em" }}>In stock</span>
        ) : (
          <span className="position-absolute top-0 badge text-bg-danger">Out of Stock</span>
        )}
        <div className="d-flex justify-content-between">
        <h5 className="card-title">{productItem.title} </h5>
        <h5 className="card-title text-muted text-decoration-underline">{productItem.price} $</h5>
        </div>
        <p className="card-text text-muted" 
            style={{ display:"inline-block",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: "30ch"}}>
          {productItem.description}
        </p>
      </div>
      <div className="card-footer d-flex gap-2 justify-content-center">
        <button
          className="btn btn-primary"
          onClick={() => redirectToDetails(productItem.id)}
        >
          View
        </button>
        <button
          className="btn btn-secondary"
          onClick={addCart}
          disabled={productItem.stock === 0}
        >
          <FontAwesomeIcon icon={faCartPlus} /> Add to Cart
        </button>
      </div>
    </div>
  );
};
