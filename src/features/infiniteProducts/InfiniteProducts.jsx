import React, { useState, useEffect } from "react";
import styles from "./InfiniteProducts.module.css";
import InfiniteProduct from "../../components/infiniteProduct/InfiniteProduct";
import BoxLoading from "../../components/boxLoading/BoxLoading";
import axios from "axios";
import { useInfiniteQuery } from "react-query";

const BASE_URL = "http://localhost:3002";

const InfiniteProducts = () => {
    const [isEndOfPage, setIsEndOfPage] = useState(false);

    const { data , fetchNextPage , isLoading , isFetching } = useInfiniteQuery(
        ["products-infinite"],
        ({ pageParam = 1 }) => {
            return axios.get(
                `${BASE_URL}/products?_page=${pageParam}&_per_page=3`
            );
        },
        {
            select: (data) => data.pages,
            getNextPageParam: (info , pages) => {
                if (pages.length < info.data.last) {
                    return pages.length + 1;
                }
                else {
                    return undefined;
                }
            }
        }
    );

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop =
                window.pageYOffset || document.documentElement.scrollTop;

            // Check if user has scrolled to the bottom of the page
            if (windowHeight + scrollTop >= documentHeight) {
                setIsEndOfPage(true);
            } else {
                setIsEndOfPage(false);
            }
        };

        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Remove event listener on cleanup
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isEndOfPage) {
            fetchNextPage();
        }
    } , [isEndOfPage])

    return (
        <div className={styles.container}>
            {data?.map((page) =>
                page?.data.data.map((product) => (
                    <InfiniteProduct key={product.id} {...product} />
                ))
            )}
            {
                !isLoading && isFetching && <BoxLoading />
            }
        </div>
    );
};

export default InfiniteProducts;
