import { css } from "@emotion/react";

export const container = () =>
  css`
    width: 600px;
    height: 800px;
    background-color: #f2eecb;
    border-radius: 4px;

    padding: 32px;
  `;

export const frame = () =>
  css`
    border: 1px solid var(--main-black-color);
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `;
