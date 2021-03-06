'use strict';


/**
 * @module Questionnaire
 * @name Questionnaire
 * @description A representation of indicators, questions and
 * questionnaires used to assess need and situation of an emergency(or disaster) event.
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @licence MIT
 * @since  0.1.0
 * @version 0.1.0
 * @example
 *
 * const { app } = require('@codetanzania/emis-questionnaire');
 * app.start();
 *
 */


/* dependencies */
const _ = require('lodash');
const { app, mount } = require('@lykmapipo/express-common');
const { include } = require('@lykmapipo/include');
const pkg = include(__dirname, 'package.json');
const Indicator = include(__dirname, 'lib', 'indicator.model');
const Question = include(__dirname, 'lib', 'question.model');
const Questionnaire = include(__dirname, 'lib', 'questionnaire.model');
const indicatorRouter = include(__dirname, 'lib', 'indicator.http.router');
const questionRouter = include(__dirname, 'lib', 'question.http.router');
const questionnaireRouter =
  include(__dirname, 'lib', 'questionnaire.http.router');


/**
 * @name info
 * @description package information
 * @type {Object}
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 1.0.0
 * @version 0.1.0
 */
exports.info = _.merge({}, _.pick(pkg, [
  'name', 'description', 'version', 'license',
  'homepage', 'repository', 'bugs', 'sandbox', 'contributors'
]));


/**
 * @name Indicator
 * @description Indicator model
 * @type {mongoose.Model}
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 1.0.0
 * @version 0.1.0
 */
exports.Indicator = Indicator;


/**
 * @name Question
 * @description Question model
 * @type {mongoose.Model}
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 1.0.0
 * @version 0.1.0
 */
exports.Question = Question;


/**
 * @name Questionnaire
 * @description Questionnaire model
 * @type {mongoose.Model}
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 1.0.0
 * @version 0.1.0
 */
exports.Questionnaire = Questionnaire;


/**
 * @name indicatorRouter
 * @description indicator http router
 * @type {express.Router}
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 1.0.0
 * @version 0.1.0
 */
exports.indicatorRouter = indicatorRouter;


/**
 * @name questionRouter
 * @description question http router
 * @type {express.Router}
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 1.0.0
 * @version 0.1.0
 */
exports.questionRouter = questionRouter;


/**
 * @name questionnaireRouter
 * @description questionnaire http router
 * @type {express.Router}
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 1.0.0
 * @version 0.1.0
 */
exports.questionnaireRouter = questionnaireRouter;


/**
 * @name apiVersion
 * @description http router api version
 * @type {String}
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 1.0.0
 * @version 0.1.0
 */
exports.apiVersion = indicatorRouter.version;


/**
 * @name app
 * @description express app
 * @type {Object}
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 1.0.0
 * @version 0.1.0
 */
Object.defineProperty(exports, 'app', {
  get() {
    /* @todo bind oauth middlewares authenticate, token, authorize */
    mount(indicatorRouter);
    mount(questionRouter);
    mount(questionnaireRouter);
    return app;
  }
});
