'use strict';

var inherit = require('inherit'),
    _ = require('lodash'),
    WidgetBackend = require('./WidgetBackend');

var PRStatsWidgetBackend = inherit(WidgetBackend, {
    ///
    __constructor: function(data, socket) {
        this.__base.apply(this, arguments);
        this._repo = data.repo;
        this.go();
    },

    ///
    update: function() {
        this.emit('update', {
                users: {all: _.random(100), today: _.random(10)},
                team: {all: _.random(200), today: _.random(15)}
            });
    }
});

module.exports = PRStatsWidgetBackend;
