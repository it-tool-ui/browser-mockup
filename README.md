# React BrowserMockup UI component

This is a very light UI BrowserMockup component library for ReactJS.
It's using TailwindCSS for styling.

You can also view the demo and get the source code directly for each component without installing this library.

- [Preview and get the code](https://it-tool.app/browser-mockup)

## Installation

```sh
npm install @it-tool-ui/browser-mockup
```

```js
import { BrowserMockup } from "@it-tool-ui/browser-mockup";

<BrowserMockup
  variant="full"
  hasButtonColor={true}
  title="Google!"
  href="https://google.com"
>
  <h1 className="text-red-500">Hello world</h1>
</BrowserMockup>;
```
