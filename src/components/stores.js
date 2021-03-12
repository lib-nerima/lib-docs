import { writable } from 'svelte/store';

export const pageNum = writable(1);
export const set_page = writable(1);

export const version = writable('0.0.1');
