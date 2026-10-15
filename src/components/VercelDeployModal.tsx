import React, { useState } from 'react';
import { Rocket, Check, Copy, Terminal, ExternalLink, Globe, Shield, Code, X } from 'lucide-react';

interface VercelDeployModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VercelDeployModal: React.FC<VercelDeployModalProps> = ({ isOpen, onClose }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'git' | 'cli' | 'config'>('git');

  if (!isOpen) return null;

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-zinc-950 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl my-8 text-left">
        {/* Header */}
        <div className="flex items-start justify-between pb-5 border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500">
              <Rocket className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-white">
                Vercel Deployment &amp; Run Guide
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400">
                Deploy Ridge &amp; Rev to Vercel with zero cold starts, global edge CDN, and complete SEO routing.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-md hover:bg-zinc-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-2 mt-6 p-1 bg-zinc-900 rounded-lg border border-zinc-800 w-fit">
          <button
            onClick={() => setActiveTab('git')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
              activeTab === 'git' ? 'bg-zinc-800 text-amber-400 shadow-sm' : 'text-zinc-400 hover:text-white'
            }`}
          >
            Deploy via Git (Recommended)
          </button>
          <button
            onClick={() => setActiveTab('cli')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
              activeTab === 'cli' ? 'bg-zinc-800 text-amber-400 shadow-sm' : 'text-zinc-400 hover:text-white'
            }`}
          >
            Deploy via Vercel CLI
          </button>
          <button
            onClick={() => setActiveTab('config')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
              activeTab === 'config' ? 'bg-zinc-800 text-amber-400 shadow-sm' : 'text-zinc-400 hover:text-white'
            }`}
          >
            Project Files &amp; Settings
          </button>
        </div>

        {/* Tab 1: Git Deployment */}
        {activeTab === 'git' && (
          <div className="mt-6 space-y-5">
            <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 space-y-3">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wide">
                Step 1: Push to Git Repository
              </div>
              <p className="text-xs sm:text-sm text-zinc-300">
                Push your codebase to your preferred Git host (GitHub, GitLab, or Bitbucket):
              </p>
              <div className="relative bg-zinc-950 p-3 rounded-lg border border-zinc-800 font-mono text-xs text-zinc-200">
                <code>git add .<br/>git commit -m &quot;feat: complete motorcycle travel blog with 10 routes&quot;<br/>git push origin main</code>
                <button
                  onClick={() => handleCopy('git add .\ngit commit -m "feat: complete motorcycle travel blog with 10 routes"\ngit push origin main', 'git-push')}
                  className="absolute top-2 right-2 p-1.5 text-zinc-400 hover:text-amber-400 rounded bg-zinc-900 border border-zinc-800"
                  title="Copy commands"
                >
                  {copiedKey === 'git-push' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 space-y-3">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wide">
                Step 2: Import into Vercel Dashboard
              </div>
              <ol className="text-xs sm:text-sm text-zinc-300 space-y-2 list-decimal list-inside">
                <li>Log in to <a href="https://vercel.com/new" target="_blank" rel="noreferrer" className="text-amber-400 hover:underline">vercel.com/new</a>.</li>
                <li>Click <strong>&quot;Import&quot;</strong> next to your repository.</li>
                <li>Vercel automatically detects the <strong>Vite</strong> framework preset.</li>
                <li>Verify the build settings:
                  <ul className="list-disc list-inside ml-5 mt-1 text-xs text-zinc-400 space-y-0.5">
                    <li>Build Command: <code className="text-zinc-200 font-mono">npm run build</code></li>
                    <li>Output Directory: <code className="text-zinc-200 font-mono">dist</code></li>
                    <li>Install Command: <code className="text-zinc-200 font-mono">npm install --legacy-peer-deps</code> (auto-configured)</li>
                  </ul>
                </li>
                <li>Click <strong>&quot;Deploy&quot;</strong>. Within 45 seconds, your site is live with a free SSL domain!</li>
              </ol>
            </div>
          </div>
        )}

        {/* Tab 2: Vercel CLI */}
        {activeTab === 'cli' && (
          <div className="mt-6 space-y-5">
            <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 space-y-3">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wide">
                Instant Terminal Deployment
              </div>
              <p className="text-xs sm:text-sm text-zinc-300">
                You can deploy directly from your local terminal using the official Vercel CLI:
              </p>
              <div className="relative bg-zinc-950 p-3 rounded-lg border border-zinc-800 font-mono text-xs text-zinc-200 space-y-2">
                <div>
                  <span className="text-zinc-400"># 1. Install CLI</span><br />
                  <code>npm i -g vercel</code>
                </div>
                <div>
                  <span className="text-zinc-400"># 2. Login to your account</span><br />
                  <code>vercel login</code>
                </div>
                <div>
                  <span className="text-zinc-400"># 3. Deploy to production</span><br />
                  <code>vercel --prod</code>
                </div>
                <button
                  onClick={() => handleCopy('npm i -g vercel\nvercel login\nvercel --prod', 'cli-all')}
                  className="absolute top-2 right-2 p-1.5 text-zinc-400 hover:text-amber-400 rounded bg-zinc-900 border border-zinc-800"
                  title="Copy commands"
                >
                  {copiedKey === 'cli-all' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 text-xs text-zinc-300 space-y-2">
              <div className="font-semibold text-white">Local Run Command:</div>
              <div className="bg-zinc-950 p-2.5 rounded border border-zinc-800 font-mono text-zinc-200">
                <code>npm run dev</code>
              </div>
              <div className="font-semibold text-white mt-2">Production Build Test:</div>
              <div className="bg-zinc-950 p-2.5 rounded border border-zinc-800 font-mono text-zinc-200">
                <code>npm run build &amp;&amp; npm run preview</code>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Configuration Files */}
        {activeTab === 'config' && (
          <div className="mt-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-lg bg-zinc-900/60 border border-zinc-800 text-xs">
                <div className="font-mono font-bold text-amber-400 mb-1">vercel.json</div>
                <p className="text-zinc-400">
                  Includes SPA routing rewrite (<code className="text-zinc-300">/(.*) -&gt; /index.html</code>) and immutable 1-year cache headers for static assets.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-zinc-900/60 border border-zinc-800 text-xs">
                <div className="font-mono font-bold text-amber-400 mb-1">public/sitemap.xml</div>
                <p className="text-zinc-400">
                  Pre-indexed XML sitemap including canonical home URL and all 10 expedition route pages.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-zinc-900/60 border border-zinc-800 text-xs">
                <div className="font-mono font-bold text-amber-400 mb-1">public/robots.txt</div>
                <p className="text-zinc-400">
                  Search crawler index instructions directing bots to full route coverage and sitemap.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-zinc-900/60 border border-zinc-800 text-xs">
                <div className="font-mono font-bold text-amber-400 mb-1">DEPLOYMENT.md</div>
                <p className="text-zinc-400">
                  Comprehensive standalone documentation file stored in your repository root.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-zinc-800 flex items-center justify-between">
          <span className="text-xs text-zinc-400">
            All files are pre-generated and ready for instant deployment.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-zinc-950 bg-amber-500 hover:bg-amber-400 rounded-md transition-colors"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};
