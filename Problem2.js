//Problem 2: Fibonacci sequence
var sum = 0;
var currentFib = 0;
var lastFib = 1;
var secondLastFib = 0;

while(currentFib <= 4000000){
	currentFib = lastFib + secondLastFib; // find next Fibonacci number in sequence
	if(currentFib % 2 === 0){
		sum += currentFib;
	}
	//shift Fibonacci numbers back by one position
	secondLastFib = lastFib;
	lastFib = currentFib;
}

console.log("The sum of the even Fibonacci numbers below 4 million = " + sum);