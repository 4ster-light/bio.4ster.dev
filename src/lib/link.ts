import type { Icon } from "@tabler/icons-preact"

export interface Link {
  title: string
  url: string
  icon: Icon
}

export interface LinkSection {
  title: string
  links: Link[]
}

export function normaliseLink(url: string): string {
  if (url.startsWith("http")) return url.replace(/^https?:\/\//, "")
  else if (url.startsWith("mailto:")) return url.replace(/^mailto:/, "")
  else return url
}
