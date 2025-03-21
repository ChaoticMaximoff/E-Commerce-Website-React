import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { axiosInstance } from "../apis/config";
import { ProductCard } from "../components/ProductCard";

export const ProductsList = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);


    useEffect(() => {
        axiosInstance
           .get("/products")
           .then((response) => setProducts(response.data.products))
           .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);


    return (
        <div className="container mt-5 pt-5">
            <h2>Products List</h2>
            <hr />

            {loading && <Loader />}
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {products.map((product) => {
                return (
                    <div className="col" key={product.id}>
                    <ProductCard
                        productItem={product}
                    />
                    </div>
                );
                })}
            </div>
        </div>
    )
}