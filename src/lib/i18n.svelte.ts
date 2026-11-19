import vietnamese from './locales/vi.json';

export type Language = 'vi' | 'en';
export const language = $state<{ current: Language }>({ current: 'en' });
export const languageStorageKey = 'minh.website.language';
const catalog: Record<string, string> = vietnamese;

/** Source-language strings also form the English catalog. Code and URLs stay intact. */
export function t(source: string, local: Record<string, string> = {}): string {
  if (language.current === 'en') return source;
  const key = source.replace(/\s+/g, ' ').trim();
  const translated = local[key] ?? catalog[key];
  if (translated === undefined) return source;
  return `${/^\s/.test(source) ? ' ' : ''}${translated}${/\s$/.test(source) ? ' ' : ''}`;
}

export function setLanguage(value: Language): void {
  language.current = value;
  try { localStorage.setItem(languageStorageKey, value); } catch { /* Current tab still works without storage. */ }
}

export function initializeLanguage(): () => void {
  try {
    language.current = localStorage.getItem(languageStorageKey) === 'vi' ? 'vi' : 'en';
  } catch { language.current = 'en'; }
  const sync = (event: StorageEvent) => {
    if (event.key === languageStorageKey || event.key === null) language.current = event.newValue === 'vi' ? 'vi' : 'en';
  };
  window.addEventListener('storage', sync);
  return () => window.removeEventListener('storage', sync);
}

export function localizedImage(source: string): string {
  return language.current === 'vi' && source.startsWith('/images/guides/')
    ? source.replace(/\.svg$/, '.vi.svg') : source;
}
