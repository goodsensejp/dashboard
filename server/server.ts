var path = require('path');

export default (server) => {
  server.connection({ host: 'localhost', port: 3000 });

  server.register(require('inert'), (err) => {
    if(err) {
      throw err;
    }

    console.log("HEEEEEEEEREEEEEEE?");
  })


  server.route({
    method: 'GET',
    path: '/login',
    handler: (request, reply) => {
      console.log("Maybe?");
      reply.file(path.join(__dirname, '../index.html'));
    }
  });

  server.start((err) => {
    if(err) {
      throw err;
    }

    console.log("Server 2 is running!", server.info.uri);
  })  
}
