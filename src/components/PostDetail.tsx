import React, { useState, useEffect } from 'react';
import { BlogPost, Comment } from '../types/blog';
import {
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  Mountain,
  Share2,
  Copy,
  Check,
  Fuel,
  ShieldAlert,
  Wrench,
  ThumbsUp,
  MessageSquare,
  AlertTriangle,
  ChevronRight,
  Compass,
  CheckCircle2
} from 'lucide-react';

interface PostDetailProps {
  post: BlogPost;
  allPosts: BlogPost[];
  onBack: () => void;
  onSelectPost: (post: BlogPost) => void;
  onOpenEstimatorForPost: (postId: string) => void;
}

export const PostDetail: React.FC<PostDetailProps> = ({
  post,
  allPosts,
  onBack,
  onSelectPost,
  onOpenEstimatorForPost,
}) => {
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Comments state persisted in localStorage
  const [comments, setComments] = useState<Comment[]>(() => {
    try {
      const stored = localStorage.getItem(`comments_${post.id}`);
      if (stored) return JSON.parse(stored);
    } catch {
      // fallback
    }
    // Default authentic rider comments
    return [
      {
        id: 'c1',
        postId: post.id,
        author: 'Vikram Sengupta',
        bikeModel: 'KTM 390 Adventure',
        date: '3 days ago',
        content: 'Rode this exact stretch two weeks ago. The water crossing at Zingzingbar was manageable around 9 AM, but by 2 PM the meltwater was halfway up the crankcase. Take Kabir’s advice and cross early!',
        likes: 14
      },
      {
        id: 'c2',
        postId: post.id,
        author: 'Meera Rao',
        bikeModel: 'RE Himalayan 450',
        date: '1 week ago',
        content: 'Carried a 10L jerry can as recommended. Saved a fellow solo rider stranded near Pang with an empty tank. Essential route guide, especially the notes on tire pressure.',
        likes: 9
      }
    ];
  });

  const [newAuthor, setNewAuthor] = useState('');
  const [newBike, setNewBike] = useState('');
  const [newContent, setNewContent] = useState('');

  // SEO: Update document title, meta description, and Schema.org BlogPosting JSON-LD
  useEffect(() => {
    const originalTitle = document.title;
    document.title = `${post.title} | Ridge & Rev`;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc?.getAttribute('content') || '';
    if (metaDesc) {
      metaDesc.setAttribute('content', post.excerpt);
    }

    // Dynamic Schema.org BlogPosting
    const scriptId = 'schema-blog-post';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      'headline': post.title,
      'alternativeHeadline': post.subtitle,
      'image': post.coverImage,
      'author': {
        '@type': 'Person',
        'name': post.author.name,
        'jobTitle': post.author.role
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'Ridge & Rev',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://ridge-and-rev.vercel.app/favicon.ico'
        }
      },
      'datePublished': '2026-10-12',
      'description': post.excerpt,
      'articleBody': post.content.overview
    };

    scriptTag.textContent = JSON.stringify(schemaData);

    // Scroll to top on post change
    window.scrollTo({ top: 0, behavior: 'smooth' });

    return () => {
      document.title = originalTitle;
      if (metaDesc) metaDesc.setAttribute('content', originalDesc);
      if (scriptTag && scriptTag.parentNode) {
        scriptTag.parentNode.removeChild(scriptTag);
      }
    };
  }, [post]);

  // Reading progress scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = () => {
    const shareUrl = window.location.origin + window.location.pathname + '#post/' + post.slug;
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newContent.trim()) return;

    const newComment: Comment = {
      id: `c_${Date.now()}`,
      postId: post.id,
      author: newAuthor.trim(),
      bikeModel: newBike.trim() || 'Motorcycle Traveler',
      date: 'Just now',
      content: newContent.trim(),
      likes: 0
    };

    const updated = [newComment, ...comments];
    setComments(updated);
    try {
      localStorage.setItem(`comments_${post.id}`, JSON.stringify(updated));
    } catch {
      // ignore
    }
    setNewAuthor('');
    setNewBike('');
    setNewContent('');
  };

  const handleLikeComment = (commentId: string) => {
    const updated = comments.map((c) => (c.id === commentId ? { ...c, likes: c.likes + 1 } : c));
    setComments(updated);
    try {
      localStorage.setItem(`comments_${post.id}`, JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  // Find next and previous posts
  const currentIndex = allPosts.findIndex((p) => p.id === post.id);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return (
    <div className="relative pb-24 text-left">
      {/* Sticky Reading Progress Bar */}
      <div className="fixed top-16 left-0 right-0 z-40 h-1 bg-zinc-900">
        <div
          className="h-full bg-amber-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-zinc-400 mb-6 font-mono">
          <button onClick={onBack} className="hover:text-amber-400 transition-colors">
            Expeditions
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
          <span className="text-zinc-400">{post.region}</span>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
          <span className="text-zinc-200 truncate max-w-[200px]">{post.title}</span>
        </nav>

        {/* Back Button */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-300 hover:text-amber-400 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All 10 Expeditions</span>
        </button>

        {/* Header Kicker & Title */}
        <div className="mb-6">
          {/* Zero-Pill Unboxed Metadata */}
          <div className="flex items-center flex-wrap gap-2 text-xs text-zinc-400 mb-3 font-mono">
            <span>{post.region}</span>
            <span aria-hidden="true">·</span>
            <span>{post.distanceKm} km</span>
            <span aria-hidden="true">·</span>
            <span>{post.durationDays}</span>
            <span aria-hidden="true">·</span>
            <span>{post.readingTimeMinutes} min read</span>
            <span aria-hidden="true">·</span>
            <span>{post.publishedDate}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight text-balance mb-4">
            {post.title}
          </h1>

          <p className="text-base sm:text-xl text-zinc-300 leading-relaxed font-light">
            {post.subtitle}
          </p>
        </div>

        {/* Author Byline & Social Share Bar */}
        <div className="flex items-center justify-between flex-wrap gap-4 py-4 border-y border-zinc-800/80 mb-8">
          <div className="flex items-center gap-3">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-10 h-10 rounded-full object-cover border border-zinc-700"
            />
            <div>
              <div className="text-sm font-semibold text-zinc-200">{post.author.name}</div>
              <div className="text-xs text-zinc-400">{post.author.role}</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-md transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Link Copied!' : 'Copy Link'}</span>
            </button>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 rounded-md transition-colors"
              title="Share on X"
              aria-label="Share on X"
            >
              <Share2 className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Hero Cover Image with Descriptive Alt & Caption */}
        <figure className="mb-10 rounded-2xl overflow-hidden border border-zinc-800/80 bg-zinc-900 shadow-2xl">
          <img
            src={post.coverImage}
            alt={post.imageAlt}
            className="w-full h-auto max-h-[520px] object-cover object-center"
            loading="eager"
            referrerPolicy="no-referrer"
          />
          <figcaption className="p-3 bg-zinc-950/90 border-t border-zinc-800/70 text-xs text-zinc-400 flex items-center justify-between">
            <span>{post.imageAlt}</span>
            <span className="font-mono text-zinc-400">Ridge &amp; Rev Archive</span>
          </figcaption>
        </figure>

        {/* Route Key Logistics Strip */}
        <div className="mb-12 p-5 sm:p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-amber-500 mb-4">
            Route Logistics &amp; Specifications
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div>
              <div className="text-xs text-zinc-400">Total Distance</div>
              <div className="text-lg font-bold font-mono text-white mt-0.5">{post.distanceKm} km</div>
            </div>
            <div>
              <div className="text-xs text-zinc-400">Max Altitude</div>
              <div className="text-lg font-bold font-mono text-amber-400 mt-0.5">
                {post.maxElevationMeters > 0 ? `${post.maxElevationMeters} m (${post.maxElevationFeet} ft)` : 'Sea Level'}
              </div>
            </div>
            <div>
              <div className="text-xs text-zinc-400">Terrain Rating</div>
              <div className="text-lg font-bold text-white mt-0.5">{post.difficulty}</div>
            </div>
            <div>
              <div className="text-xs text-zinc-400">Best Season</div>
              <div className="text-lg font-bold text-white mt-0.5">{post.bestSeason}</div>
            </div>
          </div>

          <div className="mt-5 pt-5 border-t border-zinc-800/80 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-zinc-300">
            <div>
              <span className="text-zinc-400 font-semibold block mb-0.5">Recommended Motorcycle:</span>
              <span className="text-zinc-200">{post.recommendedBike}</span>
            </div>
            <div>
              <span className="text-zinc-400 font-semibold block mb-0.5">Permits &amp; Entry:</span>
              <span className="text-zinc-200">{post.permitsRequired}</span>
            </div>
          </div>

          <div className="mt-4 pt-3 flex items-center justify-between">
            <span className="text-xs text-zinc-400">Plan fuel stops and auxiliary jerry cans for this route:</span>
            <button
              onClick={() => onOpenEstimatorForPost(post.id)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold text-zinc-950 bg-amber-500 hover:bg-amber-400 transition-colors"
            >
              <Fuel className="w-3.5 h-3.5" />
              <span>Calculate Fuel For This Route</span>
            </button>
          </div>
        </div>

        {/* Route Elevation Profile Visualization */}
        {post.elevationPoints.length > 0 && (
          <div className="mb-12 p-5 sm:p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/80">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-300 mb-2">
              Route Elevation Profile
            </h2>
            <p className="text-xs text-zinc-400 mb-5">
              Altitude variations across key checkpoints along the corridor (elevation in meters above sea level).
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-10 gap-2 items-end h-36 pt-4 pb-2 border-b border-zinc-800">
              {post.elevationPoints.map((pt, i) => {
                const maxElev = Math.max(...post.elevationPoints.map((p) => p.elevation), 2000);
                const heightPercent = Math.max(Math.round((pt.elevation / maxElev) * 100), 12);
                return (
                  <div key={i} className="flex flex-col items-center justify-end h-full group">
                    <span className="text-[10px] font-mono text-zinc-400 group-hover:text-amber-400 transition-colors mb-1">
                      {pt.elevation}m
                    </span>
                    <div
                      className="w-full bg-gradient-to-t from-amber-500/30 to-amber-500 rounded-t transition-all group-hover:from-amber-500/50 group-hover:to-amber-400"
                      style={{ height: `${heightPercent}%` }}
                    />
                    <span className="text-[10px] text-zinc-400 truncate max-w-full mt-1.5 text-center">
                      {pt.point}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Article Editorial Content */}
        <div className="prose prose-invert max-w-none text-zinc-300 text-base leading-relaxed space-y-8">
          {/* Overview */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-white mb-3">
              The Calling
            </h2>
            <p className="leading-relaxed text-zinc-200">
              {post.content.overview}
            </p>
          </section>

          {/* Breakdown Sections */}
          {post.content.routeBreakdown.map((section, index) => (
            <section key={index} className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-white">
                {section.heading}
              </h2>
              <p className="leading-relaxed">
                {section.body}
              </p>
              {section.highlight && (
                <div className="my-4 p-4 rounded-xl bg-zinc-900/80 border border-amber-500/30 text-amber-200 text-xs sm:text-sm leading-relaxed flex items-start gap-3">
                  <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-amber-300 font-semibold block mb-0.5">Rider Field Advisory:</strong>
                    <span>{section.highlight}</span>
                  </div>
                </div>
              )}
            </section>
          ))}

          {/* Route Checkpoints Timeline */}
          <section className="pt-4">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-white mb-4">
              Milestone Checkpoints &amp; Waypoints
            </h2>
            <div className="space-y-3">
              {post.checkpoints.map((cp, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg bg-zinc-900/60 border border-zinc-800 flex items-start justify-between gap-4"
                >
                  <div className="space-y-0.5">
                    <div className="text-sm font-semibold text-white flex items-center gap-2">
                      <span className="font-mono text-amber-500 text-xs">{idx + 1}.</span>
                      <span>{cp.name}</span>
                    </div>
                    <div className="text-xs text-zinc-400 leading-normal">{cp.note}</div>
                  </div>
                  <div className="text-right shrink-0 font-mono text-xs text-zinc-400">
                    <div>{cp.distanceKm} km</div>
                    <div className="text-amber-400">{cp.altitudeM} m</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Fuel & Logistics Reality Check */}
          <section className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800">
            <h2 className="text-lg font-bold font-heading text-white flex items-center gap-2 mb-2">
              <Fuel className="w-5 h-5 text-amber-400" />
              <span>Fuel &amp; Mechanics Reality Check</span>
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {post.content.fuelAndLogistics}
            </p>
          </section>

          {/* Bike Preparation */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-white flex items-center gap-2 mb-3">
              <Wrench className="w-5 h-5 text-amber-400" />
              <span>Motorcycle Setup &amp; Spares</span>
            </h2>
            <p className="text-sm leading-relaxed mb-4">
              {post.content.bikePreparation}
            </p>
            <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-2">
              <div className="text-xs font-semibold text-zinc-200">Recommended Packing Items:</div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300 list-disc list-inside">
                {post.content.packingTips.map((tip, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Rider Verdict */}
          <section className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30">
            <h2 className="text-lg font-bold font-heading text-amber-400 mb-2">
              Rider Verdict
            </h2>
            <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-light italic">
              &quot;{post.content.riderVerdict}&quot;
            </p>
            <div className="text-xs text-zinc-400 mt-2 font-mono">
              — {post.author.name}, {post.author.role}
            </div>
          </section>
        </div>

        {/* Previous and Next Post Navigation */}
        <div className="mt-14 pt-8 border-t border-zinc-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevPost ? (
            <div
              onClick={() => onSelectPost(prevPost)}
              className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 cursor-pointer transition-colors group text-left"
            >
              <div className="text-xs text-zinc-400 mb-1 flex items-center gap-1 group-hover:text-amber-400">
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Previous Route</span>
              </div>
              <div className="text-sm font-semibold text-white group-hover:text-amber-300 line-clamp-1">
                {prevPost.title}
              </div>
            </div>
          ) : <div />}

          {nextPost && (
            <div
              onClick={() => onSelectPost(nextPost)}
              className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 cursor-pointer transition-colors group text-right sm:text-right"
            >
              <div className="text-xs text-zinc-400 mb-1 flex items-center justify-end gap-1 group-hover:text-amber-400">
                <span>Next Route</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
              <div className="text-sm font-semibold text-white group-hover:text-amber-300 line-clamp-1">
                {nextPost.title}
              </div>
            </div>
          )}
        </div>

        {/* Interactive Reader Community & Road Condition Reports */}
        <section className="mt-14 pt-8 border-t border-zinc-800">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-amber-500" />
              <h2 className="text-xl font-bold font-heading text-white">
                Rider Trail Reports ({comments.length})
              </h2>
            </div>
            <span className="text-xs text-zinc-400">Live community logs</span>
          </div>

          {/* Add Report Form */}
          <form onSubmit={handleAddComment} className="mb-8 p-5 rounded-xl bg-zinc-900/50 border border-zinc-800 space-y-4">
            <div className="text-xs font-semibold text-zinc-200">
              Submit Road Condition or Trail Update:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Your Name (e.g. Rahul Sharma)"
                value={newAuthor}
                onChange={(e) => setNewAuthor(e.target.value)}
                required
                className="bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <input
                type="text"
                placeholder="Motorcycle Model (e.g. KTM 390 Adv / RE Himalayan)"
                value={newBike}
                onChange={(e) => setNewBike(e.target.value)}
                className="bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <textarea
              placeholder="Report current road conditions, landslides, water levels, fuel stock, or ask a question..."
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              rows={3}
              required
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-xs text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button
              type="submit"
              className="px-4 py-2 text-xs font-semibold text-zinc-950 bg-amber-500 hover:bg-amber-400 rounded-md transition-colors"
            >
              Post Trail Report
            </button>
          </form>

          {/* Comments List */}
          <div className="space-y-4">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 space-y-2"
              >
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-zinc-200">{comment.author}</span>
                    <span className="text-zinc-500">·</span>
                    <span className="text-amber-400 font-mono text-[11px]">{comment.bikeModel}</span>
                  </div>
                  <span className="text-zinc-500 text-[11px]">{comment.date}</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {comment.content}
                </p>
                <div className="pt-2 flex items-center justify-between">
                  <button
                    onClick={() => handleLikeComment(comment.id)}
                    className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-amber-400 transition-colors"
                  >
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span>{comment.likes > 0 ? comment.likes : 'Helpful'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
