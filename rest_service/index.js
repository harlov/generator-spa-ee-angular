'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var path = require('path');
var ccUtils = require('../utils.js');
var chalk = require('chalk');
var _ = require('underscore');
var fs = require('fs');

_.str = require('underscore.string');
_.mixin(_.str.exports());

var RestServiceGenerator = module.exports = function RestServiceGenerator(args, options, config) {

    ccUtils.getNameArg(this, args);

    yeoman.generators.Base.apply(this, arguments);

};

util.inherits(RestServiceGenerator, yeoman.generators.Base);

RestServiceGenerator.prototype.askFor = function askFor() {
    var cb = this.async();

    var prompts = [{
        name: 'endpoint',
        message: 'endpoin resource url'
    }];

    ccUtils.addNamePrompt(this, prompts, 'service');

    this.prompt(prompts, function(props) {
        if(props.name) {
            this.name = props.name;
        }
        this.endpoint = props.endpoint;

        ccUtils.askForModuleAndDir('service', this, false, cb);
    }.bind(this));

};

RestServiceGenerator.prototype.files = function files() {
    ccUtils.processTemplates(this.name, ccUtils.getDirWithSrc(this.dir), 'rest_service', this, null, null, this.module);

};
