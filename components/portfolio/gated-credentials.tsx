"use client"

type Credentials = { email: string; password: string; note?: string }

export function GatedCredentials({
  credentials,
  projectName,
  contactEmail,
}: {
  credentials: Credentials
  projectName: string
  contactEmail: string
}) {
  const subject = encodeURIComponent(`Demo access request — ${projectName}`)
  const body = encodeURIComponent(
    `Hi Andre,\n\nCould you share demo login access for ${projectName}? A bit about me:\n\n`,
  )
  const mailto = `mailto:${contactEmail}?subject=${subject}&body=${body}`

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card/40">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <LockIcon />
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Demo login — access on request
        </span>
      </div>

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
            {credentials.note ?? "Login details are hidden. Email me to request access."}
          </p>
          <a
            href={mailto}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            <LockIcon />
            Request access
          </a>
        </div>
      </div>
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
