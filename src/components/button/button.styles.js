import { css } from "@emotion/react";

export const button = ({ color, align }) => {
  let textColor;

  switch (color) {
    case "black":
      textColor = "#484848";
      break;
    case "red":
      textColor = "#e06262";
      break;
    default:
      textColor = "#484848";
  }

  return css`
    color: ${textColor};
    text-align: ${align};

    font-size: 1.8rem;
    font-family: "Bungee", sans-serif;
    width: 24%;
    padding: 16px;
    cursor: pointer;
    background: unset;
    border: unset;
    outline: unset;
  `;
};
