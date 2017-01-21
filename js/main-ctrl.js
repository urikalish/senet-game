angular.module('mainApp').controller('mainCtrl', function mainCtrl($scope, $document, $timeout, mainServ) {

  $scope.model = {
    helpText: mainServ.getHelpText(),
    message: 'Throw the sticks'
  };

});
