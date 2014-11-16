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
    update: function() {
        this.emit('update', {total: '100GB', available: _.random(10) + 'GB'});
    }
});

module.exports = StagingWidgetBackend;
