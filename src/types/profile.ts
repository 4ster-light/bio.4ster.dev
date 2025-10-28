type LucideIconName = keyof typeof import("lucide-vue-next")

export type Link = {
  url: string
  title: string
  icon: LucideIconName
}

export type Profile = {
  name: string
  bio: string
}

export type ProfileData = {
  profile: Profile
  links: Link[]
}
