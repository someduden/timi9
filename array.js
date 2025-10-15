let pets = ['dog', 'cat', 'parrot', 'monkey'];

console.log(pets);
console.log("Lengd á lista:", pets.length);
console.log("Sækir item nr 1 úr array:", pets[1]);

// =    "Gefa/skrifa value"
// ==   "Samanburður"
// ===  "Absolute samanburður"

console.log("Er (X) inn í listanum?", pets.includes('cat'));
console.log("Hvar í listanum er (X):", pets.indexOf('cat'));

// Við notum .includes() og .indexOf() til að hjálpa okkur að leita inn í array

let nums = [1, 2, 3, 4, 5, 6];

console.log("tölur:", nums);
// slice sker út value frá index1 að index2
let sliced = nums.slice(2,5)
console.log("slice:", sliced);

// Splice array.splice(start, deleteCount, svo ef við viljum bæta við, item1, item2... etc.)
// Notum splice til að taka úr/CUT og getum svo 
// skilið eftir okkur einhver variables í staðinn fyrir þær tölur sem við tókum

let spliced = nums.splice(1,3);
console.log("spliced:", spliced);
console.log("nums:", nums);

let letters = ['c', 'a', 'g', 'z', 'b'];

console.log("before .sort():", letters);

letters.sort();
console.log("after .sort():", letters);
letters.reverse();
console.log("reversed:", letters);

// map, filter, reduce - Þetta helsta
// map mapar yfir hvert item i array og runnar einhverja skipun fyrir hvern item
// filter mapar yfir hvert item i array og ef hann uppfyllir settar kröfur þá skilar hann honum til baka
// reduce byrjar með einhvern grunn og bætir við hverjum item ofan á hann
let numbers = [1,2,3,4,5];
console.log("numbers:", numbers);

let doubled = numbers.map((n) => n * 2);
console.log("tvöfaldað:", doubled);

let even = numbers.filter((number) => number % 2 === 0 );
console.log("jafnar tölur:", even);

let sum = numbers.reduce((sum, number) => sum + number);
console.log("summan:", sum);
