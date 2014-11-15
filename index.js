var app = require('http').createServer(handler),
    io = require('socket.io')(app);

app.listen(7654);

function handler(req, res) {
    res.writeHeader(200, {'Access-Control-Allow-Origin': '*'});
    res.end('o.O');
}

io.on('connection', function(socket){
    console.log('connected');
    socket.emit('hi');

    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});
