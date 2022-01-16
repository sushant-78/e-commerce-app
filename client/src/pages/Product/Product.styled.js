import styled from "styled-components";

export const Container = styled.div``;

export const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    @media screen and (max-width: 800px) {
        padding: 50px 20px;
    }
    @media screen and (max-width: 600px) {
        padding: 50px 0;
    }
    @media screen and (max-width: 450px) {
        flex-direction: column;
        padding: 50px 10px;
    }
`;

export const ImgContainer = styled.div`
    flex: 1;
    @media screen and (max-width: 600px) {
        flex: 2;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    @media screen and (max-width: 450px) {
        height: 40vh;
        object-fit: contain;
    }
`;

export const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    @media screen and (max-width: 800px) {
        padding: 0 30px;
    }
    @media screen and (max-width: 450px) {
        padding: 10px;
        text-align: center;
    }
`;

export const Title = styled.h1`
    font-weight: 200;
`;

export const Desc = styled.p`
    margin: 20px 0px;
`;

export const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

export const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    @media screen and (max-width: 450px) {
        width: 100%;
        justify-content: center;
    }
`;

export const Filter = styled.div`
    display: flex;
    align-items: center;
`;

export const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;

export const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: 0px 5px;
    cursor: pointer;
`;

export const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

export const FilterSizeOption = styled.option``;

export const AddContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    @media screen and (max-width: 800px) {
    }

    @media screen and (max-width: 600px) {
        flex-direction: column;
        align-items: flex-start;
    }

    @media screen and (max-width: 450px) {
        width: 100%;
        align-items: center;
    }
`;

export const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right: 3rem;
    font-weight: 700;
    @media screen and (max-width: 600px) {
        margin: 0 0 2rem 0;
    }
`;

export const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

export const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover {
        background-color: #f8f4f4;
    }
`;
