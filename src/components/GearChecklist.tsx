import React, { useState, useEffect } from 'react';
import { CheckSquare, Square, RefreshCw, X, Shield, Wrench, HeartPulse, FileText, Luggage } from 'lucide-react';

interface ChecklistItem {
  id: string;
  category: 'mechanical' | 'gear' | 'medical' | 'documents' | 'luggage';
  label: string;
  detail: string;
}

const CHECKLIST_ITEMS: ChecklistItem[] = [
  // Mechanical
  { id: 'mech-1', category: 'mechanical', label: 'Spare Clutch & Throttle Cables', detail: 'Taped alongside existing cables for quick roadside routing' },
  { id: 'mech-2', category: 'mechanical', label: '12V Portable Tire Inflator & Gauge', detail: 'Powered via battery SAE terminal or 12V DIN socket' },
  { id: 'mech-3', category: 'mechanical', label: 'Tubeless Repair Plugs & Mushroom Patches', detail: 'With reamer, insertion probe, and CO2 canisters' },
  { id: 'mech-4', category: 'mechanical', label: 'O-Ring Chain Lube & Grunge Brush', detail: 'Apply every 500 km or immediately after river crossings' },
  { id: 'mech-5', category: 'mechanical', label: '1L Top-Up Engine Oil & Funnel', detail: 'High RPMs and altitude cause slight oil burn' },
  { id: 'mech-6', category: 'mechanical', label: 'Master Chain Link & Chain Breaker Tool', detail: 'Essential safeguard against thrown chains' },

  // Gear
  { id: 'gear-1', category: 'gear', label: 'All-Weather Touring Jacket with CE Armor', detail: 'Thermal quilted liner + waterproof membrane' },
  { id: 'gear-2', category: 'gear', label: 'Waterproof Riding Boots', detail: 'Ankle torsion protection with dry membrane for riverbeds' },
  { id: 'gear-3', category: 'gear', label: 'Helmet with Pinlock Anti-Fog Insert', detail: 'Critical for fog, heavy rain, and sub-zero pass climbs' },
  { id: 'gear-4', category: 'gear', label: 'Dual Glove Setup (Summer Mesh + Winter Waterproof)', detail: 'Switch as temperatures drop on pass ascents' },

  // Medical & Altitude
  { id: 'med-1', category: 'medical', label: 'AMS Acclimatization Kit (Acetazolamide/Diamox)', detail: 'Consult physician; start 24h prior to rapid altitude gain' },
  { id: 'med-2', category: 'medical', label: 'Oral Rehydration Salts (ORS) & Electrolytes', detail: 'Thin, dry alpine air dehydrates riders rapidly' },
  { id: 'med-3', category: 'medical', label: 'Broad Spectrum SPF 50+ Sunscreen & Lip Balms', detail: 'UV index at 15,000 ft is double sea-level exposure' },
  { id: 'med-4', category: 'medical', label: 'Trauma Bandage, Betadine, Pain Relievers', detail: 'Fast sterile wound dressings for minor trail abrasions' },

  // Documents
  { id: 'doc-1', category: 'documents', label: 'Physical Laminated Copies of Driving License & RC', detail: 'Do not rely solely on digital Digilocker in zero-signal zones' },
  { id: 'doc-2', category: 'documents', label: 'Valid Pollution Certificate (PUC) & Comprehensive Insurance', detail: 'Required at state border checkpoints' },
  { id: 'doc-3', category: 'documents', label: 'Inner Line Permits (ILP) with 5 Hard Photo Copies', detail: 'Surrendered to military checkposts at Nubra, Pangong, Tawang' },
  { id: 'doc-4', category: 'documents', label: 'Emergency Cash in ₹100 / ₹500 denominations', detail: 'ATMs in high mountain valleys are routinely out of cash' },

  // Luggage
  { id: 'lug-1', category: 'luggage', label: 'IP67 Waterproof Roll-Top Dry Duffels', detail: 'Avoid zippers that leak during torrential downpours' },
  { id: 'lug-2', category: 'luggage', label: 'Heavy Duty Ratchet or Rok Straps', detail: 'Never use cheap elastic bungees that stretch and snap' },
  { id: 'lug-3', category: 'luggage', label: '20,000mAh Low-Temperature Power Bank', detail: 'Sub-zero temperatures drain lithium phone batteries in minutes' }
];

