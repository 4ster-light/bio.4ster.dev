import { useEffect, useState } from "preact/hooks"
import QRCode from "qrcode"
import { normaliseLink } from "@/lib/link.ts"

interface QRCodeDialogProps {
  open: boolean
  title: string
  url: string
  onClose: () => void
}

export default function QRCodeDialog({ open, title, url, onClose }: QRCodeDialogProps) {
  const [qrDataUrl, setQrDataUrl] = useState<string>("")
  const titleUrl = normaliseLink(url)

  useEffect(() => {
    if (open && url) {
      QRCode.toDataURL(url, { width: 260, errorCorrectionLevel: "H", margin: 1 })
        .then((dataUrl: string) => setQrDataUrl(dataUrl))
        .catch((err: unknown) => console.error("Error generating QR code:", err))
    }
  }, [open, url])

  if (!open) return null

  return (
    <dialog open class="modal modal-bottom sm:modal-middle">
      <div class="modal-box w-full max-w-sm mx-auto">
        <h3 class="font-bold text-2xl text-center">{titleUrl}</h3>

        <div class="flex justify-center items-center my-8">
          {qrDataUrl
            ? (
              <img
                src={qrDataUrl}
                alt={`QR code for ${title}`}
                class="w-64 h-64"
              />
            )
            : <p class="text-base-content/50">Generating QR code...</p>}
        </div>

        <button
          type="button"
          onClick={onClose}
          class="btn w-full"
        >
          Close
        </button>
      </div>

      <form method="dialog" class="modal-backdrop">
        <button type="button" onClick={onClose}>close</button>
      </form>
    </dialog>
  )
}
