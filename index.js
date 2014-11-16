var io = require('socket.io')(7654),
    WidgetBackend = require('./WidgetBackend');

io.on('connection', function(socket){
    socket.on('new-instance', function(data) {
        try {
            WidgetBackend.registerNewInstance(data, socket);
        } catch(e) {
            console.error('Could not register new widget backend with data', data, e);
        }
    });
});
