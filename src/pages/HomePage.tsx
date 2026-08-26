import { CodeXml } from 'lucide-react'

function HomePage() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-3xl flex-col justify-center px-6 py-16">
      <p className="mb-3 inline-flex items-center gap-2 text-sm font-medium tracking-wide text-zinc-500 uppercase">
        <CodeXml aria-hidden="true" className="size-4" />
        Software Engineer
      </p>
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
        Biozid Bhuiyan Tonoy
      </h1>
      <p className="mt-4 max-w-prose text-base leading-relaxed text-zinc-600 sm:text-lg">
        Portfolio site foundation is in place. Sections will be added in later
        issues.
      </p>
    </main>
  )
}

export default HomePage
