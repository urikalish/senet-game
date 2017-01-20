angular.module('mainApp').factory('mainServ', function mainServ() {

	function __log(msg) {
    	console.log(msg);
  	}

  	return {
    	__log: __log
  	}

});

