import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function HeroScene() {
  return (
    <section className="relative h-[70vh] md:h-[78vh] lg:h-[84vh]" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-neutral-950 via-white/60 dark:via-neutral-950/60 to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-end">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full pb-10 md:pb-14"
        >
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
            Skydash.NET Device Orchestration
          </h1>
          <p className="mt-3 md:mt-4 max-w-2xl text-neutral-600 dark:text-neutral-300">
            Monitor, configure, and summon ONT/GPON devices with a calm, human-first workflow.
            Real-time status, graceful animations, and a modern control surface.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <motion.button
              whileTap={{ scale: 0.98 }}
              whileHover={{ y: -1 }}
              className="inline-flex items-center justify-center rounded-md bg-sky-600 hover:bg-sky-700 text-white px-4 py-2.5 text-sm shadow-sm"
            >
              Launch Dashboard
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-md border border-neutral-300 dark:border-neutral-700 px-4 py-2.5 text-sm text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800"
            >
              Quick Tour
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
