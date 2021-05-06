import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ButtonEl = styled.button`
  border: none;
  font-size: 1rem;
  padding: calc((3rem - 1em) / 2) 1rem;
  ${(props) => {
    switch (props.intent) {
      case "primary":
        return `
          background-color: ${props.theme.colorPrimary};
          color: ${props.theme.colorPrimaryText};
        `;
      case "secondary":
        return `
        background-color: ${props.theme.colorSecondary};
        color: ${props.theme.colorSecondaryText};
      `;
      default:
        return "";
    }
  }}
  min-width: 3rem;
`;

export const Button = ({ label, ...props }) => {
  return (
    <ButtonEl type="button" {...props}>
      {label}
    </ButtonEl>
  );
};

Button.propTypes = {
  /**
   * Type of the button
   */
  intent: PropTypes.oneOf(["primary", "secondary", "default"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  intent: "default",
  onClick: undefined,
};
