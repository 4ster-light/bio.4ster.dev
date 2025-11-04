import { Coffee, Github, Globe, Linkedin, type LucideIcon, Mail, Twitter } from "lucide-vue-next"

export type Link = {
  title: string
  url: string
  icon: LucideIcon
}

export type ProfileData = {
  profile: {
    name: string
    bio: string
  }
  links: Link[]
}

export default {
  profile: {
    name: "✰λster✰",
    bio:
      "Computer engineering student and systems/web programmer, I build things, take a look at my work!"
  },
  links: [
    {
      title: "Check out my website",
      url: "https://4ster.dev",
      icon: Globe
    },
    {
      title: "Take a look at my GitHub",
      url: "https://github.com/4ster-light",
      icon: Github
    },
    {
      title: "Check out my Ko-fi page",
      url: "https://ko-fi.com/4ster",
      icon: Coffee
    },
    {
      title: "See me on X/Twitter",
      url: "https://x.com/4ster_light",
      icon: Twitter
    },
    {
      title: "See me on LinkedIn",
      url: "https://linkedin.com/in/4ster",
      icon: Linkedin
    },
    {
      title: "Mail Me",
      url: "mailto:me@4ster.dev",
      icon: Mail
    }
  ]
} satisfies ProfileData
