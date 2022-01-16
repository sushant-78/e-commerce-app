import { useEffect, useState } from "react";
import * as Styled from "./Products.styled";
import { fetchProducts } from "../../redux/apiCalls";
import Product from "../Product/Product";

const Products = ({ cat, filters, sort }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await fetchProducts(cat);
                console.log(data);
                setProducts(data);
            } catch (err) {
                console.log(err);
            }
        };
        getProducts();
    }, [cat]);

    useEffect(() => {
        cat &&
            setFilteredProducts(
                products.filter((item) =>
                    Object.entries(filters).every(([key, value]) =>
                        item[key].includes(value)
                    )
                )
            );
    }, [products, cat, filters]);

    useEffect(() => {
        if (sort === "asc") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.price - b.price)
            );
        } else {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => b.price - a.price)
            );
        }
    }, [sort]);

    return (
        <Styled.Container>
            {cat
                ? filteredProducts.map((item) => (
                      <Product
                          item={item}
                          key={`filtered-product-${item._id}`}
                      />
                  ))
                : products
                      .slice(0, 8)
                      .map((item) => (
                          <Product item={item} key={`product-${item._id}`} />
                      ))}
        </Styled.Container>
    );
};

export default Products;
