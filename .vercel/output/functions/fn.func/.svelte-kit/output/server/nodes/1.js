

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.38887201.js","_app/immutable/chunks/scheduler.387d4020.js","_app/immutable/chunks/index.c0f316b9.js","_app/immutable/chunks/singletons.078fa873.js","_app/immutable/chunks/index.f7adf726.js"];
export const stylesheets = ["_app/immutable/assets/1.7aad9d3a.css"];
export const fonts = [];
