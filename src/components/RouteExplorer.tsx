import React, { useState } from 'react';
import { BlogPost } from '../types/blog';
import { Fuel, Gauge, AlertTriangle, CheckCircle, ShieldAlert, Sparkles, X } from 'lucide-react';

interface BikeSpec {
  name: string;
  tankCapacityL: number;
  averageMileageKmpl: number;
  engineType: string;
  recommendedOil: string;
  idealTirePressure: string;
}

const BIKES: Record<string, BikeSpec> = {
  'himalayan-450': {
    name: 'Royal Enfield Himalayan 450',
    tankCapacityL: 17,
    averageMileageKmpl: 28,
    engineType: '452cc Liquid-Cooled Sherpa Single',
    recommendedOil: '10W-40 Fully Synthetic',
    idealTirePressure: '22 PSI Front / 32 PSI Rear (Cold Mountain)'
  },
  'ktm-390-adv': {
    name: 'KTM 390 Adventure',
    tankCapacityL: 14.5,
    averageMileageKmpl: 29,
    engineType: '399cc DOHC Liquid-Cooled Single',
    recommendedOil: '10W-50 Ester Synthetic',
    idealTirePressure: '24 PSI Front / 30 PSI Rear'
  },
  'xpulse-200': {
    name: 'Hero Xpulse 200 4V',
    tankCapacityL: 13,
    averageMileageKmpl: 38,
    engineType: '199cc Oil-Cooled 4V Single',
    recommendedOil: '10W-30 Semi-Synthetic',
    idealTirePressure: '21 PSI Front / 26 PSI Rear (Off-road)'
  },
  'interceptor-650': {
    name: 'Royal Enfield Interceptor 650',
    tankCapacityL: 13.7,
    averageMileageKmpl: 23,
    engineType: '648cc Parallel Twin Air/Oil Cooled',
    recommendedOil: '10W-50 Semi-Synthetic',
    idealTirePressure: '32 PSI Front / 36 PSI Rear (Touring)'
  },
  'scrambler-400x': {
    name: 'Triumph Scrambler 400X',
    tankCapacityL: 13,
    averageMileageKmpl: 28,
    engineType: '398cc Liquid-Cooled DOHC Single',
    recommendedOil: '10W-40 Fully Synthetic',
    idealTirePressure: '26 PSI Front / 32 PSI Rear'
  },
  'classic-350': {
    name: 'Royal Enfield Classic 350 (J-Series)',
    tankCapacityL: 13,
    averageMileageKmpl: 34,
    engineType: '349cc Air/Oil-Cooled SOHC Single',
    recommendedOil: '15W-50 Semi-Synthetic',
    idealTirePressure: '22 PSI Front / 32 PSI Rear'
  }
};

interface RouteExplorerProps {
  posts: BlogPost[];
  initialPostId?: string;
  onClose?: () => void;
  isModal?: boolean;
}

