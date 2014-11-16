'use strict';

var inherit = require('inherit'),
    WidgetBackend = require('./WidgetBackend');

var StagingWidgetBackend = inherit(WidgetBackend, {
    ///
    __constructor: function(data, socket) {
        this.__base.apply(this, arguments);
        this._host = data.host;
        this.go();
    },

    ///
    go: function() {
        this._interval = setInterval(function() {
            this.emit('update', {total: '100GB', available: '7GB'});
        }.bind(this), 5000);
    },

    ///
    stop: function() {
        clearInterval(this._interval);
    }
});

module.exports = StagingWidgetBackend;
