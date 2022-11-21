Simple http server to receive logs and print them to the console in contexts, where logging is difficult, for example webworkers.

run with

```
npm run dev
```

Use the following from inside a webworker locally to get logs to the console.

```js
fetch("http://localhost:6969/", {
  method: "POST", // *GET, POST, PUT, DELETE, etc.
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ info: "hello" }),
});
```

for the body, the following fields are available:

```js
{ info: "hello" // blue text

, log: "hello", log: "hello", log: "hello" }
```
