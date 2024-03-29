import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.scss";

const Product = ({ data, id }) => {
    const navigate = useNavigate();
    return (
        <div
            className="product-card"
            onClick={() => navigate("/product/" + id)}
        >
            <div className="thumbnail">
                <img
                    src={data?.img?.data?.attributes?.formats?.large?.url}
                    alt={data.title} // Add alt attribute for accessibility
                />
            </div>
            <div className="prod-details">
                <span className="name">{data.title}</span>
                <span className="price">$ {data.price}</span>
            </div>
        </div>
    );
};

export default Product;