export const RouteExplorer: React.FC<RouteExplorerProps> = ({
  posts,
  initialPostId,
  onClose,
  isModal = false,
}) => {
  const [selectedPostId, setSelectedPostId] = useState<string>(initialPostId || posts[0]?.id || '');
  const [selectedBikeKey, setSelectedBikeKey] = useState<string>('himalayan-450');
  const [fuelPricePerLiter, setFuelPricePerLiter] = useState<number>(102);

  const activePost = posts.find((p) => p.id === selectedPostId) || posts[0];
  const activeBike = BIKES[selectedBikeKey];

  const estimatedFuelLiters = Math.ceil(activePost.distanceKm / activeBike.averageMileageKmpl);
  const estimatedFuelCost = estimatedFuelLiters * fuelPricePerLiter;
  const singleTankRange = Math.round(activeBike.tankCapacityL * activeBike.averageMileageKmpl);

  // High-altitude or remote pass fuel risk calculation
  const hasExtremeFuelGap = activePost.slug === 'manali-leh-khardungla' || activePost.slug === 'sach-pass-pangi-valley' || activePost.slug === 'zanskar-shinku-la-padum';
  const fuelGapKm = activePost.slug === 'manali-leh-khardungla' ? 365 : activePost.slug === 'sach-pass-pangi-valley' ? 170 : 140;
  const needsAuxiliaryFuel = singleTankRange < fuelGapKm + 50;
  const extraLitersNeeded = needsAuxiliaryFuel
    ? Math.ceil((fuelGapKm + 50 - singleTankRange) / activeBike.averageMileageKmpl) + 3
    : 0;

  const content = (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-xs font-semibold text-amber-500 uppercase tracking-wider mb-1">
            Logistics Tool
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-white">
            Expedition Fuel &amp; Range Estimator
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Calculate accurate fuel requirements, auxiliary jerry can needs, and telemetry based on real Indian terrain conditions.
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

      {/* Selectors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Route Selector */}
        <div>
          <label className="block text-xs font-medium text-zinc-300 mb-1.5">
            Select Expedition Route
          </label>
          <select
            value={selectedPostId}
            onChange={(e) => setSelectedPostId(e.target.value)}
            className="w-full bg-zinc-900 border border-zinc-700/80 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            {posts.map((p) => (
              <option key={p.id} value={p.id}>
                {p.title} ({p.distanceKm} km · {p.region})
              </option>
            ))}
          </select>
        </div>

        {/* Motorcycle Model Selector */}
        <div>
          <label className="block text-xs font-medium text-zinc-300 mb-1.5">
            Select Motorcycle Spec
          </label>
          <select
            value={selectedBikeKey}
            onChange={(e) => setSelectedBikeKey(e.target.value)}
            className="w-full bg-zinc-900 border border-zinc-700/80 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            {Object.entries(BIKES).map(([key, bike]) => (
              <option key={key} value={key}>
                {bike.name} ({bike.tankCapacityL}L tank, ~{bike.averageMileageKmpl} km/l)
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Fuel Price Adjuster */}
      <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
        <div className="flex items-center justify-between text-xs text-zinc-300 mb-2">
          <span>Assumed Fuel Rate (INR / Liter)</span>
          <span className="font-mono font-bold text-amber-400">₹{fuelPricePerLiter}/L</span>
        </div>
        <input
          type="range"
          min={92}
          max={118}
          value={fuelPricePerLiter}
          onChange={(e) => setFuelPricePerLiter(Number(e.target.value))}
          className="w-full accent-amber-500 bg-zinc-800 h-1.5 rounded-lg cursor-pointer"
        />
        <div className="flex justify-between text-[11px] text-zinc-400 mt-1">
          <span>Delhi / Chandigarh (₹94/L)</span>
          <span>Himachal / Ladakh (₹102-₹106/L)</span>
          <span>Remote Jerry Can Premium (₹115/L)</span>
        </div>
      </div>

      {/* Output Metric Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-3.5 rounded-lg bg-zinc-900/90 border border-zinc-800">
          <div className="text-[11px] text-zinc-400">Total Route Distance</div>
          <div className="text-xl font-bold font-mono text-white mt-1">
            {activePost.distanceKm} km
          </div>
          <div className="text-[11px] text-zinc-400 mt-0.5">{activePost.region}</div>
        </div>

        <div className="p-3.5 rounded-lg bg-zinc-900/90 border border-zinc-800">
          <div className="text-[11px] text-zinc-400">Est. Fuel Consumption</div>
          <div className="text-xl font-bold font-mono text-amber-400 mt-1">
            ~{estimatedFuelLiters} L
          </div>
          <div className="text-[11px] text-zinc-400 mt-0.5">at {activeBike.averageMileageKmpl} km/l avg</div>
        </div>

        <div className="p-3.5 rounded-lg bg-zinc-900/90 border border-zinc-800">
          <div className="text-[11px] text-zinc-400">Est. Fuel Cost</div>
          <div className="text-xl font-bold font-mono text-white mt-1">
            ₹{estimatedFuelCost.toLocaleString('en-IN')}
          </div>
          <div className="text-[11px] text-zinc-400 mt-0.5">INR total fuel budget</div>
        </div>

        <div className="p-3.5 rounded-lg bg-zinc-900/90 border border-zinc-800">
          <div className="text-[11px] text-zinc-400">Single Tank Safe Range</div>
          <div className="text-xl font-bold font-mono text-white mt-1">
            ~{singleTankRange} km
          </div>
          <div className="text-[11px] text-zinc-400 mt-0.5">{activeBike.tankCapacityL}L main capacity</div>
        </div>
      </div>

      {/* Real World Fuel Logistics Advisory */}
      {hasExtremeFuelGap ? (
        <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-600/40 text-left">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-bold text-amber-300">
                Critical Fuel Alert for {activePost.title.split(':')[0]}
              </div>
              <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
                There is a continuous stretch of <strong>{fuelGapKm} kilometers</strong> with zero commercial petrol pumps. Your bike&apos;s realistic single-tank range is ~{singleTankRange} km.
              </p>
              {needsAuxiliaryFuel ? (
                <div className="mt-2 text-xs font-semibold text-amber-200">
                  Recommendation: Carry a minimum of {extraLitersNeeded}L auxiliary fuel in certified metal jerry cans mounted to your pannier racks.
                </div>
              ) : (
                <div className="mt-2 text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4" />
                  <span>Your tank capacity theoretically covers this stretch, but carrying a 5L safety buffer is strongly advised for headwind and detour margins.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800 text-left flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div className="text-xs text-zinc-300">
            <div className="font-semibold text-zinc-100">Standard Fuel Availability</div>
            <div>
              Reliable petrol stations are spaced comfortably along this corridor. No auxiliary fuel jerry cans required.
            </div>
          </div>
        </div>
      )}

      {/* Mechanical Spec Card for Selected Motorcycle */}
      <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 text-left">
        <div className="text-xs font-semibold text-zinc-200 mb-2">
          Mechanical Preparation for {activeBike.name}:
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-zinc-400">
          <div>
            <span className="text-zinc-400 block">Engine &amp; Oil:</span>
            <span className="font-mono text-zinc-200">{activeBike.recommendedOil}</span>
          </div>
          <div>
            <span className="text-zinc-400 block">Cold Tire Pressure:</span>
            <span className="font-mono text-zinc-200">{activeBike.idealTirePressure}</span>
          </div>
          <div>
            <span className="text-zinc-400 block">Recommended Spares:</span>
            <span className="text-zinc-200">Clutch cable, 15A fuses, tubeless repair kit</span>
          </div>
        </div>
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
