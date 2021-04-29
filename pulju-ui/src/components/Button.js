import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ButtonEl = styled.button`
  border: none;
  padding: 8px;
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
