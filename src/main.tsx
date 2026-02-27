import { render } from "preact"
import App from "@/App.tsx"
import "@/assets/app.css"

const container = document.getElementById("app") as HTMLElement
render(<App />, container)
