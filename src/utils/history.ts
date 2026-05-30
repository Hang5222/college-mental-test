import type { PersonalityCode } from '../data/results';

const STORAGE_KEY = 'college-mental-test-history';
const MAX_HISTORY = 20;

export interface HistoryRecord {
  timestamp: number;
  code: PersonalityCode;
  answers: Record<number, number>;
}

export function getHistory(): HistoryRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as HistoryRecord[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function addHistory(record: HistoryRecord): void {
  try {
    const list = getHistory();
    const newList = [record, ...list].slice(0, MAX_HISTORY);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newList));
  } catch {
    // ignore storage errors
  }
}

export function clearHistory(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore storage errors
  }
}