interface GearChecklistProps {
  onClose?: () => void;
  isModal?: boolean;
}

export const GearChecklist: React.FC<GearChecklistProps> = ({ onClose, isModal = false }) => {
  const [checkedIds, setCheckedIds] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('ridge_rev_checklist');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [activeCategory, setActiveCategory] = useState<string>('all');

  useEffect(() => {
    try {
      localStorage.setItem('ridge_rev_checklist', JSON.stringify(checkedIds));
    } catch {
      // storage unavailable
    }
  }, [checkedIds]);

  const toggleItem = (id: string) => {
    setCheckedIds((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const resetAll = () => {
    if (window.confirm('Reset all checklist items?')) {
      setCheckedIds({});
    }
  };

  const totalItems = CHECKLIST_ITEMS.length;
  const packedCount = Object.values(checkedIds).filter(Boolean).length;
  const progressPercent = Math.round((packedCount / totalItems) * 100);

  const filteredItems = activeCategory === 'all'
    ? CHECKLIST_ITEMS
    : CHECKLIST_ITEMS.filter((item) => item.category === activeCategory);

  const content = (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-xs font-semibold text-amber-500 uppercase tracking-wider mb-1">
            Expedition Readiness
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-white">
            Motorcycle Touring Packing Checklist
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Field-tested gear requirements for Himalayan expeditions and cross-country Indian tours. Check off items as you pack.
          </p>
        </div>
        {isModal && onClose && (
          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-md hover:bg-zinc-800"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Progress Bar */}
      <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 text-left">
        <div className="flex items-center justify-between text-xs text-zinc-300 mb-2">
          <span>Packing Completion</span>
          <span className="font-mono font-bold text-amber-400">
            {packedCount} / {totalItems} items ({progressPercent}%)
          </span>
        </div>
        <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
          <div
            className="bg-amber-500 h-full rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        {progressPercent === 100 && (
          <div className="mt-2 text-xs font-semibold text-emerald-400">
            All gear checked! You are 100% prepared to kick-start your expedition.
          </div>
        )}
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center flex-wrap gap-1.5 p-1 bg-zinc-900/80 rounded-lg border border-zinc-800">
        {[
          { key: 'all', label: 'All Items' },
          { key: 'mechanical', label: 'Mechanical & Spares' },
          { key: 'gear', label: 'Riding Armor' },
          { key: 'medical', label: 'AMS & Medical' },
          { key: 'documents', label: 'Permits & Docs' },
          { key: 'luggage', label: 'Dry Luggage' }
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveCategory(tab.key)}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
              activeCategory === tab.key
                ? 'bg-zinc-800 text-amber-400 shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Items List */}
      <div className="space-y-2.5 max-h-[420px] overflow-y-auto pr-1">
        {filteredItems.map((item) => {
          const isChecked = !!checkedIds[item.id];
          return (
            <div
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`flex items-start gap-3 p-3 rounded-lg border transition-all cursor-pointer text-left ${
                isChecked
                  ? 'bg-zinc-900/30 border-zinc-800/50 opacity-70'
                  : 'bg-zinc-900/80 border-zinc-800 hover:border-zinc-700'
              }`}
            >
              <button
                type="button"
                className="mt-0.5 text-amber-500 focus-visible:outline-none"
                aria-label={`Toggle ${item.label}`}
              >
                {isChecked ? (
                  <CheckSquare className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Square className="w-4 h-4 text-zinc-500 hover:text-zinc-300" />
                )}
              </button>
              <div className="flex-1 min-w-0">
                <div
                  className={`text-sm font-semibold transition-colors ${
                    isChecked ? 'line-through text-zinc-400' : 'text-zinc-100'
                  }`}
                >
                  {item.label}
                </div>
                <div className="text-xs text-zinc-400 mt-0.5 leading-relaxed">
                  {item.detail}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Action Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-zinc-800">
        <button
          onClick={resetAll}
          className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-200 transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Reset checklist</span>
        </button>
        <span className="text-xs text-zinc-400">
          Saved automatically to your device
        </span>
      </div>
    </div>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md overflow-y-auto">
        <div className="relative w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl my-8">
          {content}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950/60 border border-zinc-800/80">
      {content}
    </div>
  );
};
