"use server"

import { Resend } from "resend"

// The recipient lives only on the server and is never sent to the browser.
const RECIPIENT = "wuandre6@gmail.com"

export type RequestAccessState = {
  status: "idle" | "success" | "error"
  message: string
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export async function sendAccessRequest(
  _prevState: RequestAccessState,
  formData: FormData,
): Promise<RequestAccessState> {
  const projectName = String(formData.get("projectName") ?? "").trim()
  const name = String(formData.get("name") ?? "").trim()
  const fromEmail = String(formData.get("email") ?? "").trim()
  const message = String(formData.get("message") ?? "").trim()

  if (!name || !fromEmail || !message) {
    return { status: "error", message: "Please fill in your name, email, and a short message." }
  }

  if (!isValidEmail(fromEmail)) {
    return { status: "error", message: "That email address doesn't look right. Please check it." }
  }

  if (message.length > 5000) {
    return { status: "error", message: "That message is a bit too long. Please shorten it." }
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return { status: "error", message: "Email isn't configured right now. Please try again later." }
  }

  const resend = new Resend(apiKey)
  const subjectProject = projectName || "your portfolio"

  try {
    const { error } = await resend.emails.send({
      // Resend's shared onboarding sender works without domain setup.
      from: "Portfolio <onboarding@resend.dev>",
      to: RECIPIENT,
      replyTo: fromEmail,
      subject: `Demo access request — ${subjectProject}`,
      text: [
        `New demo access request for ${subjectProject}`,
        "",
        `Name: ${name}`,
        `Email: ${fromEmail}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    })

    if (error) {
      console.log("[v0] Resend error:", error)
      return { status: "error", message: "Something went wrong sending your message. Please try again." }
    }

    return { status: "success", message: "Message sent. I'll get back to you shortly." }
  } catch (err) {
    console.log("[v0] sendAccessRequest exception:", err)
    return { status: "error", message: "Something went wrong sending your message. Please try again." }
  }
}
