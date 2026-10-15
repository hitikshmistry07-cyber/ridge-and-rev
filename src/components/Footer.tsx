import React, { useState } from 'react';
import { Compass, Mail, Check, ArrowRight, Github, Rocket } from 'lucide-react';
import { Region } from '../types/blog';

interface FooterProps {
  onSelectRegion: (region: Region) => void;
  onOpenDeployGuide: () => void;
  onOpenChecklist: () => void;
  onOpenEstimator: () => void;
  onSelectPostBySlug: (slug: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectRegion,
  onOpenDeployGuide,
  onOpenChecklist,
  onOpenEstimator,
  onSelectPostBySlug,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950 text-zinc-400 text-left pt-14 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-zinc-800/80">
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500">
                <Compass className="w-4 h-4" />
              </div>
              <span className="font-heading font-extrabold text-lg tracking-tight text-white">
                RIDGE &amp; REV
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm">
              The premier open-access motorcycle travel publication across India. Documenting high passes, desert tracks, and coastal corridors with real GPS waypoints, mechanical advisories, and rider logs.
            </p>
            <div className="pt-1 text-xs text-zinc-400 font-mono">
              Designed &amp; Maintained by Expedition Scouts
            </div>
          </div>

          {/* Quick Regions (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold text-zinc-200 uppercase tracking-wider">
              Regions
            </div>
            <ul className="space-y-2 text-xs">
              {(['Himalayas', 'Western Ghats', 'Desert & Salt', 'Coastal', 'Northeast'] as Region[]).map((r) => (
                <li key={r}>
                  <button
                    onClick={() => {
                      onSelectRegion(r);
                      const el = document.getElementById('expeditions-grid');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-amber-400 transition-colors"
                  >
                    {r}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Expedition Guides (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold text-zinc-200 uppercase tracking-wider">
              Flagship Expeditions
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onSelectPostBySlug('manali-leh-khardungla')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Khardung La &amp; Manali-Leh (18,380ft)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectPostBySlug('spiti-valley-circuit')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Spiti Middle Land Circuit
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectPostBySlug('sach-pass-pangi-valley')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Sach Pass &amp; Pangi Cliffhangers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectPostBySlug('kolli-hills-70-hairpin-bends')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Kolli Hills 70 Hairpin Bends
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectPostBySlug('rann-of-kutch-dholavira')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Rann of Kutch Road to Heaven
                </button>
              </li>
            </ul>
          </div>

          {/* Tools & Newsletter (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-bold text-zinc-200 uppercase tracking-wider">
              Rider Dispatch
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Receive seasonal road pass opening notifications, water crossing condition bulletins, and GPX route tracks.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="rider@expedition.in"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-md px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-zinc-950 bg-amber-500 hover:bg-amber-400 rounded-md transition-colors"
              >
                {subscribed ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Dispatches Activated</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-3.5 h-3.5" />
                    <span>Join Free Dispatch</span>
                  </>
                )}
              </button>
            </form>

            <div className="pt-2 flex items-center gap-4 text-xs">
              <button
                onClick={onOpenDeployGuide}
                className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-medium"
              >
                <Rocket className="w-3.5 h-3.5" />
                <span>Deploy to Vercel</span>
              </button>
              <button
                onClick={onOpenChecklist}
                className="text-zinc-400 hover:text-zinc-200"
              >
                Pack List
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Clean Typography */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            &copy; 2026 Ridge &amp; Rev. All expedition guides and photography field-tested.
          </div>
          <div className="flex items-center gap-4 text-zinc-400">
            <a href="/sitemap.xml" target="_blank" className="hover:text-zinc-300">
              sitemap.xml
            </a>
            <span aria-hidden="true">·</span>
            <a href="/robots.txt" target="_blank" className="hover:text-zinc-300">
              robots.txt
            </a>
            <span aria-hidden="true">·</span>
            <button onClick={onOpenDeployGuide} className="hover:text-amber-400">
              Vercel Deployment
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
