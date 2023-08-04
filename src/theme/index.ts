"use client"
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    background: {
      default: "#5E503F",
      paper: "#22333B",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#9c9c9c",

    },
    error: {
      main: "#E95656"
    }
  }
})

export default theme;