//Problem3: prime numbers
var num = 600851475143;
var factorCheckBound = num/2;
var largestPrimeFactor;

var primeCheck = function(number){
	for(var i = 3; i < number/3; i += 2){
		if(number % i === 0){
			return false;
		}
	}
	return true;
}

for(var i = 1; i <= factorCheckBound; i += 2){
		if(num % i === 0){			// check to see if its a factor of num
			if(primeCheck(i)){		// check to see if its a prime
				largestPrimeFactor = i;	// update largest prime factor
			}
		}
	
}

console.log("The largest prime factor is " + largestPrimeFactor);
