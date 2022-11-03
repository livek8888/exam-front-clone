import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faHouse,
  faMagnifyingGlass,
  faRectangleList,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Nav() {
  return (
    <Navigation>
      <NaviUl>
        <NaviList>
          <NavigationLink href="/">
            <FontAwesomeIcon icon={faHouse} size="2x" color="#3c3c3c" />
          </NavigationLink>
        </NaviList>
        <NaviList>
          <NavigationLink href="/">
            <Icons icon={faRectangleList} size="2x" color="lightgray" />
          </NavigationLink>
        </NaviList>
        <NaviList>
          <NavigationLink href="/">
            <Plus src="/images/plus.png" />
          </NavigationLink>
        </NaviList>
        <NaviList>
          <NavigationLink href="/">
            <Icons icon={faMagnifyingGlass} size="2x" color="lightgray" />
          </NavigationLink>
        </NaviList>
        <NaviList>
          <NavigationLink href="/">
            <Icons icon={faUser} size="2x" color="lightgray" />
          </NavigationLink>
        </NaviList>
      </NaviUl>
    </Navigation>
  );
}

const Plus = styled.img`
  position: absolute;
  bottom: -43px;
  width: 90px;
  height: 90px;
`;

const Icons = styled(FontAwesomeIcon)`
  transition: all 0.5s;
  &:hover {
    filter: invert();
  }
`;

const Navigation = styled.nav`
  box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.1);
  z-index: 2;
  position: fixed;
  bottom: 0px;
  width: 100%;
  min-width: 320px;
  max-width: 770px;
  height: 75px;
  background-color: white;
`;

const NaviUl = styled.ul`
  position: relative;
  padding: 5px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;
  width: 100%;
`;

const NaviList = styled.li``;

const NavigationLink = styled(Link)`
  display: flex;
  justify-content: center;
`;
