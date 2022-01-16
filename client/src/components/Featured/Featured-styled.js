import styled from "styled-components";

export const Feature = styled.div`
    display: flex;
    height: 80vh;
`;

export const FeaturedImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40vw;
    height: 100%;
    background-color: #${(props) => props.bg};
    @media screen and (max-width: 600px) {
        display: none;
    }
`;

export const FeaturedTextContainer = styled.div`
    width: 60vw;
    display: flex;
    padding: 0 4rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: left;
    @media screen and (max-width: 600px) {
        width: 100vw;
        background-color: #${(props) => props.bg};
    }
`;

export const FeaturedImage = styled.img`
    margin-left: 0;
    height: 80%;
`;

export const FeaturedTitle = styled.h1`
    align-self: flex-start;
    font-size: 4rem;
    @media screen and (max-width: 800px) {
        font-size: 3.5rem;
    }
`;

export const FeaturedDesc = styled.p`
    align-self: flex-start;
    margin-top: 0;
    margin-bottom: 2.5rem;
    font-size: 1.8rem;
    @media screen and (max-width: 800px) {
        font-size: 1.5rem;
    }
`;

export const FeatureBtn = styled.button`
    display: block;
    align-self: flex-start;
    padding: 1rem 1.2rem;
    border: 2px solid #000;
    font-size: 1.2rem;
    background: none;
    cursor: pointer;
    transition: all 5s linear;
    @media screen and (max-width: 800px) {
        font-size: 1rem;
    }
`;
