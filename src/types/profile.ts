export type Link = {
  title: string
  url: string
  icon: string
}

export type Profile = {
  name: string
  bio: string
}

export type ProfileData = {
  profile: Profile
  links: Link[]
}
