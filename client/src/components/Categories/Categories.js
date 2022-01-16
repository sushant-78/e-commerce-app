import * as Styled from "./Categories.styled";
import { categories } from "../../data";
import CategoryItem from "../CategoryItem/CategoryItem";

const Categories = () => {
    return (
        <div id="categories" name="myScrollToElement">
            <Styled.Container>
                {categories.map((item) => (
                    <CategoryItem item={item} key={item.id} />
                ))}
            </Styled.Container>
        </div>
    );
};

export default Categories;
