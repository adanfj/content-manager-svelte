import { browser } from '$app/env';

import { writable } from 'svelte/store';

const defaultValue = {
  "Documents": {},
  "Images": {},
  "Videos": {},
};

const initialValue = browser ? window.localStorage.getItem('media') ?? defaultValue : defaultValue;
const [media, userMedia] = [writable(initialValue), writable(initialValue)]

media.subscribe((value) => {

  if (browser) window.localStorage.setItem('media', value);

});

export default [media, userMedia]