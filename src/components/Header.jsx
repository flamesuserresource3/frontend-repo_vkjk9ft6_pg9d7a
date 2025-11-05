import { Moon, Sun, Settings, Shield } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Header() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (dark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [dark]);

  return (
    <header className="sticky top-0 z-20 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-900/60 border-b border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-sky-500 via-indigo-500 to-violet-500 shadow-sm" />
          <div className="flex items-baseline gap-2">
            <span className="font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">Skydash.NET</span>
            <span className="text-xs rounded bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300 px-1.5 py-0.5">GenieACS Panel</span>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-300">
          <a className="hover:text-neutral-900 dark:hover:text-white transition" href="#overview">Overview</a>
          <a className="hover:text-neutral-900 dark:hover:text-white transition" href="#devices">Devices</a>
          <a className="hover:text-neutral-900 dark:hover:text-white transition" href="#audit">Audit</a>
        </nav>
        <div className="flex items-center gap-2">
          <button
            aria-label="Preferences"
            className="inline-flex items-center gap-2 rounded-md border border-neutral-200 dark:border-neutral-700 px-3 py-2 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition"
          >
            <Settings size={16} />
            <span className="hidden sm:inline">Preferences</span>
          </button>
          <button
            aria-label="Toggle theme"
            onClick={() => setDark((v) => !v)}
            className="inline-flex items-center justify-center rounded-md border border-neutral-200 dark:border-neutral-700 w-10 h-10 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <div className="ml-2 hidden sm:flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500/10 to-violet-500/10 px-3 py-1 text-xs text-sky-700 dark:text-sky-300 border border-sky-200/50 dark:border-sky-800/40">
            <Shield size={14} />
            <span>RBAC Enabled</span>
          </div>
        </div>
      </div>
    </header>
  );
}
