app.factory('LoginService', function() {
  var loggedInUser = "";
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
  return {
    loginUser: loginUser,
    logoffUser: logoffUser,
    getUser: getUser,
    userAuthenticated: userAuthenticated
  };
});
