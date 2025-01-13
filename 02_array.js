const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)//it help to push the element into other 

// console.log(marvel_heros);//it will merge the other array as single element "[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]"


// console.log(marvel_heros[3][1]);// if both the elemnt are merge then if we want ot acces the  we have to use sach a way 

const allHeros = (marvel_heros).concat (dc_heros)//it help to merge a other elemnt (array) and return the other single array [ 'superman', 'flash', 'batman','superman','flash','batman' ], it doest requried any" push" tag to inerigrate 

console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

 console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] // array key andar array hn (multipple array)

const real_another_array = another_array.flat(Infinity)//The flat() method in JavaScript creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. If no depth is provided, it defaults to 1
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))// check if this is array or not 
console.log(Array.from("Hitesh"))// convert into array not only string if will be number anything 
console.log(Array.from({name: "hitesh"})) // interesting it wll give [] because it doest understand which you want to make array key or value , so we have define specifcally 

let score1 = 100
let score2 = 200
let score3 = 300// through this we can make array with the multiple variable vaule 
console.log(Array.of(score1, score2, score3))