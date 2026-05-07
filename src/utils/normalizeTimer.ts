import type { TimerItem } from '../components/Timer/index';

export const normalizeTimer = (t: any): TimerItem => ({
  id: Number(t.id ?? Date.now()),
  title: String(t.title ?? ''),
  startTime: Number(t.startTime ?? Date.now()),
  elapsed: Number(t.elapsed ?? 0),
  isRunning: Boolean(t.isRunning ?? false)
});