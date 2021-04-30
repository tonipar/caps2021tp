import React from "react";
import styled from "styled-components";

export const Nav = styled.nav``;
export const Menu = styled.ul.attrs({ role: "menubar" })`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;
export const MenuLink = styled.a.attrs({ role: "menuitem" })`
  color: ${(props) => props.theme.colorPrimaryText};
  text-decoration: none;
  line-height: 1.75rem;
  font-size: 1.5rem;
`;
export const MenuLinkWrapper = styled.li.attrs({ role: "none" })`
  margin: 0 1rem;
`;
export const MenuItem = (props) => (
  <MenuLinkWrapper>
    <MenuLink href={props.href}>{props.children}</MenuLink>
  </MenuLinkWrapper>
);
