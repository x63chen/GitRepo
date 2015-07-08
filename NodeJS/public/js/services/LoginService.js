angular.module('LoginService', []).service('CookieService', function($cookies) {
  var user = {};
  var cookieUser = $cookies.get('userid');
  this.UserAuthenticated = function() {
    if(isEmpty(cookieUser)) {
      return false;
    }
    return true;
  };

  function isEmpty(obj) {

    // null and undefined are "empty"
    if (obj == null) return true;

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length > 0)    return false;
    if (obj.length === 0)  return true;
    return true;
  }
});
