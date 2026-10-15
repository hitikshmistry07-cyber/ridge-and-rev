import React, { useState } from 'react';
import { Compass, Menu, X, Rocket, MapPin } from 'lucide-react';

interface NavbarProps {
  currentView: 'home' | 'post';
  onNavigateHome: () => void;
  onSelectRegion?: (region: string) => void;
  onOpenDeployGuide: () => void;
  onOpenChecklist: () => void;
  onOpenCalculator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigateHome,
  onSelectRegion,
  onOpenDeployGuide,
  onOpenChecklist,
  onOpenCalculator,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (action: () => void) => {
    action();
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Wordmark Brand */}
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-2.5 text-left group shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
            aria-label="Ridge & Rev Home"
          >
            <div className="w-8 h-8 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 group-hover:bg-amber-500/20 transition-colors">
              <Compass className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg tracking-tight text-white group-hover:text-amber-400 transition-colors whitespace-nowrap">
                RIDGE &amp; REV
              </span>
            </div>
          </button>

          {/* Zone 2: 4-5 Clean Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-300">
            <button
              onClick={() => {
                onNavigateHome();
                const el = document.getElementById('expeditions-grid');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              Expeditions
            </button>
            <button
              onClick={() => {
                onNavigateHome();
                if (onSelectRegion) onSelectRegion('Himalayas');
                const el = document.getElementById('expeditions-grid');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              Himalayas
            </button>
            <button
              onClick={onOpenCalculator}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              Route Estimator
            </button>
            <button
              onClick={onOpenChecklist}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              Rider Checklist
            </button>
            <button
              onClick={onOpenDeployGuide}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 text-amber-400/90 hover:text-amber-300"
            >
              <Rocket className="w-3.5 h-3.5" />
              <span>Deploy Guide</span>
            </button>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            {currentView === 'post' ? (
              <button
                onClick={onNavigateHome}
                className="px-4 py-2 text-xs font-semibold text-zinc-950 bg-amber-500 hover:bg-amber-400 rounded-md transition-colors whitespace-nowrap shrink-0 shadow-sm"
              >
                All 10 Routes
              </button>
            ) : (
              <button
                onClick={() => {
                  const el = document.getElementById('expeditions-grid');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-4 py-2 text-xs font-semibold text-zinc-950 bg-amber-500 hover:bg-amber-400 rounded-md transition-colors whitespace-nowrap shrink-0 shadow-sm"
              >
                Explore Routes
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-400 hover:text-white rounded-md hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-800 bg-zinc-950/98 px-4 pt-3 pb-6 space-y-3">
          <button
            onClick={() =>
              handleNavClick(() => {
                onNavigateHome();
                const el = document.getElementById('expeditions-grid');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              })
            }
            className="block w-full text-left py-2 text-base font-medium text-zinc-200 hover:text-amber-400"
          >
            All Expeditions
          </button>
          <button
            onClick={() =>
              handleNavClick(() => {
                onNavigateHome();
                if (onSelectRegion) onSelectRegion('Himalayas');
                const el = document.getElementById('expeditions-grid');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              })
            }
            className="block w-full text-left py-2 text-base font-medium text-zinc-200 hover:text-amber-400"
          >
            Himalayan Passes
          </button>
          <button
            onClick={() => handleNavClick(onOpenCalculator)}
            className="block w-full text-left py-2 text-base font-medium text-zinc-200 hover:text-amber-400"
          >
            Route Fuel &amp; Gear Estimator
          </button>
          <button
            onClick={() => handleNavClick(onOpenChecklist)}
            className="block w-full text-left py-2 text-base font-medium text-zinc-200 hover:text-amber-400"
          >
            Rider Packing Checklist
          </button>
          <button
            onClick={() => handleNavClick(onOpenDeployGuide)}
            className="flex items-center gap-2 w-full text-left py-2 text-base font-medium text-amber-400"
          >
            <Rocket className="w-4 h-4" />
            Vercel Deployment Guide
          </button>
          <div className="pt-2 border-t border-zinc-800">
            <button
              onClick={() =>
                handleNavClick(() => {
                  onNavigateHome();
                  const el = document.getElementById('expeditions-grid');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                })
              }
              className="w-full text-center py-2.5 px-4 text-xs font-semibold text-zinc-950 bg-amber-500 rounded-md"
            >
              Explore 10 Routes
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
