'use strict';

var _ = require('lodash'),
    backends = {
        'staging-space': require('./StagingWidgetBackend'),
        'lib-status': require('./BuildsWidgetBackend'),
        'pr-stats': require('./PRStatsWidgetBackend'),
        'reviewers': require('./ReviewersWidgetBackend')
    },
    instances = [];

exports.registerNewInstance = function(data, socket) {
    if(!_(backends).keys().contains(data.type)) {
        throw new Error('Unknown backend type ' + data.type);
    }

    var instance = new backends[data.type](data, socket);
    instances.push(instance);
    console.log('New widget backend instance registered. Type: %s, id: %s', instance.type, instance.id);
    socket.on('disconnect', function() {
        _.remove(instances, instance);
        console.log('Widget backend instance removed. Type: %s, id: %s', instance.type, instance.id);
    }.bind(this));
};
