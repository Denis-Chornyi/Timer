import type { TimerItem } from '../components/Timer/index';

export const formatTime = (ms: number): string => {
  if (!ms || isNaN(ms)) return '00:00:00';

  const totalSeconds = Math.floor(ms / 1000);
  const h = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  const m = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const s = String(totalSeconds % 60).padStart(2, '0');

  return `${h}:${m}:${s}`;
};

export const calculateTime = (timer: TimerItem): number => {
  if (!timer.startTime || isNaN(timer.startTime)) return timer.elapsed || 0;

  return timer.isRunning ? timer.elapsed + (Date.now() - timer.startTime) : timer.elapsed;
};

export const getDefaultTitle = () => {
  const now = new Date();

  return `From ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(
    2,
    '0'
  )}`;
};
