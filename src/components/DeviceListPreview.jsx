import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Power, Wifi } from 'lucide-react';

const seedDevices = [
  {
    id: 'DN-001',
    serial: 'ALCLF1234567',
    product: 'EchoLife HG8145V5',
    rx: -18.2,
    temp: 41.3,
    online: true,
    lastInform: '2m ago',
  },
  {
    id: 'DN-002',
    serial: 'ZXHN1234ABCD',
    product: 'ZTE F609',
    rx: -23.1,
    temp: 45.8,
    online: false,
    lastInform: '14m ago',
  },
  {
    id: 'DN-003',
    serial: 'NOKIA-AX0001',
    product: 'Nokia G-140W-ME',
    rx: -19.4,
    temp: 39.2,
    online: true,
    lastInform: '5m ago',
  },
];

export default function DeviceListPreview() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return seedDevices;
    return seedDevices.filter(
      (d) =>
        d.serial.toLowerCase().includes(q) ||
        d.product.toLowerCase().includes(q) ||
        d.id.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <section id="devices" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-neutral-50">Devices</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
            Search, filter, and jump into details. Summon a device directly from the list.
          </p>
        </div>
        <div className="w-full md:w-80">
          <label htmlFor="search" className="sr-only">Search devices</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={16} />
            <input
              id="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by serial, product, or ID"
              className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 pl-9 pr-3 py-2 text-sm text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
        <table className="w-full text-sm">
          <thead className="bg-neutral-50 dark:bg-neutral-900/60 text-neutral-600 dark:text-neutral-300">
            <tr>
              <th className="text-left font-medium px-4 py-3">ID</th>
              <th className="text-left font-medium px-4 py-3">Serial</th>
              <th className="text-left font-medium px-4 py-3">Product</th>
              <th className="text-left font-medium px-4 py-3">RX Power</th>
              <th className="text-left font-medium px-4 py-3">Temp</th>
              <th className="text-left font-medium px-4 py-3">Status</th>
              <th className="text-right font-medium px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800 bg-white dark:bg-neutral-950">
            {filtered.map((d) => (
              <tr key={d.id} className="group">
                <td className="px-4 py-3 text-neutral-800 dark:text-neutral-100">{d.id}</td>
                <td className="px-4 py-3 text-neutral-700 dark:text-neutral-200">{d.serial}</td>
                <td className="px-4 py-3 text-neutral-700 dark:text-neutral-200">{d.product}</td>
                <td className="px-4 py-3">
                  <span className="text-neutral-800 dark:text-neutral-100">{d.rx.toFixed(1)} dBm</span>
                </td>
                <td className="px-4 py-3">
                  <span className="text-neutral-800 dark:text-neutral-100">{d.temp.toFixed(1)} °C</span>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs border ${
                      d.online
                        ? 'border-emerald-300/60 text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-900/30'
                        : 'border-neutral-300/60 text-neutral-600 dark:text-neutral-300 bg-neutral-50 dark:bg-neutral-900/40'
                    }`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${d.online ? 'bg-emerald-500' : 'bg-neutral-400'}`} />
                    {d.online ? 'Online' : 'Offline'}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      whileHover={{ y: -1 }}
                      className="inline-flex items-center gap-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 px-2.5 py-1.5 text-xs text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800"
                      onClick={() => alert(`Summoning ${d.id}...`)}
                    >
                      <Power size={14} /> Summon
                    </motion.button>
                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-1.5 rounded-md bg-sky-600 hover:bg-sky-700 text-white px-2.5 py-1.5 text-xs"
                      onClick={() => alert(`Open ${d.id} details`)}
                    >
                      <Wifi size={14} /> Details
                    </motion.button>
                  </div>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={7} className="px-4 py-10 text-center text-neutral-500 dark:text-neutral-400">
                  No devices match your query.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
