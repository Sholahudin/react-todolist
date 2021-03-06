import { css } from "@emotion/react";

export const todo = ({ theme }) =>
  css`
    position: relative;

    flex: 1 0 auto;

    max-height: 34px;
    margin: 16px 0 0;
    font-family: ${theme.font.primary}, sans-serif;
    font-size: 24px;

    border-bottom: 1px solid ${theme.color.primary.black};
  `;

export const todoText = () =>
  css`
    width: 100%;
    height: 50px;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
  `;
