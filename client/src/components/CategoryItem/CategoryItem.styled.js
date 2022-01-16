import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
    background-color: rgba(0, 0, 0, 0.8);
    @media screen and (max-width: 800px) {
        height: 40vh;
        margin: 0;
    }
`;

export const Link = styled.a`
    display: block;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.4);
`;

export const Title = styled.h1`
    margin-bottom: 20px;
    text-align: center;
    color: white;
`;

export const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
`;
