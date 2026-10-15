/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { BLOG_POSTS } from './data/posts';
import { BlogPost, Region } from './types/blog';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BlogCard } from './components/BlogCard';
import { PostDetail } from './components/PostDetail';
import { RouteExplorer } from './components/RouteExplorer';
import { GearChecklist } from './components/GearChecklist';
import { VercelDeployModal } from './components/VercelDeployModal';
import { Footer } from './components/Footer';
import {
  Search,
  Filter,
  Compass,
  ArrowRight,
  ShieldCheck,
  Fuel,
  CheckCircle,
  MapPin,
  Sparkles,
  Mountain,
  SlidersHorizontal,
  X
} from 'lucide-react';

export default function App() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<Region>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Modals
  const [isDeployGuideOpen, setIsDeployGuideOpen] = useState(false);
  const [isChecklistOpen, setIsChecklistOpen] = useState(false);
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);
  const [estimatorPostId, setEstimatorPostId] = useState<string | undefined>(undefined);

  // Hash-based clean deep linking (e.g., #post/manali-leh-khardungla)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#post/')) {
        const slug = hash.replace('#post/', '');
        const found = BLOG_POSTS.find((p) => p.slug === slug);
        if (found) {
          setSelectedPost(found);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      } else if (hash === '#deploy-guide') {
        setIsDeployGuideOpen(true);
      } else if (hash === '#pack-list') {
        setIsChecklistOpen(true);
      } else if (hash === '#estimator') {
        setIsEstimatorOpen(true);
      } else {
        setSelectedPost(null);
      }
    };

    // Run on initial load
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectPost = (post: BlogPost) => {
    setSelectedPost(post);
    window.location.hash = `post/${post.slug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setSelectedPost(null);
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPostBySlug = (slug: string) => {
    const found = BLOG_POSTS.find((p) => p.slug === slug);
    if (found) {
      handleSelectPost(found);
    }
  };

  const handleOpenEstimatorForPost = (postId: string) => {
    setEstimatorPostId(postId);
    setIsEstimatorOpen(true);
  };

  // Filtered posts based on region, difficulty, and search query
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesRegion = selectedRegion === 'All' || post.region === selectedRegion;
      const matchesDifficulty = selectedDifficulty === 'All' || post.difficulty === selectedDifficulty;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.subtitle.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q)) ||
        post.checkpoints.some((cp) => cp.name.toLowerCase().includes(q));

      return matchesRegion && matchesDifficulty && matchesSearch;
    });
  }, [selectedRegion, selectedDifficulty, searchQuery]);

  // Featured flagship post
  const featuredPost = BLOG_POSTS[0];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-amber-500 selection:text-zinc-950">
      {/* Top Bar Navigation */}
      <Navbar
        currentView={selectedPost ? 'post' : 'home'}
        onNavigateHome={handleNavigateHome}
        onSelectRegion={(reg) => {
          setSelectedRegion(reg as Region);
          setSelectedPost(null);
        }}
        onOpenDeployGuide={() => setIsDeployGuideOpen(true)}
        onOpenChecklist={() => setIsChecklistOpen(true)}
        onOpenCalculator={() => {
          setEstimatorPostId(undefined);
          setIsEstimatorOpen(true);
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {selectedPost ? (
          <PostDetail
            post={selectedPost}
            allPosts={BLOG_POSTS}
            onBack={handleNavigateHome}
            onSelectPost={handleSelectPost}
            onOpenEstimatorForPost={handleOpenEstimatorForPost}
          />
        ) : (
          <>
            {/* Hero Section */}
            <Hero
              onExploreClick={() => {
                const el = document.getElementById('expeditions-grid');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              onOpenEstimator={() => setIsEstimatorOpen(true)}
              onOpenFeatured={() => handleSelectPost(featuredPost)}
            />

            {/* Featured Post Spotlight Banner */}
            <section className="py-12 border-b border-zinc-800/80">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-xs font-semibold text-amber-500 uppercase tracking-wider">
                      Flagship Feature
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold font-heading text-white">
                      The Crown Jewel Expedition
                    </h2>
                  </div>
                  <span className="text-xs font-mono text-zinc-400">
                    Highest Point: 18,380 ft
                  </span>
                </div>

                <div
                  onClick={() => handleSelectPost(featuredPost)}
                  className="group cursor-pointer rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 p-6 sm:p-8 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left"
                >
                  <div className="lg:col-span-6 space-y-4">
                    {/* Zero-Pill Unboxed Metadata */}
                    <div className="flex items-center flex-wrap gap-2 text-xs text-zinc-400 font-mono">
                      <span>{featuredPost.region}</span>
                      <span aria-hidden="true">·</span>
                      <span>{featuredPost.distanceKm} km</span>
                      <span aria-hidden="true">·</span>
                      <span>{featuredPost.durationDays}</span>
                      <span aria-hidden="true">·</span>
                      <span>{featuredPost.readingTimeMinutes} min read</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white group-hover:text-amber-400 transition-colors leading-tight">
                      {featuredPost.title}
                    </h3>

                    <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

                    <div className="pt-2 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={featuredPost.author.avatar}
                          alt={featuredPost.author.name}
                          className="w-8 h-8 rounded-full object-cover border border-zinc-700"
                        />
                        <div className="text-xs">
                          <span className="text-zinc-200 font-medium block">{featuredPost.author.name}</span>
                          <span className="text-zinc-400">{featuredPost.author.role}</span>
                        </div>
                      </div>

                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 group-hover:text-amber-300">
                        <span>Read Full Expedition</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-6 relative aspect-[16/10] rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800">
                    <img
                      src={featuredPost.coverImage}
                      alt={featuredPost.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </section>

            {/* Interactive Route Filter & Search Toolbar */}
            <section id="expeditions-grid" className="pt-12 pb-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-zinc-800/80">
                  <div>
                    <div className="text-xs font-semibold text-amber-500 uppercase tracking-wider mb-1">
                      Route Index
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                      All 10 Motorcycle Expeditions
                    </h2>
                    <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                      Filter by terrain, difficulty, or search by specific pass, checkpoint, or state.
                    </p>
                  </div>

                  {/* Search Input Box */}
                  <div className="relative w-full md:w-80">
                    <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="Search pass, town, or bike..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-zinc-900/90 border border-zinc-800 rounded-lg pl-9 pr-8 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Filter Tabs / Segmented Controls (Buttons Allowed for Interactive Filters) */}
                <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  {/* Region Filter Buttons */}
                  <div className="flex items-center flex-wrap gap-1.5 p-1 bg-zinc-900/80 rounded-lg border border-zinc-800">
                    {(['All', 'Himalayas', 'Western Ghats', 'Desert & Salt', 'Coastal', 'Northeast'] as Region[]).map(
                      (region) => (
                        <button
                          key={region}
                          onClick={() => setSelectedRegion(region)}
                          className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                            selectedRegion === region
                              ? 'bg-zinc-800 text-amber-400 shadow-sm'
                              : 'text-zinc-400 hover:text-zinc-200'
                          }`}
                        >
                          {region}
                        </button>
                      )
                    )}
                  </div>

                  {/* Difficulty Segmented Filter */}
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-zinc-400 hidden lg:inline">Difficulty:</span>
                    <select
                      value={selectedDifficulty}
                      onChange={(e) => setSelectedDifficulty(e.target.value)}
                      className="bg-zinc-900 border border-zinc-800 rounded-md px-2.5 py-1.5 text-xs text-zinc-300 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    >
                      <option value="All">All Difficulties</option>
                      <option value="Moderate">Moderate</option>
                      <option value="Demanding">Demanding</option>
                      <option value="Extreme Expedition">Extreme Expedition</option>
                    </select>
                  </div>
                </div>

                {/* Results count text */}
                <div className="pt-4 text-xs text-zinc-400 font-mono text-left">
                  Showing {filteredPosts.length} of {BLOG_POSTS.length} verified motorcycle routes
                  {selectedRegion !== 'All' && ` in ${selectedRegion}`}
                  {searchQuery && ` matching "${searchQuery}"`}
                </div>
              </div>
            </section>

            {/* Grid of Blog Cards */}
            <section className="py-8">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {filteredPosts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {filteredPosts.map((post) => (
                      <BlogCard
                        key={post.id}
                        post={post}
                        onSelectPost={handleSelectPost}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="py-16 text-center rounded-2xl bg-zinc-900/30 border border-zinc-800">
                    <Mountain className="w-10 h-10 text-zinc-600 mx-auto mb-3" />
                    <h3 className="text-lg font-semibold text-white">No matching expeditions found</h3>
                    <p className="text-xs text-zinc-400 mt-1 max-w-sm mx-auto">
                      Try adjusting your search terms or clearing region filters to view all 10 expeditions.
                    </p>
                    <button
                      onClick={() => {
                        setSelectedRegion('All');
                        setSelectedDifficulty('All');
                        setSearchQuery('');
                      }}
                      className="mt-4 px-4 py-2 text-xs font-semibold text-zinc-950 bg-amber-500 hover:bg-amber-400 rounded-md transition-colors"
                    >
                      Reset All Filters
                    </button>
                  </div>
                )}
              </div>
            </section>

            {/* Embedded Route Fuel & Logistics Estimator Tool */}
            <section className="py-14 border-t border-zinc-800/80 bg-zinc-900/20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <RouteExplorer posts={BLOG_POSTS} />
              </div>
            </section>

            {/* Expedition Packing & Preparation Section */}
            <section className="py-14 border-t border-zinc-800/80">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
                  <div className="lg:col-span-5 space-y-4">
                    <div className="text-xs font-semibold text-amber-500 uppercase tracking-wider">
                      Trip Readiness
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                      Field-Tested Gear &amp; Spares Checklist
                    </h2>
                    <p className="text-sm text-zinc-300 leading-relaxed">
                      A breakdown at 15,000 feet on the More Plains or an unsealed clutch cable at Sach Pass is not just an inconvenience; it can be life-threatening.
                    </p>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      We have compiled an interactive checklist covering spare throttle/clutch cables, 12V air compressors, cold-weather base layers, and AMS medication. Check off your gear before you kick-start.
                    </p>
                    <button
                      onClick={() => setIsChecklistOpen(true)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-zinc-950 bg-amber-500 hover:bg-amber-400 transition-colors shadow-sm"
                    >
                      <span>Open Interactive Packing Checklist</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="lg:col-span-7">
                    <GearChecklist />
                  </div>
                </div>
              </div>
            </section>

            {/* Meet the Expedition Scouts (3-in-a-Row Profile Grid) */}
            <section className="py-14 border-t border-zinc-800/80 bg-zinc-900/20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
                <div className="text-xs font-semibold text-amber-500 uppercase tracking-wider mb-1">
                  The Editorial Team
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-2">
                  Meet the Expedition Scouts
                </h2>
                <p className="text-xs sm:text-sm text-zinc-400 mb-8 max-w-xl">
                  Every guide on Ridge &amp; Rev is written by riders who have physically negotiated these passes and corners.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      name: 'Kabir Varma',
                      role: 'Lead Expedition Scout',
                      bio: 'Over 85,000 km across the Himalayas and Trans-Himalayan corridors over 11 riding seasons. Specializes in permafrost logistics and Sach Pass technical traverses.',
                      bike: 'Royal Enfield Himalayan 450',
                      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
                    },
                    {
                      name: 'Aditi Nair',
                      role: 'Terrain Specialist',
                      bio: 'Solo adventure rider with 60,000+ km across India, Bhutan, and Nepal. Leading authority on high-altitude river crossings in Spiti and Zanskar valleys.',
                      bike: 'KTM 390 Adventure',
                      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80'
                    },
                    {
                      name: 'Rohan Deshmukh',
                      role: 'Touring & Tech Editor',
                      bio: 'Ex-superbike racer turned cross-country endurance rider with 12 Iron Butt certificates. Specialist in Western Ghats cornering roads and coastal navigation.',
                      bike: 'Triumph Scrambler 400X',
                      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
                    }
                  ].map((scout, i) => (
                    <div
                      key={i}
                      className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-4"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={scout.avatar}
                          alt={scout.name}
                          className="w-12 h-12 rounded-full object-cover border border-zinc-700"
                        />
                        <div>
                          <div className="text-sm font-bold text-white">{scout.name}</div>
                          {/* Zero-Pill Unboxed Metadata */}
                          <div className="text-xs text-amber-500 font-medium">{scout.role}</div>
                        </div>
                      </div>
                      <p className="text-xs text-zinc-300 leading-relaxed">
                        {scout.bio}
                      </p>
                      <div className="pt-2 border-t border-zinc-800/80 text-[11px] text-zinc-400 font-mono">
                        Current Steed: <span className="text-zinc-200">{scout.bike}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}
      </main>

      {/* Footer */}
      <Footer
        onSelectRegion={(reg) => {
          setSelectedRegion(reg);
          setSelectedPost(null);
          const el = document.getElementById('expeditions-grid');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenDeployGuide={() => setIsDeployGuideOpen(true)}
        onOpenChecklist={() => setIsChecklistOpen(true)}
        onOpenEstimator={() => setIsEstimatorOpen(true)}
        onSelectPostBySlug={handleSelectPostBySlug}
      />

      {/* Modals */}
      <VercelDeployModal
        isOpen={isDeployGuideOpen}
        onClose={() => setIsDeployGuideOpen(false)}
      />

      {isChecklistOpen && (
        <GearChecklist isModal={true} onClose={() => setIsChecklistOpen(false)} />
      )}

      {isEstimatorOpen && (
        <RouteExplorer
          posts={BLOG_POSTS}
          initialPostId={estimatorPostId}
          isModal={true}
          onClose={() => {
            setIsEstimatorOpen(false);
            setEstimatorPostId(undefined);
          }}
        />
      )}
    </div>
  );
}
