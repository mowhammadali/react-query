import React from "react";

const InfiniteProduct = ({ title , price , image , description }) => {
    return (
        <div className={"product-container"}>
            <div>
                <h4 className={"product-title"}>{title}</h4>
                <img className="product-img" src={image} />
            </div>
            <p className={"product-body"}>{description}</p>
            <div className="w-100 d-flex flex-column gap-2">
                <div className={"product-footer"}>
                    <span className={"product-price"}>{price}$</span>
                    <div className={"product-link"}>
                        Details
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfiniteProduct;
