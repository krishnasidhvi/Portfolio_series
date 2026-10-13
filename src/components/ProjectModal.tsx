import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { projects, type Project } from '../data/portfolio';
import { useScrollLock } from '../hooks/smoothScroll';
import { EASE, Magnetic } from './fx';
import { ProjectArt } from './Poster';
import { playModalWhoosh, playUiClick } from '../utils/sound';

const block = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: EASE } },
};

type ModalTab = 'overview' | 'pipeline' | 'query';

export default function ProjectModal({ project, onClose, onSwitch }: { project: Project; onClose: () => void; onSwitch: (p: Project) => void }) {
  useScrollLock(true);
  const scroller = useRef<HTMLDivElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const [tab, setTab] = useState<ModalTab>('overview');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    playModalWhoosh();
    const prevFocus = document.activeElement as HTMLElement | null;
    closeBtn.current?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      prevFocus?.focus?.({ preventScroll: true });
    };
  }, [onClose]);

  useEffect(() => {
    scroller.current?.scrollTo({ top: 0 });
    setTab('overview');
  }, [project.id]);

  const more = projects.filter((p) => p.id !== project.id);

  const copyCode = () => {
    playUiClick();
    navigator.clipboard.writeText(project.sampleQuery.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div className="fixed inset-0 z-[140]" role="dialog" aria-modal="true" aria-labelledby={`title-${project.id}-modal`}>
      <motion.div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <div ref={scroller} data-lenis-prevent className="absolute inset-0 overflow-y-auto overscroll-contain" onClick={onClose}>
        <motion.div
          className="relative mx-auto min-h-full max-w-5xl bg-ink-2 shadow-2xl sm:my-10 sm:min-h-0 sm:rounded-2xl"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: 30, transition: { duration: 0.3 } }}
        >
          {/* billboard */}
          <div className="relative h-[50vh] min-h-[320px] overflow-hidden sm:rounded-t-2xl">
            <motion.div layoutId={`art-${project.id}`} className="absolute inset-0" transition={{ duration: 0.7, ease: EASE }}>
              <ProjectArt project={project} />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink-2 via-ink-2/30 to-transparent" />
            <button
              ref={closeBtn}
              type="button"
              onClick={onClose}
              data-cursor="close"
              aria-label="Close project"
              className="absolute right-4 top-[max(1rem,env(safe-area-inset-top))] z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-lg text-bone backdrop-blur transition hover:bg-black"
            >
              ✕
            </button>
            <div className="absolute inset-x-0 bottom-0 px-5 pb-6 sm:px-10">
              <motion.p className="mb-2 flex items-center gap-2 text-[11px] font-bold tracking-[0.34em] text-bone/80" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                <span className="font-display text-xl tracking-normal text-crimson-2">K</span> ORIGINAL
              </motion.p>
              <motion.h2
                id={`title-${project.id}-modal`}
                layoutId={`title-${project.id}`}
                className="font-display text-[clamp(2.6rem,7.5vw,5.5rem)] leading-[0.86] tracking-wide text-bone"
                transition={{ duration: 0.7, ease: EASE }}
              >
                {project.title}
              </motion.h2>
            </div>
          </div>

          <motion.div className="px-5 pb-12 sm:px-10" initial="hidden" animate="show" transition={{ staggerChildren: 0.08, delayChildren: 0.25 }}>
            {/* Meta row */}
            <motion.div variants={block} className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5 pt-3">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-mist">
                <span className="font-semibold text-[#46e3a8]">{project.year}</span>
                <span className="h-1 w-1 rounded-full bg-smoke" />
                <span>{project.genre}</span>
                <span className="h-1 w-1 rounded-full bg-smoke" />
                <span className="rounded bg-white/10 px-2 py-0.5 text-xs text-bone font-mono">{project.telemetry.engine}</span>
              </div>

              {/* View Switcher Tabs */}
              <div className="flex rounded-lg bg-black/40 p-1 border border-white/10" role="tablist">
                {(['overview', 'pipeline', 'query'] as ModalTab[]).map((t) => (
                  <button
                    key={t}
                    type="button"
                    role="tab"
                    aria-selected={tab === t}
                    onClick={() => {
                      playUiClick();
                      setTab(t);
                    }}
                    className={`relative rounded-md px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition ${
                      tab === t ? 'text-bone bg-white/15 shadow-sm' : 'text-smoke hover:text-mist'
                    }`}
                  >
                    {t === 'overview' ? 'Overview' : t === 'pipeline' ? '⚡ Architecture Flow' : '〈/〉 Production Query'}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* TAB 1: OVERVIEW */}
            {tab === 'overview' && (
              <motion.div key="overview-tab" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                <p className="mt-5 max-w-3xl text-lg leading-relaxed text-bone sm:text-xl">
                  {project.logline}
                </p>

                {project.github && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Magnetic>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        data-cursor="link"
                        className="flex min-h-12 items-center gap-2 rounded-md bg-bone px-6 text-[15px] font-bold text-ink transition hover:bg-white"
                      >
                        GitHub ↗
                      </a>
                    </Magnetic>
                  </div>
                )}

                {/* impact metrics */}
                <section className="mt-10">
                  <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-crimson-2">Result / Production Impact</h3>
                  <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-white/10 sm:grid-cols-4">
                    {project.metrics.map((m, i) => (
                      <div key={m.label} className="bg-ink p-4 sm:p-5">
                        <p className="font-display text-4xl leading-none text-bone sm:text-5xl" style={{ color: i === 0 ? project.palette.accent : undefined }}>
                          {m.value}
                        </p>
                        <p className="mt-2 text-xs leading-snug text-mist">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <div className="mt-12 grid gap-10 lg:grid-cols-[3fr_2fr]">
                  <section>
                    <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-crimson-2">My Contribution & Architecture</h3>
                    <ul className="space-y-4">
                      {project.build.map((b) => (
                        <li key={b} className="flex gap-3 text-[15px] leading-relaxed text-bone/85">
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: project.palette.accent }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </section>
                  <div className="space-y-10">
                    <section>
                      <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-crimson-2">Tech Stack</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((t) => (
                          <span key={t} className="glass rounded-full px-3 py-1.5 text-sm font-medium text-bone">
                            {t}
                          </span>
                        ))}
                      </div>
                    </section>
                    <section>
                      <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-crimson-2">Key Features</h3>
                      <ul className="space-y-2.5">
                        {project.features.map((f) => (
                          <li key={f} className="flex items-start gap-3 text-sm text-bone/85">
                            <span className="text-crimson-2">✓</span>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </section>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 2: INTERACTIVE PIPELINE FLOW */}
            {tab === 'pipeline' && (
              <motion.div key="pipeline-tab" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mt-8">
                <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-display tracking-wide text-bone">End-to-End Pipeline Topology</h3>
                    <p className="text-xs text-mist">Interactive visual data journey from event ingestion to real-time serving.</p>
                  </div>
                  <div className="flex gap-4 text-xs font-mono">
                    <span className="text-smoke">Throughput: <strong className="text-bone">{project.telemetry.throughput}</strong></span>
                    <span className="text-smoke">SLA: <strong className="text-[#34d399]">{project.telemetry.sla}</strong></span>
                    <span className="text-smoke">Latency: <strong className="text-amber-400">{project.telemetry.latency}</strong></span>
                  </div>
                </div>

                <div className="relative grid gap-4 md:grid-cols-5">
                  {project.pipelineStages.map((stage, idx) => (
                    <div
                      key={stage.stage}
                      className="group relative flex flex-col justify-between rounded-xl bg-ink/80 p-5 ring-1 ring-white/10 hover:ring-white/30 transition-all hover:-translate-y-1"
                    >
                      <div>
                        <div className="flex items-center justify-between text-[10px] font-bold tracking-widest text-smoke uppercase">
                          <span>STAGE 0{idx + 1}</span>
                          <span className="h-2 w-2 rounded-full bg-crimson-2 animate-pulse" />
                        </div>
                        <h4 className="mt-2 text-base font-bold text-bone">{stage.tool}</h4>
                        <p className="mt-1 text-xs text-crimson-2 font-semibold tracking-wider uppercase">{stage.stage}</p>
                        <p className="mt-3 text-xs leading-relaxed text-mist">{stage.desc}</p>
                      </div>

                      <div className="mt-5 border-t border-white/10 pt-3">
                        <span className="block text-[10px] uppercase tracking-wider text-smoke">Live Spec</span>
                        <span className="font-mono text-xs font-semibold text-bone">{stage.metric}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Animated Flow Pulse Line */}
                <div className="mt-6 flex items-center justify-center gap-2 text-xs text-smoke font-mono">
                  <span className="inline-block h-2 w-2 rounded-full bg-[#34d399] animate-ping" />
                  <span>Pipeline active • Continuous zero-downtime execution</span>
                </div>
              </motion.div>
            )}

            {/* TAB 3: PRODUCTION QUERY / CODE PREVIEW */}
            {tab === 'query' && (
              <motion.div key="query-tab" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mt-8">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-display tracking-wide text-bone">{project.sampleQuery.title}</h3>
                    <p className="text-xs text-mist">Sample verified code snippet demonstrating schema modeling, optimization, and ETL transformations.</p>
                  </div>
                  <button
                    type="button"
                    onClick={copyCode}
                    className="flex items-center gap-2 rounded-md bg-white/10 px-4 py-2 text-xs font-semibold text-bone transition hover:bg-white/20"
                  >
                    {copied ? '✓ Copied to Clipboard' : '📋 Copy Code'}
                  </button>
                </div>

                <div className="relative overflow-hidden rounded-xl border border-white/15 bg-black/90 p-5 font-mono text-[13px] leading-relaxed text-bone/90 shadow-inner">
                  <div className="absolute right-4 top-3 text-[10px] font-bold uppercase tracking-widest text-smoke">
                    {project.sampleQuery.language.toUpperCase()}
                  </div>
                  <pre className="overflow-x-auto py-2 selection:bg-crimson">
                    <code>{project.sampleQuery.code}</code>
                  </pre>
                </div>
              </motion.div>
            )}

            {/* more like this */}
            <section className="mt-14 border-t border-white/10 pt-8">
              <h3 className="mb-4 font-sans text-lg font-semibold text-bone">More Originals</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {more.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    data-cursor="view"
                    onClick={() => {
                      playUiClick();
                      onSwitch(p);
                    }}
                    className="group relative aspect-video overflow-hidden rounded-xl text-left ring-1 ring-white/10 transition hover:ring-white/30"
                  >
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                      <ProjectArt project={p} />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-mist">{p.genre}</p>
                      <p className="font-display text-3xl leading-none tracking-wide text-bone">{p.title}</p>
                    </div>
                  </button>
                ))}
              </div>
            </section>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
