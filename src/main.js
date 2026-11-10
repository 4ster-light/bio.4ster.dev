import QRCode from "qrcode"
import "./assets/app.css"
import { normaliseLink } from "./lib/link.js"

const dialog = document.querySelector("#qr-dialog")
const dialogTitle = document.querySelector("#qr-title")
const qrImage = document.querySelector("#qr-image")
const qrStatus = document.querySelector("#qr-status")
const closeButton = document.querySelector("#qr-close")
const backdropCloseButton = document.querySelector("#qr-backdrop-close")

closeButton.addEventListener("click", () => dialog.close())
backdropCloseButton.addEventListener("click", () => dialog.close())

for (const button of document.querySelectorAll("[data-qr-url]")) {
  button.addEventListener("click", async () => {
    const url = new URL(button.dataset.qrUrl, window.location.href).href
    const label = button.dataset.qrTitle ?? normaliseLink(url)

    dialogTitle.textContent = normaliseLink(url)
    qrImage.hidden = true
    qrImage.removeAttribute("src")
    qrStatus.hidden = false
    qrStatus.textContent = "Generating QR code..."
    dialog.showModal()

    try {
      const dataUrl = await QRCode.toDataURL(url, {
        width: 260,
        errorCorrectionLevel: "H",
        margin: 1
      })

      qrImage.src = dataUrl
      qrImage.alt = `QR code for ${label}`
      qrImage.hidden = false
      qrStatus.hidden = true
    } catch (error) {
      console.error("Error generating QR code:", error)
      qrStatus.textContent = "Could not generate QR code."
    }
  })
}
