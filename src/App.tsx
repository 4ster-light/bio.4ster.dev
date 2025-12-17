import type { Link } from "@/lib/link.ts"
import Data, { type ProfileData } from "@/lib/data.ts"
import LinkButton from "@/components/LinkButton.tsx"
import { ThemeController } from "@/components/ThemeController.tsx"

const data: ProfileData = Data

export default function App() {
  return (
    <>
      <ThemeController />
      <div class="min-h-screen flex items-center justify-center p-4 md:bg-linear-to-br from-primary/20 via-base-100 to-secondary/20">
        <div class="w-full max-w-md space-y-6">
          {/* Profile Section */}
          <div class="text-center space-y-4">
            {/* Avatar */}
            <div class="avatar">
              <div class="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4">
                <img src="/pfp.jpg" alt="Profile Picture" />
              </div>
            </div>

            {/* Name and Bio */}
            <div class="space-y-2">
              <h1 class="text-2xl font-bold text-base-content">{data.profile.name}</h1>
              <p class="text-base-content/70 text-sm">{data.profile.bio}</p>
            </div>
          </div>

          {/* Links Section */}
          <div class="space-y-4">
            {data.links.map((link: Link) => (
              <LinkButton
                key={link.title}
                title={link.title}
                url={link.url}
                icon={link.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
