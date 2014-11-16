'use strict';

var inherit = require('inherit');

var WidgetBackend = inherit({
    ///
    __constructor: function(data, socket) {
        if(!data.id) {
            throw new Error('No id in data');
        }

        this.type = data.type;
        this.id = data.id;
        this._socket = socket;

        this._socket.on('disconnect', function() {
            this.stop();
        }.bind(this));
    },

    ///
    emit: function(msg, data) {
        this._socket.emit(msg + '_' + this.id, data);
    },

    ///
    on: function(msg, callback) {
        this._socket.on(msg + '_' + this.id, callback);
    },

    ///
    stop: function() {}
});

module.exports = WidgetBackend;
