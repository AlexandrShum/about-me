import React, { FC } from "react";
import { Box, Link } from "@mui/material";

import { links } from "./utils";

export const SocialMediaLinks: FC = () => {

  if (!links.length) {
    return null
  }

  return (
    <Box
      sx={{
        display: "flex",
        width: "30%"
      }}
    >
      {links.map((item, i) => (
        <Box
          key={i}
          sx={{
            width: "3rem",
            ":hover": {
              width: "3.2rem",
              transition: "0.2s"
            }
          }}
        >
          <Link
            href={item.link}
            rel="noreferrer"
            target="_blank"
          >
            {item.icon}
          </Link>
        </Box>
      ))}
    </Box>
  )
}
