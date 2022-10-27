'use strict';

/**
 * coffee-store service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::coffee-store.coffee-store');
