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
        this.on('get-libs', function() {
            this.emit('libs', ['bem-core', 'bem-components']);
            this.on('init', function(data) {
                this._lib = data.lib;
                this.go();
            }.bind(this));
        }.bind(this));
    },

    ///
    go: function() {
        this._interval = setInterval(function() {
            this.emit('update', [
                    {
                        name: 'dev',
                        status: _.random(1) ? 'success' : 'failed',
                        time: '23.10.2014 - 10:21'
                    },
                    {
                        name: 'support/2.x',
                        status: 'success',
                        time: '23.10.2014 - 10:21'
                    }
                ]
            );
        }.bind(this), 5000);
    },

    ///
    stop: function() {
        clearInterval(this._interval);
    }
});

module.exports = BuildsWidgetBackend;
