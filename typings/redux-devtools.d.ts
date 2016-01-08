/// <reference path="./react/react.d.ts" />

declare module ReduxDevTools {
	function createDevTools(component: any): any;
}

declare module "redux-devtools" {
	export = ReduxDevTools;
}
