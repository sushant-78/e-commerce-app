import * as Styled from "./Navbar.styled";

import { animateScroll as scroll } from "react-scroll";

import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";

import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
    const quantity = useSelector((state) => state.quantity);

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <Styled.Container>
            <Styled.Wrapper>
                <Styled.Left>
                    <Link to="/">
                        <Styled.Logo onClick={scrollToTop}>
                            E-COMMERCE APP.
                        </Styled.Logo>
                    </Link>
                </Styled.Left>
                <Styled.Right>
                    <NavLink to="/cart">
                        <Styled.MenuItem>
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCartOutlined />
                            </Badge>
                        </Styled.MenuItem>
                    </NavLink>
                </Styled.Right>
            </Styled.Wrapper>
        </Styled.Container>
    );
};

export default Navbar;
