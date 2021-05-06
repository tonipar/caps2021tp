import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "./Button";

export const Menu = styled.ul.attrs({ role: "menubar" })`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;

  @media only screen and (max-width: 768px) {
    display: none;
    position: absolute;
    left: 0;
    top: 5.75rem;
    background: ${(props) => props.theme.colorPrimaryDark};
    width: 100%;
    flex-direction: column;
  }
`;

export const NavEl = styled.nav`
  > ${Menu} {
    ${(props) => (props.open ? "display: flex" : "")}
  }
`;

const ToggleButton = styled(Button)`
  display: none;

  @media only screen and (max-width: 768px) {
    display: initial;
  }
`;
export const MenuLink = styled.a.attrs({ role: "menuitem" })`
  color: ${(props) => props.theme.colorPrimaryText};
  text-decoration: none;
  line-height: 1.75rem;
  font-size: 1.5rem;

  @media only screen and (max-width: 768px) {
    height: 3rem;
    line-height: 3rem;
    margin: 0.5rem 0;
  }
`;
export const MenuLinkWrapper = styled.li.attrs({ role: "none" })`
  margin: 0 1rem;
`;
export const MenuItem = (props) => (
  <MenuLinkWrapper>
    <MenuLink href={props.href}>{props.children}</MenuLink>
  </MenuLinkWrapper>
);

export const Nav = ({ children, ...props }) => {
  const [open, setOpen] = useState(false);
  return (
    <NavEl open={open} {...props}>
      <ToggleButton
        label="☰"
        onClick={() => setOpen(!open)}
        aria-label="Open menu"
        aria-expanded={open}
      />
      {children}
    </NavEl>
  );
};
