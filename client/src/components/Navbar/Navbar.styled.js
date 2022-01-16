import styled from "styled-components";

export const Container = styled.div`
    position: sticky;
    top: 0;
    z-index: 999;
    height: 35px;
    padding: 10px 20px;
    background-color: #fff;
    -webkit-box-shadow: 0px 0px 10px -1px #404040;
    box-shadow: 0px 0px 10px -1px #404040;

    @media screen and (max-width: 400px) {
        padding: 10px 16px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-between;
`;

export const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    @media screen and (max-width: 500px) {
        flex: 3;
    }
`;

export const Logo = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
`;

export const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`;
