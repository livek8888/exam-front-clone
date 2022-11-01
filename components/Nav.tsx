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
      <NavigationLink href="/">
        <FontAwesomeIcon icon={faHouse} size="2x" color="black" />
      </NavigationLink>
      <NavigationLink href="/">
        <FontAwesomeIcon icon={faRectangleList} size="2x" color="black" />
      </NavigationLink>
      <NavigationLink href="/">
        <FontAwesomeIcon icon={faCirclePlus} size="3x" color="#f27fb4" />
      </NavigationLink>
      <NavigationLink href="/">
        <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" color="black" />
      </NavigationLink>
      <NavigationLink href="/">
        <FontAwesomeIcon icon={faUser} size="2x" color="black" />
      </NavigationLink>
    </Navigation>
  );
}

const Navigation = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 75px;
`;

const NavigationLink = styled(Link)``;
