'use strict';

var inherit = require('inherit'),
    _ = require('lodash'),
    WidgetBackend = require('./WidgetBackend'),
    LIBS = ['bem-core', 'bem-components'];

var BuildsWidgetBackend = inherit(WidgetBackend, {
    ///
    __constructor: function(data, socket) {
        this.__base.apply(this, arguments);
        this._interval = null;
        this._init();
    },

    ///
    _init: function() {
        this.on('get-libs', function() {
            this.emit('libs', LIBS);
            this.on('init', function(data) {
                this._lib = data.lib;
                this.go();
            }.bind(this));
        }.bind(this));
    },

    ///
    go: function() {
        if(this._interval) {
            clearInterval(this._interval);
        }

        this._update();
        this._interval = setInterval(this._update.bind(this), 5000);
    },

    ///
    _update: function() {
        var data = (function(lib) {
                switch(lib) {
                    case LIBS[0]:
                        return [
                            {
                                name: 'dev',
                                status: _.random(1) ? 'success' : 'failed',
                                time: '23.10.2014 - 10:21'
                            },
                            {
                                name: 'support/2.x',
                                status: _.random(1) ? 'success' : 'failed',
                                time: '23.10.2014 - 10:21'
                            }
                        ];
                    case LIBS[1]:
                        return [
                            {
                                name: 'master',
                                status: _.random(1) ? 'success' : 'failed',
                                time: '23.10.2014 - 10:21'
                            },
                            {
                                name: 'support/1.x',
                                status: _.random(1) ? 'success' : 'failed',
                                time: '23.10.2014 - 10:21'
                            },
                            {
                                name: 'support/2.x',
                                status: _.random(1) ? 'success' : 'failed',
                                time: '23.10.2014 - 10:21'
                            }
                        ];
                }
            })(this._lib);

        this.emit('update', data);
    },

    ///
    stop: function() {
        clearInterval(this._interval);
    }
});

module.exports = BuildsWidgetBackend;
