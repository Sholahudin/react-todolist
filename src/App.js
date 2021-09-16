import React from "react";
import "./styles.css";
import { ThemeProvider } from "@emotion/react";
import Todolist from "./pages/TodolistClass";

const theme = {
  color: {
    primary: {
      black: "#484848",
      red: "#e06262"
    }
  },
  font: {
    primary: "Homemade Apple",
    secondary: "Bungee"
  },
  background: {
    color: {
      primary: "#f2eecb"
    }
  }
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Todolist />
    </ThemeProvider>
  );
}
