# 🛸 next-custom-server
> [Next.js](https://github.com/zeit/next.js) plugin enabling custom servers to be processed by Webpack.

## 🔗 Installation

Install via `npm`:

```sh
npm install next-custom-server --save
```

## 🛠️ Usage

With the release of [Next.js 5.0](https://zeit.co/blog/next5), universal Webpack makes the consistent use of loaders and code transformations in your Next.js application possible! To enjoy these benefits in your custom server entry point (and maintain a consistent syntax between your client and server), apply this plugin to your `next.config.js`, like so:

```js
const withCustomServer = require('next-custom-server');

module.exports = withCustomServer({
    serverEntry: './path/to/custom/server.js' // Optional, defaults to <NEXT_DIR>/server*
});
```

Then, in your `server.js`, export a function that accepts a Next.js application as its argument:

```js
export default nextApp => {
    // Do fancy custom server stuff here!
    nextApp.start(3000);
};
```

Finally, update your `package.json` scripts:

```json
{
    "scripts": {
        "dev": "next-custom-server dev",
        "build": "next build",
        "start": "next-custom-server start"
    }
}
```

### CLI
```
next-custom-server [dir]

Replaces `next dev`. Starts the application in development mode (hot-code
reloading, error reporting, etc).

Commands:
  next-custom-server dev [dir]    Replaces `next dev`. Starts the application in
                                  development mode (hot-code reloading, error
                                  reporting, etc).                     [default]
  next-custom-server start [dir]  Replaces `next start`. Starts the application
                                  in production mode.
                                  The application should be compiled with `next
                                  build` first.

Options:
  --version       Show version number                                  [boolean]
  --help          Show help                                            [boolean]
  --dir           The location of your Next project               [default: "."]
  --staticMarkup  Use renderToStaticMarkup() instead of renderToString().
                                                                [default: false]
  --quiet         Hide error messages containing server information.
                                                                [default: false]
```

## ❤️ Contributing
[Please see contributing.md](./contributing.md)

## ⚖️ License

[The MIT License](./LICENSE)
