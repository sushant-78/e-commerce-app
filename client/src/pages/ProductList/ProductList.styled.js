import styled from "styled-components";

export const Container = styled.div``;

export const Title = styled.h1`
    margin: 20px;
`;

export const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Filter = styled.div`
    margin: 20px;
    @media screen and (max-width: 500px) {
        display: flex;
        width: 0px 20px;
        flex-direction: column;
    }
`;

export const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    @media screen and (max-width: 500px) {
        margin-right: 0;
    }
`;

export const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    @media screen and (max-width: 500px) {
        margin: 10px 0;
    }
`;

export const Option = styled.option``;
