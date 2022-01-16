import styled from "styled-components";

export const Container = styled.div`
    display: flex;

    @media screen and (max-width: 650px) {
        flex-direction: column;
    }
`;

export const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

export const Logo = styled.h1`
    font-size: 1.5rem;
`;

export const Desc = styled.p`
    margin: 20px 0px;
`;

export const Center = styled.div`
    flex: 1;
    padding: 20px;
`;

export const LinksContainer = styled.div`
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 400px) {
        flex-direction: column;
    }
`;

export const Title = styled.h3`
    margin-bottom: 30px;
`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 0;
    margin-right: 5rem;
    padding: 0;
    list-style: none;

    @media screen and (max-width: 400px) {
        flex-direction: row;
    }
`;

export const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

export const SocialContainer = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 650px) {
        flex-direction: row;
    }
`;

export const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;

    @media screen and (max-width: 650px) {
        margin-bottom: 0;
        margin-right: 1rem;
    }
`;

export const Right = styled.div`
    flex: 1;
    padding: 20px;

    @media screen and (max-width: 400px) {
        background-color: #fff8f8;
    }
`;

export const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

export const Payment = styled.img`
    width: 50%;
`;
