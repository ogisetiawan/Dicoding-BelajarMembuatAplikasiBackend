const routes = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Homepage";
    },
  },
  {
    method: "*",
    path: "/",
    handler: (request, h) => {
      return "Halaman tidak dapat diakses dengan method tersebut";
    },
  },
  {
    method: "GET",
    path: "/about",
    handler: (request, h) => {
      return "About page";
    },
  },
  {
    method: "*",
    path: "/about",
    handler: (request, h) => {
      return "Halaman tidak dapat diakses dengan method";
    },
  },
  {
    method: "GET",
    path: "/hello/{name?}", //? path with a params
    handler: (request, h) => {
      const { name = "stranger" } = request.params; //? set if not params it will stranger
      const { lang } = request.query; //? set if query params

      if (lang === "id") { 
        return `Hai, ${name}!`;
      }
      return `Hello, ${name}!`;
    },
  },
  {
    method: 'POST',
    path: '/login',
    handler: (request, h) => { //? param h is response object (header response, content_type, etc)
        const { username, password } = request.payload; //? payload 
        return `Welcome ${username}!`;
        // return h.response('created').code(201);
    },
  },
  {
    method: "*",
    path: "/{any*}", //? any is everthing
    handler: (request, h) => {
      return "Halaman tidak ditemukan";
    },
  },
];

module.exports = routes;
