import type { Link } from "@/lib/link.ts"
import {
  IconBrandBluesky,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconMail,
  IconRss,
  IconUser
} from "@tabler/icons-preact"

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
      "Computer engineering student and open source developer, I build things, take a look at my work!"
  },
  links: [
    {
      title: "Visit my website",
      url: "https://4ster.dev",
      icon: IconUser
    },
    {
      title: "View my GitHub",
      url: "https://github.com/4ster-light",
      icon: IconBrandGithub
    },
    {
      title: "Subscribe on Substack",
      url: "https://4sterlight.substack.com",
      icon: IconRss
    },
    {
      title: "Follow on BlueSky",
      url: "https://bsky.app/profile/4ster-light.bsky.social",
      icon: IconBrandBluesky
    },
    {
      title: "Follow on Twitter",
      url: "https://x.com/4ster_light",
      icon: IconBrandTwitter
    },
    {
      title: "Connect on LinkedIn",
      url: "https://linkedin.com/in/4ster",
      icon: IconBrandLinkedin
    },
    {
      title: "Send me an email",
      url: "mailto:me@4ster.dev",
      icon: IconMail
    }
  ]
} satisfies ProfileData
