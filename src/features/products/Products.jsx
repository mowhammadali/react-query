import React, { useState } from "react";
import styles from "./Products.module.css";
import Product from "../../components/product/Product";
import BoxLoading from "../../components/boxLoading/BoxLoading";
import { useProducts } from "../../hooks/products/useProducts";
import useData from "../../hooks/data/useData";
import classNames from "classnames";

const Products = () => {
    let loadingArray = Array.from({ length: 4 }, (_, index) => index + 1);
    const [page , setPage] = useState(1);
    const pageSize = 6;
    const query = useProducts(page , pageSize);
    // use multiple query by useQueries
    const [products , roles] = useData();
    const { data, isLoading } = query;
    
    return (
        <div className={styles.container}>
            <div className={styles.productsContainer}>
                {isLoading ? (
                   loadingArray.map((item , index) => <BoxLoading key={index}/>)
                ) : (
                    data?.data?.map((product) => (
                        <Product key={product.id} {...product} page={page} pageSize={pageSize} />
                    ))
                )}
            </div>
            <div>
                <nav aria-label="...">
                    <ul className="pagination">
                        <li className={classNames("page-item" , page === data?.first && 'disabled')}>
                            <span className={classNames("page-link" , styles.paginationButton)}
                                onClick={() => setPage(prev => prev - 1)}>
                                Previous
                            </span>
                        </li>
         
                        <li className="page-item" aria-current="page">
                            <span className="page-link">{page}</span>
                        </li>
                        <li className={classNames("page-item" , page === data?.last && 'disabled')}>
                            <span className={classNames("page-link" , styles.paginationButton)}
                                onClick={() => setPage(prev => prev + 1)}>
                                Next
                            </span>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Products;
