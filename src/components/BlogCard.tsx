import React, { useState } from 'react';
import { BlogPost } from '../types/blog';
import { ArrowUpRight, Mountain, Gauge, Clock, Calendar } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
  onSelectPost: (post: BlogPost) => void;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, onSelectPost }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <article
      onClick={() => onSelectPost(post)}
      className="group cursor-pointer flex flex-col h-full rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700/80 hover:bg-zinc-900/70 transition-all duration-200 overflow-hidden text-left"
    >
      {/* Media Container (4:3 aspect ratio) */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900">
        {!imageError ? (
          <img
            src={post.coverImage}
            alt={post.imageAlt}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-zinc-900 via-zinc-850 to-zinc-950">
            <Mountain className="w-8 h-8 text-amber-500/70 mb-2" />
            <span className="text-xs font-mono text-zinc-400">{post.title}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Quiet region identifier */}
        <div className="absolute top-3 left-3 text-xs font-semibold text-zinc-200 bg-zinc-950/80 backdrop-blur-md px-2.5 py-1 rounded border border-zinc-800/70">
          {post.region}
        </div>
      </div>

      {/* Card Content Area */}
      <div className="flex flex-col flex-1 p-5 sm:p-6 justify-between">
        <div>
          {/* Zero-Pill Unboxed Metadata with Typographic Separator */}
          <div className="flex items-center flex-wrap gap-2 text-xs text-zinc-400 mb-3 font-mono">
            <span>{post.distanceKm} km</span>
            <span aria-hidden="true">·</span>
            <span>{post.maxElevationMeters > 500 ? `${post.maxElevationMeters}m peak` : `${post.durationDays}`}</span>
            <span aria-hidden="true">·</span>
            <span>{post.readingTimeMinutes} min read</span>
          </div>

          <h3 className="font-heading font-bold text-lg sm:text-xl text-white group-hover:text-amber-400 transition-colors leading-snug mb-2 text-balance">
            {post.title}
          </h3>

          <p className="text-sm text-zinc-300 leading-relaxed line-clamp-2 mb-4">
            {post.excerpt}
          </p>
        </div>

        {/* Card Footer: Author and Read Indicator */}
        <div className="pt-4 border-t border-zinc-800/70 flex items-center justify-between gap-4 mt-auto">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-7 h-7 rounded-full bg-zinc-800 border border-zinc-700 overflow-hidden shrink-0">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="text-xs truncate">
              <span className="font-medium text-zinc-200 block truncate">{post.author.name}</span>
            </div>
          </div>

          <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-400 group-hover:text-amber-300 whitespace-nowrap shrink-0">
            <span>Read Log</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </article>
  );
};
