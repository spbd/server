'use strict';

var inherit = require('inherit'),
    _ = require('lodash'),
    WidgetBackend = require('./WidgetBackend');

var ReviewersWidgetBackend = inherit(WidgetBackend, {
    ///
    __constructor: function(data, socket) {
        this.__base.apply(this, arguments);
        this.go();
    },

    ///
    go: function() {
        this._interval = setInterval(function() {
            this.emit('update', [
                    {
                        id: 'TASKID-2313',
                        desk: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi' +
                            'eligendi sint, expedita at beatae reprehenderit deserunt fugit totam' +
                            'neque unde.',
                        points: 40,
                        priority: 'critical',
                        reviewer: {
                            name: 'Alex Baumgertner',
                            avatar: 'https://avatars0.githubusercontent.com/u/223620?v=3&s=120'
                        }
                    },
                    {
                        id: 'TASKID-2311',
                        desk: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi' +
                            'eligendi sint, expedita at beatae reprehenderit deserunt fugit totam' +
                            'neque unde.',
                        points: 40,
                        priority: 'normal',
                        reviewer: {
                            name: 'Dima Belitsky',
                            avatar: 'https://avatars1.githubusercontent.com/u/10816?v=3&s=120'
                        }
                    },
                    {
                        id: 'TASKID-2113',
                        desk: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi' +
                            'eligendi sint, expedita at beatae reprehenderit deserunt fugit totam' +
                            'neque unde.',
                        points: 40,
                        priority: 'critical',
                        reviewer: {
                            name: 'Anton Usmansky',
                            avatar: 'https://avatars3.githubusercontent.com/u/7701229?v=3&s=120'
                        }
                    },
                    {
                        id: 'TASKID-2113',
                        desk: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi' +
                            'eligendi sint, expedita at beatae reprehenderit deserunt fugit totam' +
                            'neque unde.',
                        points: 40,
                        priority: 'critical',
                        reviewer: {
                            name: 'Ivan',
                            avatar: 'https://avatars0.githubusercontent.com/u/3128824?v=3&s=120'
                        }
                    },
                    {
                        id: 'TASKID-2113',
                        desk: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi' +
                            'eligendi sint, expedita at beatae reprehenderit deserunt fugit totam' +
                            'neque unde.',
                        points: 40,
                        priority: 'critical',
                        reviewer: {
                            name: 'Alex Tikvach',
                            avatar: 'https://avatars3.githubusercontent.com/u/3048454?v=3&s=120'
                        }
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

module.exports = ReviewersWidgetBackend;
