/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PropTypes from "prop-types";

const Container = ({ children }) => {
  const containerStyles = () =>
    css`
      display: flex;
    `;

  return (
    <div className="flex-container" css={containerStyles}>
      {children}
    </div>
  );
};

Container.propTypes = {
  flexDiretion
};

export default Container;
