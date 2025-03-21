import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { axiosInstance } from "../apis/config";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cart";


export default function ProductDetails() {
    const params = useParams();
    const [productItem, setProduct] = useState();
    const dispatch = useDispatch();

    const addCart = () => {
        dispatch(addToCart(productItem));
    };

    useEffect(() => {
        axiosInstance
            .get(`/products/${params.id}`)
            .then((response) => setProduct(response.data))
            .catch((error) => console.log(error));
            console.log(productItem);
    }, [params.id]);


    return (
        <div className="container mt-5 pt-5">
            <div className="row">
                <div className="col-md-6 mb-4">
                    <img src={productItem?.thumbnail} alt="Product" className="img-fluid rounded mb-3 product-image" id="mainImage" />
                </div>

                <div className="col-md-6 text-start">
                    <h2 className="mb-3">{productItem?.title}</h2>
                    <div className="mb-3">
                        <span className="h4 me-2">{productItem?.price} $</span>
                        {productItem?.stock != 0 ? (
                            <span className="badge text-bg-success">In stock</span>
                        ) : (
                            <span className="badge text-bg-danger">Out of Stock</span>
                        )}
                    </div>
                    <hr></hr>
                    <p className="mb-4">{productItem?.description}</p>
                    <hr>
                    </hr>
                    <h5>More Information</h5>
                    <div className="container my-3">

                        <h4><span className="badge text-bg-warning ">Category: {productItem?.category}</span></h4>
                        <h4><span className="badge text-bg-warning">Brand: {productItem?.brand}</span></h4>

                    </div>
                    <hr></hr>
                    <button
                        className="btn btn-secondary"
                        onClick={addCart}
                        disabled={productItem?.stock === 0}
                    >
                        <FontAwesomeIcon icon={faCartPlus} /> Add to Cart
                    </button>
                    <div className="mt-4">
                    </div>
                </div>
            </div>
        </div>

    );

}