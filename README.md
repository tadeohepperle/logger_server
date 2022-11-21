Simple http server to receive logs via http post requests and print them to the console. Useful in contexts, where logging is difficult, for example in webworkers (that have access to the fetch API easily).

Setup, run:

```
npm install
```

Start the server on port 6969 with:

```
npm run dev
```

Use the following from inside a webworker locally to get logs to the console and also save the messages in a logfile:

```js
fetch("http://localhost:6969/", {
  method: "POST", // *GET, POST, PUT, DELETE, etc.
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ info: "hello" }),
});
```

For the body, the following fields are available:

```js
{ info: "hello" // blue text

, log: "hello", log: "hello", log: "hello" }
```

Creates logfiles in a logs folder that look like this:

```
21.11.2022, 14:08:20      LOG:   just a message
21.11.2022, 14:08:21      INFO:  hello!
21.11.2022, 14:08:28      INFO:  hello you
21.11.2022, 14:08:40      WARN:  warning
21.11.2022, 14:08:55      ERROR: this is an error
```
