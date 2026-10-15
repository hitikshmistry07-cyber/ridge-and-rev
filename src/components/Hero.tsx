import React from 'react';
import { ArrowRight, Compass, Fuel, Mountain, ShieldCheck, MapPin } from 'lucide-react';
import heroImg from '../assets/images/himalaya_moto_hero_1792025542461.jpg';

interface HeroProps {
  onExploreClick: () => void;
  onOpenEstimator: () => void;
  onOpenFeatured: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreClick,
  onOpenEstimator,
  onOpenFeatured,
}) => {
  return (
    <section className="relative pt-6 pb-14 lg:pt-10 lg:pb-16 overflow-hidden border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Split: Typography Left, High-Res Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="text-xs font-semibold tracking-wider text-amber-500 uppercase mb-3">
              Field-Tested Expeditions · Trans-Himalayan &amp; Coastal Corridors
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight lg:leading-[1.15] text-balance mb-5 font-heading">
              Motorcycle Expeditions Across the Indian Subcontinent
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mb-8">
              From 18,000-foot permafrost passes in Ladakh and the unbridged riverbeds of Spiti to the 70 hairpin switchbacks of Kolli Hills and the salt flats of Kutch. Real GPS waypoints, fuel logistics realities, altitude acclimatization profiles, and raw journey logs.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-zinc-950 bg-amber-500 hover:bg-amber-400 transition-colors shadow-sm whitespace-nowrap shrink-0"
              >
                <span>Browse All 10 Expeditions</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenEstimator}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition-colors whitespace-nowrap shrink-0"
              >
                <Fuel className="w-4 h-4 text-amber-400" />
                <span>Fuel &amp; Range Estimator</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Container at Matching Height */}
          <div className="lg:col-span-5 relative group">
            <div className="relative h-72 sm:h-96 lg:h-full min-h-[340px] rounded-2xl overflow-hidden border border-zinc-800/80 bg-zinc-900 shadow-xl">
              <img
                src={heroImg}
                alt="Adventure motorcyclist overlooking high Himalayan mountain pass in Ladakh with touring motorcycle and aluminium panniers at sunrise"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-left">
                <div className="text-xs text-zinc-400 flex items-center gap-2 mb-1">
                  <span>Featured Expedition</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-amber-400 font-mono">18,380 ft / 5,359 m</span>
                </div>
                <div className="text-sm font-semibold text-white truncate">
                  Khardung La &amp; Manali-Leh Highway
                </div>
                <button
                  onClick={onOpenFeatured}
                  className="mt-2 text-xs font-medium text-amber-400 hover:text-amber-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Read Full Route Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Proof & Quantitative Rigor Strip Below Split */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 text-left">
          <div className="space-y-0.5">
            <div className="text-xs text-zinc-400">Total Distance Logged</div>
            <div className="text-2xl font-bold font-mono text-white tabular-nums tracking-tight">
              12,800+ km
            </div>
            <div className="text-xs text-zinc-400">Field-verified GPS tracks</div>
          </div>

          <div className="space-y-0.5 border-l border-zinc-800/80 pl-4 sm:pl-6">
            <div className="text-xs text-zinc-400">Detailed Expeditions</div>
            <div className="text-2xl font-bold font-mono text-amber-400 tabular-nums tracking-tight">
              10 Guides
            </div>
            <div className="text-xs text-zinc-400">Complete route breakdown</div>
          </div>

          <div className="space-y-0.5 border-l border-zinc-800/80 pl-4 sm:pl-6">
            <div className="text-xs text-zinc-400">Extreme High Passes</div>
            <div className="text-2xl font-bold font-mono text-white tabular-nums tracking-tight">
              7 Passes &ge; 14k ft
            </div>
            <div className="text-xs text-zinc-400">Khardung La, Tanglang, Kunzum</div>
          </div>

          <div className="space-y-0.5 border-l border-zinc-800/80 pl-4 sm:pl-6">
            <div className="text-xs text-zinc-400">Terrain Verification</div>
            <div className="text-2xl font-bold font-mono text-white tabular-nums tracking-tight">
              100% Ridden
            </div>
            <div className="text-xs text-zinc-400">No desk-researched routes</div>
          </div>
        </div>
      </div>
    </section>
  );
};
