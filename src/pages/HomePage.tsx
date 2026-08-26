import { CodeXml } from 'lucide-react'

function HomePage() {
  return (
    <main className="page-container flex min-h-dvh flex-col justify-center">
      <p className="mb-3 inline-flex items-center gap-2 text-sm font-medium tracking-wide text-muted-foreground uppercase">
        <CodeXml aria-hidden="true" className="size-4" />
        Software Engineer
      </p>
      <h1>Biozid Bhuiyan Tonoy</h1>
      <p className="mt-4 max-w-prose text-muted-foreground sm:text-lg">
        Portfolio site foundation is in place. Sections will be added in later
        issues.
      </p>
    </main>
  )
}

export default HomePage
