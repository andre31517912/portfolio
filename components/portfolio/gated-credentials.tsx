"use client"

import { useActionState, useState } from "react"
import { sendAccessRequest, type RequestAccessState } from "@/app/actions/request-access"

type Credentials = { email: string; password: string; note?: string }

const initialState: RequestAccessState = { status: "idle", message: "" }

export function GatedCredentials({
  credentials,
  projectName,
}: {
  credentials: Credentials
  projectName: string
}) {
  const [composing, setComposing] = useState(false)
  const [state, formAction, pending] = useActionState(sendAccessRequest, initialState)

  const sent = state.status === "success"

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card/40">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <LockIcon />
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {composing ? "Compose — request demo access" : "Demo login — access on request"}
        </span>
      </div>

      {composing ? (
        <div className="px-4 py-5">
          {sent ? (
            <div className="flex flex-col items-center gap-3 py-8 text-center">
              <CheckIcon />
              <p className="text-pretty text-sm text-foreground">{state.message}</p>
              <button
                type="button"
                onClick={() => setComposing(false)}
                className="font-mono text-xs text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
              >
                Back to demo login
              </button>
            </div>
          ) : (
            <form action={formAction} className="flex flex-col gap-4">
              <input type="hidden" name="projectName" value={projectName} />

              <div className="flex flex-col gap-1.5">
                <label htmlFor="rq-name" className="text-xs font-medium text-muted-foreground">
                  Your name
                </label>
                <input
                  id="rq-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Jane Smith"
                  className="rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="rq-email" className="text-xs font-medium text-muted-foreground">
                  Your email
                </label>
                <input
                  id="rq-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="jane@company.com"
                  className="rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="rq-message" className="text-xs font-medium text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="rq-message"
                  name="message"
                  required
                  rows={4}
                  defaultValue={`Hi Andre, could you share demo login access for ${projectName}? A bit about me: `}
                  className="resize-y rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent"
                />
              </div>

              {state.status === "error" ? (
                <p role="alert" className="text-sm text-destructive">
                  {state.message}
                </p>
              ) : null}

              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  disabled={pending}
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <SendIcon />
                  {pending ? "Sending…" : "Send request"}
                </button>
                <button
                  type="button"
                  onClick={() => setComposing(false)}
                  className="font-mono text-xs text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      ) : (
        <div className="relative">
          {/* The actual credentials, blurred out. aria-hidden so screen readers
              don't read the gated values aloud. */}
          <dl
            aria-hidden="true"
            className="select-none px-4 py-5 blur-sm"
            style={{ userSelect: "none" }}
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:gap-3">
              <dt className="w-24 shrink-0 text-sm text-muted-foreground">Email</dt>
              <dd className="font-mono text-sm text-foreground">{credentials.email}</dd>
            </div>
            <div className="mt-3 flex flex-col gap-1 sm:flex-row sm:gap-3">
              <dt className="w-24 shrink-0 text-sm text-muted-foreground">Password</dt>
              <dd className="font-mono text-sm text-foreground">{credentials.password}</dd>
            </div>
          </dl>

          {/* Overlay lock + CTA */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-background/40 px-4 text-center">
            <p className="max-w-xs text-pretty text-sm text-foreground">
              {credentials.note ?? "Login details are hidden. Message me to request access."}
            </p>
            <button
              type="button"
              onClick={() => setComposing(true)}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              <LockIcon />
              Request access
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

function LockIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="text-accent"
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}

function SendIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="text-accent"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="m9 11 3 3L22 4" />
    </svg>
  )
}
