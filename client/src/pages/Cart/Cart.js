import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import * as Styled from "./Cart.styled";

import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

import { useNavigate } from "react-router-dom";

const Cart = () => {
    const cart = useSelector((state) => state);

    let navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigate("/checkout");
    };

    return (
        <Styled.Container>
            <Navbar />
            <Styled.Wrapper>
                <Styled.Title>YOUR BAG</Styled.Title>
                <Styled.Top>
                    <Link to="/">
                        <Styled.TopButton>CONTINUE SHOPPING</Styled.TopButton>
                    </Link>
                </Styled.Top>
                <Styled.Bottom>
                    <Styled.Info>
                        {cart.products.map((product) => (
                            <Styled.Product key={product._id}>
                                <Styled.Image src={product.img} />
                                <Styled.ProductDetail>
                                    <Styled.Details>
                                        <Styled.ProductName>
                                            <b>Product:</b> {product.title}
                                        </Styled.ProductName>
                                        <Styled.ProductId>
                                            <b>ID:</b> {product._id}
                                        </Styled.ProductId>
                                        <Styled.ProductColor
                                            color={product.color}
                                        />
                                    </Styled.Details>
                                    <Styled.PriceDetail>
                                        <Styled.ProductAmountContainer>
                                            <Styled.ProductAmount>
                                                {product.quantity}
                                            </Styled.ProductAmount>
                                        </Styled.ProductAmountContainer>
                                        <Styled.ProductPrice>
                                            $ {product.price * product.quantity}
                                        </Styled.ProductPrice>
                                    </Styled.PriceDetail>
                                </Styled.ProductDetail>
                            </Styled.Product>
                        ))}
                        <Styled.Hr />
                    </Styled.Info>
                    <Styled.Summary>
                        <Styled.SummaryTitle>ORDER SUMMARY</Styled.SummaryTitle>
                        <Styled.SummaryItem>
                            <Styled.SummaryItemText>
                                Subtotal
                            </Styled.SummaryItemText>
                            <Styled.SummaryItemPrice>
                                $ {cart.total}
                            </Styled.SummaryItemPrice>
                        </Styled.SummaryItem>
                        <Styled.SummaryItem>
                            <Styled.SummaryItemText>
                                Estimated Shipping
                            </Styled.SummaryItemText>
                            <Styled.SummaryItemPrice>
                                $ 5.90
                            </Styled.SummaryItemPrice>
                        </Styled.SummaryItem>
                        <Styled.SummaryItem>
                            <Styled.SummaryItemText>
                                Shipping Discount
                            </Styled.SummaryItemText>
                            <Styled.SummaryItemPrice>
                                $ -5.90
                            </Styled.SummaryItemPrice>
                        </Styled.SummaryItem>
                        <Styled.SummaryItem type="total">
                            <Styled.SummaryItemText>
                                Total
                            </Styled.SummaryItemText>
                            <Styled.SummaryItemPrice>
                                $ {cart.total}
                            </Styled.SummaryItemPrice>
                        </Styled.SummaryItem>

                        <Styled.CheckoutButton
                            disabled={!cart.total}
                            onClick={handleClick}
                        >
                            CHECKOUT NOW
                        </Styled.CheckoutButton>
                    </Styled.Summary>
                </Styled.Bottom>
            </Styled.Wrapper>
            <Footer />
        </Styled.Container>
    );
};

export default Cart;
