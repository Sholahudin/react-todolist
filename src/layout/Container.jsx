/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PropTypes, { oneOf } from "prop-types";

const Container = ({
  children,
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  alignContent
}) => {
  const containerStyles = css`
    display: flex;
    flex-direction: ${flexDirection};
    flex-wrap: ${flexWrap};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    align-content: ${alignContent};
  `;

  return (
    <div className="flex-container" css={containerStyles}>
      {children}
    </div>
  );
};

Container.defaultProps = {
  flexDirection: "row",
  flexWrap: "nowrap",
  justifyContent: "flex-start",
  alignItems: "stretch",
  alignContent: "flex-start"
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  flexDirection: oneOf(["row", "row-reverse", "column", "column-reverse"]),
  flexWrap: oneOf(["nowrap", "wrap", "wrap-reverse"]),
  justifyContent: oneOf([
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
    "start",
    "end",
    "left",
    "right"
  ]),
  alignItems: oneOf([
    "stretch",
    "flex-start",
    "flex-end",
    "center",
    "baseline",
    "first baseline",
    "last baseline",
    "start",
    "end",
    "self-start",
    "self-end"
  ]),
  alignContent: oneOf([
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
    "stretch",
    "start",
    "end",
    "baseline",
    "first baseline",
    "last baseline"
  ])
};

export default Container;
