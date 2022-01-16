import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;

    @media screen and (max-width: 800px) {
        padding: 0;
        flex-direction: column;
    }

    @media screen and (max-width: 650px) {
    }
`;
