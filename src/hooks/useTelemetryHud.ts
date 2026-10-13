import { useSyncExternalStore } from 'react';
import { isAudioMuted, toggleAudioMute, subscribeAudioMute, playTelemetryChirp } from '../utils/sound';

let hudMode = false;
try {
  hudMode = sessionStorage.getItem('krishna-telemetry-hud') === 'true';
} catch {
  hudMode = false;
}

const hudListeners = new Set<(mode: boolean) => void>();

export function isHudModeActive(): boolean {
  return hudMode;
}

export function toggleHudMode(): boolean {
  hudMode = !hudMode;
  try {
    sessionStorage.setItem('krishna-telemetry-hud', String(hudMode));
  } catch {
    /* ignore */
  }
  playTelemetryChirp();
  hudListeners.forEach((fn) => fn(hudMode));
  return hudMode;
}

export function useHudMode(): [boolean, () => void] {
  const current = useSyncExternalStore(
    (cb) => {
      hudListeners.add(cb);
      return () => hudListeners.delete(cb);
    },
    () => hudMode,
    () => false,
  );
  return [current, toggleHudMode];
}

export function useAudioMute(): [boolean, () => void] {
  const muted = useSyncExternalStore(
    (cb) => subscribeAudioMute(cb),
    () => isAudioMuted(),
    () => false,
  );
  return [muted, toggleAudioMute];
}
