import { match } from "assert";
import fs from "fs";
import http from "http";
import { join } from "path";

const server = http.createServer((req, res) => {
  console.log(req.url);
  //   res.writeHead(200, { "Content-Type": "text/html" });
  //   res.write(`<h1>Hello ${req.url}</h1>`);
  //   res.end();e

  //   const data = { name: "John Doe", age: 30, job: "Web Developer" };

  //   res.writeHead(200, { "Content-Type": "application/json" });
  //   res.write(JSON.stringify(data));
  //   res.end();

  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    const content = fs.readFileSync("./public/index.html", "utf-8");
    res.write(content);
    res.end();
    return;
  }

  // application/javascript
  if (req.url?.endsWith(".js")) {
    res.writeHead(200, { "Content-Type": "application/javascript" });
  }
  //   text/css
  if (req.url?.endsWith(".css")) {
    res.writeHead(200, { "Content-Type": "text/css" });
  }
  const content = fs.readFileSync(`./public/${req.url}`, "utf-8");

  res.write(content);
  res.end();
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
