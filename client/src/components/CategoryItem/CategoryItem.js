import * as Styled from "./CategoryItem.styled";
import { Link } from "react-router-dom";

const CategoryItem = ({ item }) => {
    return (
        <Link to={`/products/${item.cat}`}>
            <Styled.Container>
                <Styled.Image src={item.img} />
                <Styled.Info>
                    <Styled.Title>{item.title}</Styled.Title>
                    <Styled.Button>SHOP NOW</Styled.Button>
                </Styled.Info>
            </Styled.Container>
        </Link>
    );
};

export default CategoryItem;
