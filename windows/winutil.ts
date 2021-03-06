"use strict";
// License: MIT

export function $<T extends HTMLElement>(
    q: string, el?: HTMLElement | DocumentFragment): T {
  if (!el) {
    el = document;
  }
  return el.querySelector<T>(q) as T;
}
