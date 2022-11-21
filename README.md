Simple http server to receive logs via http post requests and print them to the console and write to log files. Useful in contexts, where direct logging is difficult.

Setup, run:

```
npm install
```

Start the server on port 6969 with:

```
npm run dev
```

Use the following from inside some system to get logs to the console and also save the messages in a logfile:

```js
fetch("http://localhost:6969/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ info: "hello" }),
});
```

For the body, the following fields are available:

```js
{
  log: "message", // white text
  info: "message", // blue text
  warn: "message", // yellow text
  error: "message", // red text
};
```
Prints colored logs to the console.

<img width="286" alt="image" src="https://user-images.githubusercontent.com/62739623/203006122-e83b7188-aae6-4df6-8095-231d62853312.png">


Creates logfiles in a logs folder that look like this:

```
21.11.2022, 14:08:20      LOG:   just a message
21.11.2022, 14:08:21      INFO:  hello!
21.11.2022, 14:08:28      INFO:  hello you
21.11.2022, 14:08:40      WARN:  warning
21.11.2022, 14:08:55      ERROR: this is an error
```
