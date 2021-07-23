/** @jsxImportSource @emotion/react */
import PropTypes from "prop-types";
import Button from "../button/ButtonNoJSX";
import { jsx, useTheme } from "@emotion/react";

// import styles from "./header.module.css";
import * as styles from "./header.styles";
import Container from "../../layout/Container";
import Item from "../../layout/Item";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  const theme = useTheme();
  return jsx(
    "section",
    {
      className: "header-component"
    },
    jsx(
      Container,
      {
        alignItems: "flex-start"
      },
      jsx(
        Item, //item pertama
        {
          flex: 1
        },
        jsx(Button, {
          text: showAdd ? "Finish" : "Add",
          onClick: showAddToggle,
          align: "left"
        })
      ),
      jsx(
        Item, //item kedua
        {
          flex: 2
        },
        jsx(
          "h1",
          {
            css: styles.headerTitle(theme)
          },
          "Todo Lists"
        )
      ),
      jsx(
        Item, //item ketiga
        {
          flex: 1,
          align: "right"
        },
        jsx(Button, {
          text: "Clear",
          color: "red",
          onClick: clearTodos,
          align: "right"
        })
      )
    )
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
