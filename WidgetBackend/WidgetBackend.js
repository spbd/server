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

        this._interval = null;
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
    go: function() {
        if(this._interval) {
            clearInterval(this._interval);
        }

        this.update();
        this._interval = setInterval(this.update.bind(this), 5000);
    },

    ///
    update: function() {
    },

    ///
    stop: function() {
        clearInterval(this._interval);
    }
});

module.exports = WidgetBackend;
