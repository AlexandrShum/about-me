"use client"
import React, { FC } from "react";
import { Box, Typography, useTheme } from "@mui/material";

const Footer: FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        height: "3rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Typography sx={{ color: theme.palette.text.secondary}}>
          {"© 2023 Alexandr Shumakov"}
        </Typography>
    </Box>
  );
};

export default Footer;
