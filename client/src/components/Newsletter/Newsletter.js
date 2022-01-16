import * as Styled from "./Newsletter.styled";

import { Send } from "@material-ui/icons";

const Newsletter = () => {
    return (
        <Styled.Container>
            <Styled.Title>Newsletter</Styled.Title>
            <Styled.Desc>
                Get timely updates from your favorite products.
            </Styled.Desc>
            <Styled.InputContainer>
                <Styled.Input placeholder="Your email" />
                <Styled.Button>
                    <Send />
                </Styled.Button>
            </Styled.InputContainer>
        </Styled.Container>
    );
};

export default Newsletter;
