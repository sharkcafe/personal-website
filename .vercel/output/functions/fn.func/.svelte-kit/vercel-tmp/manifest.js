export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["dog_hover.gif","dog_idle.gif","error.gif","oh-my-gaah.gif"]),
	mimeTypes: {".gif":"image/gif"},
	_: {
		client: {"start":"_app/immutable/entry/start.9d2d424e.js","app":"_app/immutable/entry/app.63706184.js","imports":["_app/immutable/entry/start.9d2d424e.js","_app/immutable/chunks/scheduler.387d4020.js","_app/immutable/chunks/singletons.0d0472fe.js","_app/immutable/chunks/index.f7adf726.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/entry/app.63706184.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.387d4020.js","_app/immutable/chunks/index.c0f316b9.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
