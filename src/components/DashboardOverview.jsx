import { motion } from 'framer-motion';
import { Activity, Thermometer, Radio, Clock, Zap } from 'lucide-react';

const card = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
};

function InfoCard({ icon: Icon, title, value, hint, accent }) {
  return (
    <motion.div
      variants={card}
      className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 shadow-sm"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">{title}</p>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">{value}</span>
            {hint && (
              <span className={`text-xs px-2 py-0.5 rounded-full ${accent}`}>{hint}</span>
            )}
          </div>
        </div>
        <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-sky-500/15 to-violet-500/15 flex items-center justify-center text-sky-600 dark:text-sky-300">
          <Icon size={18} />
        </div>
      </div>
    </motion.div>
  );
}

export default function DashboardOverview() {
  return (
    <section id="overview" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-neutral-50">Overview</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
            Snapshot of your fleet health and recent activity.
          </p>
        </div>
        <motion.button
          whileTap={{ scale: 0.98 }}
          whileHover={{ y: -1 }}
          className="inline-flex items-center gap-2 rounded-md bg-sky-600 hover:bg-sky-700 text-white px-3.5 py-2 text-sm shadow-sm"
          onClick={() => {
            // Future: trigger global refresh
          }}
        >
          <Zap size={16} /> Summon All
        </motion.button>
      </div>

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-50px' }}
        transition={{ staggerChildren: 0.06 }}
        className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        <InfoCard
          icon={Radio}
          title="Active Devices"
          value="128"
          hint="Online"
          accent="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300"
        />
        <InfoCard
          icon={Activity}
          title="RX Power"
          value="-18.2 dBm"
          hint="Excellent"
          accent="bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300"
        />
        <InfoCard
          icon={Thermometer}
          title="Temperature"
          value="41.3 °C"
          hint="Normal"
          accent="bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300"
        />
        <InfoCard icon={Clock} title="Last Inform" value="2m ago" />
      </motion.div>
    </section>
  );
}
