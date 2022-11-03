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
    <Container>
      <Nav>
        <NavContainer>
          <HomeLink href="/">
            <Logo src="/images/logo.png" />
          </HomeLink>
          <Buttons>
            <MyMenu href="/">
              <Icon icon={faStore} size="xl" color="black" />
            </MyMenu>
            <MyMenu href="/">
              <Icon icon={faMagnifyingGlass} size="xl" color="black" />
            </MyMenu>
            <MyMenu href="/">
              <New />
              <Icon icon={faBagShopping} size="xl" color="black" />
            </MyMenu>
          </Buttons>
        </NavContainer>
      </Nav>
      <Banner src="/images/live_commerce_collaboration_banner.png" />
    </Container>
  );
}

const Container = styled.header`
  position: relative;
  width: 100%;
  height: 374px;
`;

const Nav = styled.div`
  z-index: 10;
  position: fixed;
  padding: 20px 20px 0 20px;
  width: 100%;
`;

const NavContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 730px;
  min-width: 280px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  height: 22px;
  padding: 14px 0 14px 0;
`;

const Banner = styled.img`
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

const Icon = styled(FontAwesomeIcon)``;
