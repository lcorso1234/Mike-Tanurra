export default function Home() {
  const phoneDisplay = "773.287.3716";
  const phoneHref = "+17732873716";
  const noiseTexture =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='.3'/%3E%3C/svg%3E";

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-12 text-slate-100">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url("${noiseTexture}")`,
          mixBlendMode: "screen",
        }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_55%)] opacity-60" />

      <article className="relative w-full max-w-sm overflow-hidden rounded-[36px] border border-white/10 bg-black/60 px-7 py-8 text-slate-100 shadow-[0_40px_80px_rgba(0,0,0,0.65)] backdrop-blur-3xl">
        <div
          className="pointer-events-none absolute inset-0 rounded-[36px]"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0))",
            opacity: 0.3,
          }}
        />

        <div className="relative space-y-8">
          <header className="rounded-3xl border border-white/10 bg-[#353E43]/85 px-6 py-6 shadow-inner shadow-black/40">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-200/80">
              Chromium Industries LLC.
            </p>
            <h1 className="mt-4 text-3xl font-semibold leading-tight text-white">
              Mike Tannura
            </h1>
            <p className="text-sm text-slate-200/80">President</p>
          </header>

          <section className="space-y-6 px-1">
            <p className="text-sm text-slate-300">
              Save Chromium Industries LLC. to your contacts so Mike is always a
              tap away.
            </p>

            <dl className="space-y-4 text-sm">
              <div className="flex items-baseline justify-between">
                <dt className="text-slate-400">Company</dt>
                <dd className="text-right font-medium text-slate-100">
                  Chromium Industries LLC.
                </dd>
              </div>
              <div className="flex items-baseline justify-between">
                <dt className="text-slate-400">Title</dt>
                <dd className="text-right font-medium text-slate-100">
                  President
                </dd>
              </div>
              <div className="flex items-baseline justify-between">
                <dt className="text-slate-400">Phone</dt>
                <dd>
                  <a
                    className="text-right font-semibold text-white underline decoration-white/30 underline-offset-4 transition hover:text-slate-200"
                    href={`tel:${phoneHref}`}
                  >
                    {phoneDisplay}
                  </a>
                </dd>
              </div>
              <div className="flex flex-wrap items-baseline gap-2">
                <dt className="text-slate-400">Email</dt>
                <dd className="flex-1 text-right">
                  <a
                    className="font-semibold text-white underline decoration-white/30 underline-offset-4 transition hover:text-slate-200"
                    href="mailto:mtannura@chormiumind.com"
                  >
                    mtannura@chormiumind.com
                  </a>
                </dd>
              </div>
            </dl>

            <a
              href="/mike-tannura.vcf"
              download
              className="cta-button mt-2 flex items-center justify-center rounded-2xl bg-white/90 px-6 py-4 text-base font-semibold text-slate-900 transition hover:bg-white"
            >
              Save Contact
            </a>

            <p className="text-center text-xs text-slate-400">
              Compatible with iOS & Android contact apps.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
