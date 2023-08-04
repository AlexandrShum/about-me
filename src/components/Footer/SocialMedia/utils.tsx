import React from "react"
import { LinkInterface } from "../types"
import { LinkedInIcon, CodeWarsIcon, GitHubIcon } from "../../icons"

export const links: LinkInterface[] = [
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/alexandr-shumakov-8a90a01ab/",
    icon: <LinkedInIcon />
  },
  {
    title: "CodeWars",
    link: "https://www.codewars.com/users/Gematri",
    icon: <CodeWarsIcon />
  },
  {
    title: "GitHub",
    link: "https://github.com/AlexandrShum",
    icon: <GitHubIcon />
  },
]
