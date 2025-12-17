import type { ComponentType } from "preact"

export interface Link {
  title: string
  url: string
  icon: ComponentType<{ size?: string | number }>
}

export function normaliseLink(url: string): string {
  if (url.startsWith("http")) return url.replace(/^https?:\/\//, "")
  else if (url.startsWith("mailto:")) return url.replace(/^mailto:/, "")
  else return url
}
