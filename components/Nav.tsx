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
import { useState } from "react";

export default function Nav() {
  return (
    <Navigation>
      <NaviUl>
        <NaviList>
          <NavigationLink href="/">
            <Icons icon={faHouse} size="2x" color="#3c3c3c" />
          </NavigationLink>
        </NaviList>
        <NaviList>
          <NavigationLink href="/">
            <Icons icon={faRectangleList} size="2x" color="lightgray" />
          </NavigationLink>
        </NaviList>
        <NaviList>
          <NavigationLink href="/">
            <FontAwesomeIcon icon={faCirclePlus} size="3x" color="#f27fb4" />
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

const Icons = styled(FontAwesomeIcon)`
  transition: all 0.5s;
  &:hover {
    filter: invert();
  }
`;

const Navigation = styled.nav`
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
  padding: 0;
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
