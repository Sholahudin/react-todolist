/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PropTypes, { oneOf } from "prop-types";

const Container = ({ children }) => {
  const containerStyles = css`
    display: flex;
  `;

  return (
    <div className="flex-container" css={containerStyles}>
      {children}
    </div>
  );
};

Container.propTypes = {
  flexDirection: oneOf(["row", "row-reverse", "column", "column-reverse"])
};

export default Container;
