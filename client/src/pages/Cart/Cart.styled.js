import styled from "styled-components";

export const Container = styled.div``;

export const Wrapper = styled.div`
    padding: 20px;
`;

export const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

export const Top = styled.div`
    padding: 20px;
    @media screen and (max-width: 500px) {
        text-align: center;
    }
`;

export const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) =>
        props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
`;

export const TopTexts = styled.div``;

export const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

export const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`;

export const Info = styled.div`
    flex: 3;
    @media screen and (max-width: 1000px) {
        flex: 2;
    }
`;

export const Product = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    @media screen and (max-width: 500px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const ProductDetail = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    padding: 20px;
    @media screen and (max-width: 800px) {
    }
`;

export const Image = styled.img`
    width: 200px;
`;

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    @media screen and (max-width: 500px) {
        text-align: center;
    }
`;

export const ProductName = styled.span`
    margin-bottom: 2rem;
`;

export const ProductId = styled.span``;

export const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
`;

export const ProductSize = styled.span``;

export const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    @media screen and (max-width: 800px) {
        justify-content: flex-start;
    }
    @media screen and (max-width: 500px) {
        align-items: center;
    }
`;

export const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

export const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`;

export const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`;

export const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;

export const Summary = styled.div`
    flex: 1.5;
    height: 100vh;
    padding: 20px;
    border-left: 1px solid lightgray;

    @media screen and (max-width: 1000px) {
        flex: 1;
    }

    @media screen and (max-width: 800px) {
        border-left: none;
    }
`;

export const SummaryTitle = styled.h1`
    font-weight: 200;
    text-align: center;
`;

export const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props) => props.type === "total" && "500"};
    font-size: ${(props) => props.type === "total" && "24px"};
    @media screen and (max-width: 800px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const SummaryItemText = styled.span`
    @media screen and (max-width: 800px) {
        margin-bottom: 10px;
    }
`;

export const SummaryItemPrice = styled.span``;

export const CheckoutButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    cursor: pointer;

    @media screen and (max-width: 800px) {
        display: block;
        width: 50vw;
        margin: 0 auto;
    }
`;
