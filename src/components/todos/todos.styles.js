import { css } from "@emotion/react";

export const todoPlaceholderText = ({ theme }) =>
  css`
    font-family: ${theme.font.primary}, sans-serif;
    font-size: 24px;
    text-align: center;
    padding: 16px;
  `;

export const todoPlaceholderTextAddbtn = ({ theme }) =>
  css`
    font-family: ${theme.font.secondary}, sans-serif;
    font-size: 24px;
  `;
