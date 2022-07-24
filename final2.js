var highFive = function() {
	var x = 0; 
	return function() { 
      return x += 5; 
    } 
 };
 console.log( highFive()())
 console.log( highFive()())
