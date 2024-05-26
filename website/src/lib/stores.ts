import { writable, type Writable } from 'svelte/store';

export const isMobile = writable(true);
export const hero: Writable<HTMLElement | null> = writable(null);
export const showCalculator = writable(false);
