'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.configure = configure;

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaEventAggregator = require('aurelia-event-aggregator');

function configure(config) {
    console.log(_aureliaDependencyInjection.Container);
    var container = _aureliaDependencyInjection.Container.instance;
    var ea = container.get(_aureliaEventAggregator.EventAggregator);

    if (window['_paq']) {
        ea.subscribe('router:navigation:success', function () {
            _paq.push(['trackPageView', location.pathname]);
        });
    } else {
        console.warn('piwik module is loaded but no piwik _paq object was found');
    }
}