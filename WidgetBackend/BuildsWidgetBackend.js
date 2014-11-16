'use strict';

var inherit = require('inherit'),
    _ = require('lodash'),
    WidgetBackend = require('./WidgetBackend');

var BuildsWidgetBackend = inherit(WidgetBackend, {
    ///
    __constructor: function(data, socket) {
        this.__base.apply(this, arguments);
        this._init();
    },

    ///
    _init: function() {
        this.emit('libs', ['bem-core', 'bem-components']);
        this.on('init', function(data) {
            this._lib = data.lib;
            this.go();
        }.bind(this));
    },

    ///
    go: function() {
        this._interval = setInterval(function() {
            this.emit('update', {
                    users: {all: _.random(100), today: _.random(10)},
                    team: {all: _.random(200), today: _.random(15)}
                });
        }.bind(this), 5000);
    },

    ///
    stop: function() {
        clearInterval(this._interval);
    }
});

module.exports = BuildsWidgetBackend;
