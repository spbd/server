'use strict';

var inherit = require('inherit'),
    _ = require('lodash'),
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
            this.emit('update', {total: '100GB', available: _.random(10) + 'GB'});
        }.bind(this), 5000);
    },

    ///
    stop: function() {
        clearInterval(this._interval);
    }
});

module.exports = StagingWidgetBackend;
