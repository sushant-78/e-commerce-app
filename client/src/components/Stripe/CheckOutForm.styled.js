import styled from "styled-components";

export const GoBackBtn = styled.button`
    display: block;
    align-self: flex-end;
    margin-bottom: 2rem;
    padding: 6px 10px;
    border: 2px solid #000;
    font-size: 1rem;
    background: none;
    cursor: pointer;
    transition: all 5s linear;
`;

export const CheckoutFormContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
`;

export const StripePayForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 5rem;
`;

export const StripePayHeading = styled.h1`
    text-align: center;
    font-size: 2rem;
    margin-bottom: 20px;
`;

export const StripePayElementsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StripePayFormBtn = styled.button`
    display: block;
    align-self: center;
    padding: 1rem 1.2rem;
    border: 2px solid #000;
    font-size: 1.2rem;
    background: none;
    cursor: pointer;
    transition: all 5s linear;
`;

export const CardNumberElementWrapper = styled.div`
    border: 1px solid #000;
    font-size: 1.2rem;
    width: 20rem;
    margin-bottom: 20px;
    padding: 8px 12px;
    @media screen and (max-width: 400px) {
        width: 15rem;
    }
`;

export const CardExpiryElementWrapper = styled.div`
    border: 1px solid #000;
    font-size: 1.2rem;
    width: 20rem;
    margin-bottom: 20px;
    padding: 8px 12px;
    @media screen and (max-width: 400px) {
        width: 15rem;
    }
`;

export const CardCvcElementWrapper = styled.div`
    border: 1px solid #000;
    font-size: 1.2rem;
    width: 20rem;
    margin-bottom: 20px;
    padding: 8px 12px;
    @media screen and (max-width: 400px) {
        width: 15rem;
    }
`;

export const FormLabel = styled.div`
    font-size: 1.2rem;
    margin-bottom: 8px;
`;

export const Error = styled.div`
    font-size: 1.2rem;
    margin-bottom: 8px;
    color: #ff0000;
`;

/*products styles*/

export const Info = styled.div`
    flex: 3;
    margin-bottom: 2rem;
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

    @media screen and (max-width: 400px) {
        margin-bottom: 2rem;
    }
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
    @media screen and (max-width: 400px) {
        margin-bottom: 1rem;
    }
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

/*modal styles*/
export const Modal = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 999;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 150px;
    padding: 1rem;
    background-color: #fff;
    border: 1px solid black;
    border-radius: 2px;

    &::before {
        z-index: 998;
        content: "";
        width: 100%;
        height: 100%;
        background-color: yellow;
    }
`;

export const ModalMessage = styled.div`
    align-self: center;
    font-size: 1.2rem;
`;

export const CloseModal = styled.div`
    align-self: flex-end;
    margin-bottom: 3rem;
    cursor: pointer;
`;
