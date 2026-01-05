import type { Link } from "@/lib/link.ts"
import { Github, Globe, Linkedin, Mail, Twitter, User } from "lucide-preact"

export interface ProfileData {
  profile: {
    name: string
    bio: string
  }
  links: Link[]
}

export interface ProfileData {
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
      title: "Visit my website",
      url: "https://4ster.dev",
      icon: Globe
    },
    {
      title: "View my GitHub",
      url: "https://github.com/4ster-light",
      icon: Github
    },
    {
      title: "Follow on BlueSky",
      url: "https://bsky.app/profile/4ster-light.bsky.social",
      icon: User
    },
    {
      title: "Follow on X/Twitter",
      url: "https://x.com/4ster_light",
      icon: Twitter
    },
    {
      title: "Connect on LinkedIn",
      url: "https://linkedin.com/in/4ster",
      icon: Linkedin
    },
    {
      title: "Send me an email",
      url: "mailto:me@4ster.dev",
      icon: Mail
    }
  ]
} satisfies ProfileData
