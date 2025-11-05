import Header from './components/Header';
import HeroScene from './components/HeroScene';
import DashboardOverview from './components/DashboardOverview';
import DeviceListPreview from './components/DeviceListPreview';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 antialiased">
      <Header />
      <main>
        <HeroScene />
        <DashboardOverview />
        <DeviceListPreview />
      </main>
      <footer className="border-t border-neutral-200 dark:border-neutral-800 mt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-sm text-neutral-600 dark:text-neutral-400">
          © {new Date().getFullYear()} Skydash.NET — Designed for smooth, human‑first network operations.
        </div>
      </footer>
    </div>
  );
}
