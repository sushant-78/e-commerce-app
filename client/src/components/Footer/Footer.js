import * as Styled from "./Footer.styled";
import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
} from "@material-ui/icons";

const Footer = () => {
    return (
        <Styled.Container>
            <Styled.Left>
                <Styled.Logo>E-COMMERCE APP.</Styled.Logo>
                <Styled.Desc>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                </Styled.Desc>
            </Styled.Left>
            <Styled.Center>
                <Styled.Title>Useful Links</Styled.Title>
                <Styled.LinksContainer>
                    <Styled.List>
                        <Styled.ListItem>Home</Styled.ListItem>
                        <Styled.ListItem>Cart</Styled.ListItem>
                        <Styled.ListItem>Terms</Styled.ListItem>
                    </Styled.List>
                    <Styled.SocialContainer>
                        <Styled.SocialIcon color="3B5999">
                            <Facebook />
                        </Styled.SocialIcon>
                        <Styled.SocialIcon color="E4405F">
                            <Instagram />
                        </Styled.SocialIcon>
                        <Styled.SocialIcon color="55ACEE">
                            <Twitter />
                        </Styled.SocialIcon>
                        <Styled.SocialIcon color="E60023">
                            <Pinterest />
                        </Styled.SocialIcon>
                    </Styled.SocialContainer>
                </Styled.LinksContainer>
            </Styled.Center>
            <Styled.Right>
                <Styled.Title>Contact</Styled.Title>
                <Styled.ContactItem>
                    <Room style={{ marginRight: "10px" }} /> 101 random Path ,
                    random city 98336
                </Styled.ContactItem>
                <Styled.ContactItem>
                    <Phone style={{ marginRight: "10px" }} /> +1 234 56 78
                </Styled.ContactItem>
                <Styled.ContactItem>
                    <MailOutline style={{ marginRight: "10px" }} />{" "}
                    contact@random.com
                </Styled.ContactItem>
                <Styled.Payment
                    src={require("../../images/payment.png").default}
                />
            </Styled.Right>
        </Styled.Container>
    );
};

export default Footer;
