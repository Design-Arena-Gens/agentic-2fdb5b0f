export default function Home() {
  return (
    <main className="relative flex min-h-screen items-stretch justify-center overflow-hidden bg-gradient-to-b from-abyss via-black to-gloom">
      <div className="noise-overlay pointer-events-none absolute inset-0" />

      <div className="relative z-10 flex w-full max-w-7xl flex-col gap-24 px-6 py-16 lg:px-12 xl:py-24">
        <header className="flex flex-col gap-4 text-center md:text-left">
          <p className="text-sm uppercase tracking-[0.4em] text-ectoplasm/70">
            Spectral Duality
          </p>
          <h1 className="text-4xl font-light leading-tight tracking-wide text-white/95 md:text-6xl lg:text-7xl">
            Between worlds, terror waits on both sides of the veil.
          </h1>
          <p className="max-w-2xl text-base text-white/60 md:text-lg">
            A cinematic horror tableau contrasting an ethereal apparition with a
            hyper-real visage, drenched in ominous light and suffocating shadow.
          </p>
        </header>

        <section className="grid gap-16 md:grid-cols-2 md:gap-10">
          <div className="group relative flex min-h-[28rem] items-center justify-center overflow-visible">
            <div className="absolute inset-0 scale-105 bg-gradient-to-b from-ectoplasm/25 via-transparent to-transparent blur-3xl transition-all duration-1000 group-hover:scale-110 group-hover:blur-[120px]" />

            <div className="relative isolate flex h-[28rem] w-full max-w-[520px] items-center justify-center overflow-visible rounded-[32%_38%_46%_40%] bg-gradient-to-b from-ectoplasm/14 via-white/4 to-transparent shadow-spectral ring-1 ring-white/8 backdrop-blur-2xl md:h-[32rem]">
              <div className="absolute inset-6 rounded-[44%_52%_60%_48%] border border-ectoplasm/18" />
              <div className="absolute -top-6 h-32 w-32 -translate-x-1/2 rounded-full bg-gradient-to-b from-white/20 via-ectoplasm/40 to-transparent blur-3xl mix-blend-screen opacity-70" />
              <div className="absolute inset-0">
                <div className="absolute left-1/2 top-[22%] h-24 w-24 -translate-x-1/2 rounded-full bg-ectoplasm/25 blur-[36px] mix-blend-screen" />
                <div className="absolute left-1/2 top-[22%] h-24 w-24 -translate-x-1/2 rounded-full bg-white/30 mix-blend-screen opacity-70" />
                <div className="absolute left-[32%] top-[30%] h-8 w-8 rounded-full bg-white/40 mix-blend-screen blur-sm opacity-80" />
                <div className="absolute right-[32%] top-[30%] h-8 w-8 rounded-full bg-white/40 mix-blend-screen blur-sm opacity-80" />
                <div className="absolute left-1/2 top-[46%] h-16 w-[40%] -translate-x-1/2 rounded-full bg-gradient-to-b from-white/25 via-ectoplasm/30 to-transparent blur-[32px] opacity-80" />
                <div className="absolute left-1/2 top-[56%] h-[34%] w-[46%] -translate-x-1/2 rounded-[50%] border border-white/12 bg-gradient-to-b from-white/8 via-ectoplasm/10 to-transparent blur-md opacity-80" />
                <div className="absolute inset-x-[28%] bottom-[14%] h-28 rounded-full bg-gradient-to-t from-ectoplasm/16 via-transparent to-transparent blur-[40px] mix-blend-screen" />
              </div>

              <div className="absolute inset-6 rounded-[50%_60%_58%_52%] border border-white/10 shadow-[inset_0_0_60px_rgba(224,244,255,0.12)]" />
              <div className="absolute inset-x-10 bottom-6 h-24 rounded-full bg-gradient-to-t from-ectoplasm/24 via-ectoplasm/12 to-transparent blur-[48px] opacity-70" />

              <div className="absolute inset-0 animate-pulseSlow rounded-[32%_38%_46%_40%] bg-gradient-to-b from-white/7 via-ectoplasm/10 to-transparent mix-blend-screen" />
              <div className="absolute inset-[18%] animate-shimmer rounded-[48%_52%_58%_48%] border border-white/12" />
            </div>

            <div className="pointer-events-none absolute -left-6 top-12 h-20 w-20 rounded-full bg-ectoplasm/30 blur-3xl opacity-40 mix-blend-screen md:-left-10" />
            <div className="pointer-events-none absolute -right-4 -top-10 h-24 w-24 rounded-full bg-ectoplasm/25 blur-[72px] opacity-50 mix-blend-screen" />
          </div>

          <div className="group relative flex min-h-[28rem] items-center justify-center overflow-visible">
            <div className="absolute inset-0 translate-x-4 scale-100 bg-gradient-to-br from-[#140709] via-transparent to-transparent blur-3xl opacity-70 transition-all duration-[1600ms] group-hover:translate-x-2 group-hover:scale-105 group-hover:blur-[120px]" />

            <div className="relative isolate flex h-[28rem] w-full max-w-[520px] items-stretch justify-center overflow-hidden rounded-[38%_32%_42%_44%] bg-gradient-to-br from-black via-[#140d11] to-[#240709] shadow-abyssal ring-1 ring-black/80 md:h-[32rem]">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/4 to-transparent mix-blend-overlay opacity-20" />

              <div className="pointer-events-none absolute -right-16 top-16 h-32 w-32 rounded-full bg-bloodlit/20 blur-[90px] opacity-60" />
              <div className="pointer-events-none absolute -left-20 bottom-12 h-28 w-28 rounded-full bg-[#320913]/40 blur-[110px] opacity-50" />

              <div className="relative flex-1 bg-gradient-to-br from-[#080405] via-[#0c0608] to-[#18070b]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_32%,rgba(255,180,180,0.12)_0,rgba(0,0,0,0.02)_40%,transparent_68%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_38%,rgba(252,120,120,0.22)_0,rgba(0,0,0,0)_45%)] mix-blend-screen opacity-80" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_72%,rgba(120,20,35,0.6)_0,rgba(10,3,6,0.1)_45%,transparent_70%)] opacity-80" />

                <div className="absolute left-[35%] top-[32%] h-8 w-16 rounded-full bg-gradient-to-b from-white/30 via-white/18 to-black/30 blur-[8px] opacity-80 shadow-[0_20px_50px_10px_rgba(0,0,0,0.9)]" />
                <div className="absolute right-[34%] top-[32%] h-8 w-16 rounded-full bg-gradient-to-b from-white/30 via-white/18 to-black/30 blur-[8px] opacity-80 shadow-[0_20px_50px_10px_rgba(0,0,0,0.9)]" />

                <div className="absolute left-[34%] top-[36%] h-10 w-9 rounded-full bg-gradient-to-br from-black via-[#1a0a0f] to-transparent opacity-90 shadow-[inset_0_0_12px_rgba(255,120,120,0.65)]" />
                <div className="absolute right-[34%] top-[36%] h-10 w-9 rounded-full bg-gradient-to-br from-black via-[#1a0a0f] to-transparent opacity-90 shadow-[inset_0_0_12px_rgba(255,120,120,0.65)]" />

                <div className="absolute left-[41%] top-[44%] h-[5px] w-[18%] rounded-full bg-gradient-to-r from-[#3b090f] via-[#70131d] to-[#3b090f] shadow-[0_0_40px_rgba(255,60,90,0.4)]" />

                <div className="absolute left-[36%] top-[48%] h-[18%] w-[28%] rounded-[42%_48%_62%_58%] bg-gradient-to-br from-[#2a040d] via-[#4f0d16] to-[#160408] shadow-[inset_0_0_18px_rgba(255,90,110,0.4)]" />
                <div className="absolute left-[32%] top-[50%] h-[38%] w-[40%] rounded-[60%_44%_56%_46%] bg-gradient-to-br from-[#120305] via-[#21060c] to-transparent shadow-[0_40px_80px_rgba(0,0,0,0.9)] opacity-80" />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_0,transparent_70%)] mix-blend-overlay" />
                <div className="absolute inset-[18%] rounded-[44%_38%_48%_52%] border border-white/5" />
                <div className="absolute inset-0 animate-flicker rounded-[38%_32%_42%_44%] bg-[radial-gradient(circle_at_52%_18%,rgba(255,140,140,0.14)_0,rgba(0,0,0,0)_36%)]" />
              </div>
            </div>
          </div>
        </section>

        <footer className="grid gap-3 text-xs uppercase tracking-[0.35em] text-white/35 md:grid-cols-3">
          <span className="border-t border-white/10 pt-4">Phantom Luminance</span>
          <span className="border-t border-white/10 pt-4 text-center">Human Horror</span>
          <span className="border-t border-white/10 pt-4 text-right">Cinematic Void</span>
        </footer>
      </div>
    </main>
  );
}
