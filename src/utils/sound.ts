/**
 * Native Web Audio Engine — Zero external audio assets.
 * Synthesizes subtle cinematic and tactile UI sound effects directly via the Web Audio API.
 */

let ctx: AudioContext | null = null;
let muted = false;

// Initialize mute state from storage
try {
  muted = localStorage.getItem('krishna-series-muted') === 'true';
} catch {
  muted = false;
}

const listeners = new Set<(isMuted: boolean) => void>();

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!ctx) {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioCtx) {
      ctx = new AudioCtx();
    }
  }
  if (ctx && ctx.state === 'suspended') {
    ctx.resume();
  }
  return ctx;
}

export function isAudioMuted(): boolean {
  return muted;
}

export function toggleAudioMute(): boolean {
  muted = !muted;
  try {
    localStorage.setItem('krishna-series-muted', String(muted));
  } catch {
    /* ignore */
  }
  listeners.forEach((fn) => fn(muted));
  return muted;
}

export function subscribeAudioMute(fn: (isMuted: boolean) => void): () => void {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

/**
 * Cinematic deep sub-bass boom — reminiscent of a theater opening title sequence.
 */
export function playCinematicBoom() {
  if (muted) return;
  const audio = getAudioContext();
  if (!audio) return;

  try {
    const now = audio.currentTime;

    // Sub oscillator (deep fundamental)
    const osc = audio.createOscillator();
    const gain = audio.createGain();
    const filter = audio.createBiquadFilter();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(85, now);
    osc.frequency.exponentialRampToValueAtTime(32, now + 1.2);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(140, now);
    filter.frequency.exponentialRampToValueAtTime(45, now + 1.2);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.4, now + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(audio.destination);

    osc.start(now);
    osc.stop(now + 1.85);

    // Warm second harmonic for cinematic depth
    const osc2 = audio.createOscillator();
    const gain2 = audio.createGain();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(130, now);
    osc2.frequency.exponentialRampToValueAtTime(55, now + 0.8);

    gain2.gain.setValueAtTime(0.001, now);
    gain2.gain.linearRampToValueAtTime(0.12, now + 0.05);
    gain2.gain.exponentialRampToValueAtTime(0.0001, now + 0.9);

    osc2.connect(gain2);
    gain2.connect(audio.destination);

    osc2.start(now);
    osc2.stop(now + 0.95);
  } catch {
    /* audio playback blocked by browser gesture rules */
  }
}

/**
 * Soft tactile micro-click for UI interactions.
 */
export function playUiClick() {
  if (muted) return;
  const audio = getAudioContext();
  if (!audio) return;

  try {
    const now = audio.currentTime;
    const osc = audio.createOscillator();
    const gain = audio.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(1200, now);
    osc.frequency.exponentialRampToValueAtTime(400, now + 0.04);

    gain.gain.setValueAtTime(0.06, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.045);

    osc.connect(gain);
    gain.connect(audio.destination);

    osc.start(now);
    osc.stop(now + 0.05);
  } catch {
    /* ignore */
  }
}

/**
 * High-tech telemetry chirp for switching modes and tabs.
 */
export function playTelemetryChirp() {
  if (muted) return;
  const audio = getAudioContext();
  if (!audio) return;

  try {
    const now = audio.currentTime;
    const osc = audio.createOscillator();
    const gain = audio.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, now);
    osc.frequency.setValueAtTime(1760, now + 0.04);

    gain.gain.setValueAtTime(0.04, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.1);

    osc.connect(gain);
    gain.connect(audio.destination);

    osc.start(now);
    osc.stop(now + 0.1);
  } catch {
    /* ignore */
  }
}

/**
 * Smooth resonant whoosh when opening modals.
 */
export function playModalWhoosh() {
  if (muted) return;
  const audio = getAudioContext();
  if (!audio) return;

  try {
    const now = audio.currentTime;
    const osc = audio.createOscillator();
    const gain = audio.createGain();
    const filter = audio.createBiquadFilter();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(160, now);
    osc.frequency.exponentialRampToValueAtTime(260, now + 0.12);
    osc.frequency.exponentialRampToValueAtTime(90, now + 0.35);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(350, now);
    filter.frequency.linearRampToValueAtTime(800, now + 0.12);
    filter.frequency.exponentialRampToValueAtTime(180, now + 0.35);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.09, now + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.38);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(audio.destination);

    osc.start(now);
    osc.stop(now + 0.4);
  } catch {
    /* ignore */
  }
}
