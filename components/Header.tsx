import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStore,
  faMagnifyingGlass,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Link from "next/link";

export default function Header() {
  return (
    <Container className="container">
      <Nav>
        <HomeLink href="/">
          <Logo src="/images/logo.png" />
        </HomeLink>
        <Buttons>
          <MyMenu href="/">
            <FontAwesomeIcon icon={faStore} size="xl" color="white" />
          </MyMenu>
          <MyMenu href="/">
            <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" color="white" />
          </MyMenu>
          <MyMenu href="/">
            <New />
            <FontAwesomeIcon icon={faBagShopping} size="xl" color="white" />
          </MyMenu>
        </Buttons>
      </Nav>
      <Images src="/images/20210106161802_1_0.png" />
    </Container>
  );
}

const Container = styled.header`
  position: relative;
  width: 100%;
  height: 374px;
`;

const Nav = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px 0 20px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
  height: 22px;
  padding: 14px 0 14px 0;
`;

const Images = styled.img`
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
  top: 0px;
`;

const HomeLink = styled(Link)`
  background: url(../public/images/logo.png) no-repeat;
  background-size: cover;
  width: 70px;
  height: 14px;
`;

const MyMenu = styled(Link)`
  position: relative;
`;

const Logo = styled.img`
  width: 70px;
  height: 14px;
`;

const New = styled.span`
  position: absolute;
  display: block;
  top: -4px;
  right: -4px;
  width: 9px;
  height: 9px;
  background-color: #ff6969;
  border-radius: 10px;
`;
