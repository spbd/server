var restify = require('restify'),
    pkgJson = require('./package');

var server = restify.createServer({
  name: pkgJson.name,
  version: pkgJson.version
});

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get('/echo/:name', function(req, res, next) {
  res.send(req.params);
  return next();
});

server.listen(7654, function() {
  console.log('%s listening at %s', server.name, server.url);
});
