import * as Styled from "./ProductList.styled";

import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";

import { useLocation } from "react-router";
import { useState } from "react";

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        });
    };

    return (
        <Styled.Container>
            <Navbar />

            <Styled.Title>{cat}</Styled.Title>
            <Styled.FilterContainer>
                <Styled.Filter>
                    <Styled.FilterText>Filter Products:</Styled.FilterText>
                    {cat === "jeans" ? (
                        <Styled.Select
                            name="color"
                            defaultValue="Color"
                            onChange={handleFilters}
                        >
                            <Styled.Option value="Color" disabled>
                                Color
                            </Styled.Option>
                            <Styled.Option value="grey">grey</Styled.Option>
                            <Styled.Option value="black">black</Styled.Option>
                            <Styled.Option value="blue">blue</Styled.Option>
                        </Styled.Select>
                    ) : (
                        <Styled.Select
                            name="color"
                            defaultValue="Color"
                            onChange={handleFilters}
                        >
                            <Styled.Option value="Color" disabled>
                                Color
                            </Styled.Option>
                            <Styled.Option value="white">white</Styled.Option>
                            <Styled.Option value="black">black</Styled.Option>
                            <Styled.Option value="red">red</Styled.Option>
                            <Styled.Option value="blue">blue</Styled.Option>
                        </Styled.Select>
                    )}
                </Styled.Filter>
                <Styled.Filter>
                    <Styled.FilterText>Sort Products:</Styled.FilterText>
                    <Styled.Select onChange={(e) => setSort(e.target.value)}>
                        <Styled.Option value="asc">Price (asc)</Styled.Option>
                        <Styled.Option value="desc">Price (desc)</Styled.Option>
                    </Styled.Select>
                </Styled.Filter>
            </Styled.FilterContainer>
            <Products cat={cat} filters={filters} sort={sort} />
            <Newsletter />
            <Footer />
        </Styled.Container>
    );
};

export default ProductList;
