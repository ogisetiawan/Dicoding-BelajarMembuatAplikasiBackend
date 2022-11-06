const Hapi = require("@hapi/hapi"); //? init http hapi
const routes = require('./routes');

const init = async () => { //? init server port/host/etc
  const server = Hapi.server({
    port: 5000,
    host: "localhost",
  });

  //? object configuration HAPI
  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
