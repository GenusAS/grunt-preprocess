/*global define*/

define([], function () {
  "use strict";

  //@echo globalOption

  //@exclude NODE_ENV='production'
  superExpensiveFunction()
  //@endexclude

  //@if NODE_ENV='production'
  superExpensiveFunction()
  //@endif

  /*@include include.txt */

});
