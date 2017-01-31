angular.module('mainApp').factory('logger', function logger() {

	function log(msg) {
    	console.log('SENET - ' + msg);
  	}

  	return {
    	log: log,
  	}

});