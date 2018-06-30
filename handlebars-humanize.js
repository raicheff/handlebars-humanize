/*
 * Handlebars / Humanize Plus
 *
 * Copyright (C) 2016 Boris Raicheff
 * All rights reserved
 */

(function(global, factory) {

  if (typeof exports === "object") {
    module.exports = factory(require("handlebars"), require("humanize-plus"));
  } else if (typeof define === "function" && define.amd) {
    define(["handlebars", "humanize-plus"], factory);
  } else {
    factory(global.Handlebars, global.Humanize);
  }

})(this, function(Handlebars, Humanize) {

  "use strict";

  var helpers = {

    /*
     * {{ordinal 22}}
     * >> "22nd"
     */
    "ordinal": function(value, options) {
      return Humanize.ordinal(value);
    },

    /*
     * {{plural 2 "duck"}}
     * >> "ducks"
     */
    "pluralize": function(number, singular/*, plural*/, options) {
      return Humanize.pluralize(number, singular/*, plural*/);
    },

    /*
     * {{format-number 1000 2}}
     * >> 1,000.00
     */
    "format-number": function(number, decimals, options) {
      return Humanize.formatNumber(number, decimals);
    }

  };

  // Register helpers
  Object.keys(helpers).forEach(function(name) { Handlebars.registerHelper(name, this[name]); }, helpers);

});

/* EOF */
