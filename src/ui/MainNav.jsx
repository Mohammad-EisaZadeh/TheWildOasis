import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import {
  HiOutlineCalendar,
  HiOutlineCog6Tooth,
  HiOutlineCog8Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Link = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active svg,
  &.active svg {
    ${(props) =>
      props.color === "blue" &&
      css`
        color: var(--color-blue-700);
      `}
    ${(props) =>
      props.color === "green" &&
      css`
        color: var(--color-green-700);
      `}
      ${(props) =>
      props.color === "red" &&
      css`
        color: var(--color-red-700);
      `}
      ${(props) =>
      props.color === "indigo" &&
      css`
        color: var(--color-indigo-700);
      `}
      ${(props) =>
      props.color === "yellow" &&
      css`
        color: var(--color-yellow-700);
      `}
  }
`;
function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <Link color="blue" to="/dashboard">
            <HiOutlineHome />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link color="green" to="/bookings">
            <HiOutlineCalendar />
            <span>bookings</span>
          </Link>
        </li>
        <li>
          <Link color="red" to="/cabins">
            <HiOutlineHomeModern />
            <span>cabins</span>
          </Link>
        </li>
        <li>
          <Link color="indigo" to="/users">
            <HiOutlineUsers />
            <span>users</span>
          </Link>
        </li>{" "}
        <li>
          <Link color="yellow" to="/settings">
            <HiOutlineCog6Tooth />
            <span>settings</span>
          </Link>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
