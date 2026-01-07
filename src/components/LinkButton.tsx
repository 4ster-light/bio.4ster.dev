import { useState } from "preact/hooks"
import { IconLink, IconQrcode } from "@tabler/icons-preact"
import { type Link, normaliseLink } from "@/lib/link.ts"
import QRCodeDialog from "@/components/QRCodeDialog.tsx"

const IconSize = 25 as const

export default function LinkButton({ title, url, icon: IconComponent = IconLink }: Link) {
  const [showQRModal, setShowQRModal] = useState(false)
  const tooltipUrl = normaliseLink(url)

  return (
    <>
      <div class="flex gap-2">
        <a
          href={url}
          data-tip={tooltipUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-primary sm:tooltip sm:tooltip-left flex-1 h-13 shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 text-sm sm:text-base"
        >
          <IconComponent size={IconSize} />
          <span>{title}</span>
        </a>

        {/* QR Button */}
        <button
          type="button"
          onClick={() => setShowQRModal(true)}
          data-tip="Show QR code"
          class="btn btn-primary btn-lg sm:tooltip sm:tooltip-right h-13 w-16 shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center"
        >
          {/* Fix for scaling issue */}
          <span style="transform: scale(1.1);">
            <IconQrcode size={IconSize} />
          </span>
        </button>
      </div>

      <QRCodeDialog
        open={showQRModal}
        title={title}
        url={url}
        onClose={() => setShowQRModal(false)}
      />
    </>
  )
}
