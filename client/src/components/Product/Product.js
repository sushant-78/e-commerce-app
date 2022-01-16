import * as Styled from "./Product.styled";

import { SearchOutlined } from "@material-ui/icons";

import { Link } from "react-router-dom";

const Product = ({ item }) => {
    return (
        <Styled.Container>
            <Styled.Circle />
            <Styled.Image src={item.img} />
            <Styled.Info>
                <Styled.Icon>
                    <Link to={`/product/${item._id}`}>
                        <SearchOutlined />
                    </Link>
                </Styled.Icon>
            </Styled.Info>
        </Styled.Container>
    );
};

export default Product;
