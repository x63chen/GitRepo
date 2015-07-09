app.factory('LoginService', function() {
  var loggedInUser = "";
  var loggingIn = false;
  var loginUser = function(newObj){
    loggedInUser = angular.copy(newObj);
  };
  var logoffUser = function() {
    loggedInUser = {};
  };
  var getUser = function(){
    return loggedInUser;
  };
  var userAuthenticated = function() {
    if (loggedInUser == ""){
      return false;
    }
    return true;
  };

  var loggingIn = function() {
    loggingIn = true;
  };

  var isLoggingIn = function() {
    return loggingIn;
  }

  return {
    loginUser: loginUser,
    logoffUser: logoffUser,
    getUser: getUser,
    userAuthenticated: userAuthenticated,
    loggingIn: loggingIn,
    isLoggingIn: isLoggingIn
  };
});
