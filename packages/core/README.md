# @catalogfi/catalog

The `@catalogfi/catalog` package serves as an abstraction layer over the `@catalogfi/wallets` and `@catalogfi/orderbook` packages. It provides a simple interface to perform atomic swaps.

## Installation

```
npm install `@catalogfi/catalog`
```

For more information regarding using the library in different environments see [setup](https://github.com/catalogfi/catalog.js-v2/tree/main/packages/catalog#setup).

## Usage

1. Creating an atomic swap: ([should create an order with valid parameters](https://github.com/catalogfi/catalog.js-v2/blob/3019559e8857bf0b54b0c3affcdcad580b868947/packages/catalog/src/lib/catalog.spec.ts#L91))
2. Interacting with created orders: ([should initiate and redeem](https://github.com/catalogfi/catalog.js-v2/blob/3019559e8857bf0b54b0c3affcdcad580b868947/packages/catalog/src/lib/catalog.spec.ts#L107))

## Setup

### Node

No extra setup is required as both `cjs` and `esm` modules are supported.

### Vite

Install the vite plugins:

```
npm install vite-plugin-wasm vite-plugin-node-polyfills --save-dev
```

and update your `vite.config.ts` as follows:

```
import { defineConfig } from "vite";
import wasm from "vite-plugin-wasm";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
	plugins: [
		nodePolyfills(),
		wasm(),
		//other plugins
	],
	//other settings
});
```

### Webpack

If you're using webpack with a framework like next, then in your webpack config, (if you're using NextJS, this can be found in `next.config.js` ) add support for wasm as shown below:

```
/** @type {import('next').NextConfig} */
const nextConfig = {
	//other nextConfig options
	webpack: function (config, options) {
		//other webpack config options
		config.experiments = {
			...config.experiments,
			asyncWebAssembly: true,
		};
	return config;
	},
};
module.exports = nextConfig;
```