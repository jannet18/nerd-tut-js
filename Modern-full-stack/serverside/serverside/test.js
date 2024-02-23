require("http")
  .createServer((inRequest, inResponse) => {
    inResponse.end("Hello from my first node web server");
  })
  .listen(8000);

//   npm install request --save

require("http")
  .createServer((inRequest, inResponse) => {
    const requestModule = require("request");
    requestModule("API", function (inErr, inResp, inBody) {
      inResponse.end(`Hello from my first Node Web Server: ${inBody}`);
    });
  })
  .listen(8000);

// https
const fs = require("fs");
const server = require("https")
  .createServer(
    {
      key: fs.readFileSync("my_key.pem"),
      cert: fs.readFileSync("my_cert.pem"),
    },
    (inRequest, inResponse) => {
      inResponse.writeHead(200);
      inResponse.end("I am protected byt TLS");
    }
  )
  .listen(443);
