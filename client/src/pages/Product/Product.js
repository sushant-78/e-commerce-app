import * as Styled from "./Product.styled";
import { Add, Remove } from "@material-ui/icons";
import { fetchProduct } from "../../redux/apiCalls";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Newsletter from "../../components/Newsletter/Newsletter";

import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { addProduct } from "../../redux/cartRedux";
import { useDispatch } from "react-redux";

const Product = () => {
    const location = useLocation();

    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await fetchProduct(id);
                setProduct(res);
            } catch (e) {
                console.log(e);
            }
        };
        getProduct();
    }, [id]);

    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    };

    const handleClick = () => {
        dispatch(addProduct({ ...product, quantity, color }));
    };

    return (
        <Styled.Container>
            <Navbar />

            <Styled.Wrapper>
                <Styled.ImgContainer>
                    <Styled.Image src={product.img} />
                </Styled.ImgContainer>
                <Styled.InfoContainer>
                    <Styled.Title>{product.title}</Styled.Title>
                    <Styled.Desc>{product.desc}</Styled.Desc>
                    <Styled.Price>$ {product.price}</Styled.Price>
                    <Styled.FilterContainer>
                        <Styled.Filter>
                            <Styled.FilterTitle>Color</Styled.FilterTitle>
                            {product.color?.map((c) => (
                                <Styled.FilterColor
                                    color={c}
                                    key={c}
                                    onClick={() => setColor(c)}
                                />
                            ))}
                        </Styled.Filter>
                    </Styled.FilterContainer>
                    <Styled.AddContainer>
                        <Styled.AmountContainer>
                            <Remove onClick={() => handleQuantity("dec")} />
                            <Styled.Amount>{quantity}</Styled.Amount>
                            <Add onClick={() => handleQuantity("inc")} />
                        </Styled.AmountContainer>
                        <Styled.Button onClick={handleClick}>
                            ADD TO CART
                        </Styled.Button>
                    </Styled.AddContainer>
                </Styled.InfoContainer>
            </Styled.Wrapper>
            <Newsletter />
            <Footer />
        </Styled.Container>
    );
};

export default Product;
