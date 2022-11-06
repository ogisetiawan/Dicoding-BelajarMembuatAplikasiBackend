const http = require("http"); //? init core mod http
const requestListener = (request, response) => {
  const { method } = request; //? request method dari client
  const { url } = request; //? request url dari client

  response.setHeader("Content-Type", "text/html"); //? set response header ( MIME TYPES )
  response.setHeader('X-Powered-By', 'NodeJS');//? set custom response header

  if (url === "/") {
    if (method === "GET") {
      response.statusCode = 200; //? set status code
      response.end("<h1>Ini adalah homepage</h1>");
    } else {
      response.statusCode = 400; //? set status code
      response.end(
        `<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`
      );
    }
  } else if (url === "/about") {
    if (method === "GET") {
      response.statusCode = 200; //? set status code
      response.end("<h1>Halo! Ini adalah halaman about</h1>");
    } else if (method === "POST") {
      let body = [];

      request.on("data", (chunk) => {
        body.push(chunk); //? potongan data push to body
      });

      //? set data dengan prosess stream/buffer
      request.on("end", () => {
        body = Buffer.concat(body).toString();
        const { name } = JSON.parse(body); //? parse json
        response.statusCode = 200; //? set status code
        response.end(`<h1>Hai, ${name}! ini adalah halaman about!</h1>`);
      });
    } else {
      response.statusCode = 400; //? set status code
      response.end(
        `<h1>Halaman tidak dapat diakses menggunakan ${method} request</h1>`
      );
    }
  } else {
    response.statusCode = 400; //? set status code
    response.end("<h1>Halaman tidak ditemukan!</h1>");
  }
};

const server = http.createServer(requestListener); //? init server from request
//? set address server
const port = 5000;
const host = "localhost";

//? method listen selalu standby
server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});

//? curl -X GET http://localhost:5000/ ( run by cmd )
//? curl -X GET http://localhost:5000/about
