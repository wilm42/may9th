function repeat (fn, n){
	for(let i =0 ; i < n; i++){
		fn();
	}
}

repeat(hello, 5);
repeat(goodbye,5);

function hello (){
	console.log('Hello World!');
}

function goodbye (){
	console.log('Goodbye World!');
}

//DRILL 2

// Return only names that begin with 'R'
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// This is a "predicate function" - it's a function that only returns a boolean
//const filteredNames = filter(myNames, function(name) {
//    return name[0] === 'R';
//});

const filteredNames = filter(myNames, ((name) => name[0] === 'R')); 
console.log(filteredNames); 
//filter(myNames, function(name){}) => console.log(filteredNames) // => ['Rich', 'Ray']

// TASK -- DEFINE YOUR FILTER FUNCTION BELOW:
function filter(arr, fn) {
	retArray = [];
	for (let i=0; i <arr.length; i++){
		if(fn(arr[i])){
			retArray.push(arr[i]);
		}
	}
	return retArray;

}

function hazardWarningCreator(typeOfWarning){
	let warningCounter = 0;
	return function(location){
		let time = "times";
		warningCounter += 1;
		if(warningCounter === 1){
			time = 'time';
		}
		console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
		console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${time} today!`);
	}
}

const rocksWarning = hazardWarningCreator('rocks on road');
const ducksWarning = hazardWarningCreator('big ducks all over the road but they\'re cute');
const iceWarning = hazardWarningCreator('ice on road');

rocksWarning('Harper ave');

ducksWarning('green st');
ducksWarning('main st');
ducksWarning('street st');
ducksWarning('larry moe and curly road');

iceWarning('reading st');
iceWarning('highland ave');


