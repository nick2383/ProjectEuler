// Problem 1: find the sum of all multiples of 3 or 5 below 1000

var sum = 0;

for(var i = 0; i < 1000; i += 3){
	sum += i;
}
for(var j = 0; j < 1000; j += 5){
	if(j % 3 !== 0){
		sum += j;
	}
}

console.log("The sum of all multiples of 3 or 5 below 1000 is " + sum);