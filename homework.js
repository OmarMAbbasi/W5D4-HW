// in block
// in block

function mysteryScoping1() { 
  var x = 'out of block';
  if (true) {
    var x = 'in block';  
    console.log(x);
  }
  console.log(x);
}

// in block
// out of block

function mysteryScoping2() {
  const x = 'out of block';
  if (true) {
    const x = 'in block';  
    console.log(x);
  }
  console.log(x);
}


function mysteryScoping3() {
  const x = 'out of block';
  if (true) {
    var x = 'in block';  //errors
    console.log(x);
  }
  console.log(x); //out of block
}

//in block
//out of block
function mysteryScoping4() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';  
    console.log(x);
  }
  console.log(x);
}




function mysteryScoping5() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';  
    console.log(x); //in block
  }
  let x = 'out of block again'; //errors
  console.log(x); //out of block
}


function madLib(verb, adjective, noun){
  verb = verb.toUpperCase()
  adjective = adjective.toUpperCase()
  noun = noun.toUpperCase()
  let lib = `We shall ${verb} the ${adjective} ${noun}`
  console.log(lib)

}

function isSubstring(searchstring, substring) {
  return searchstring.includes(substring) 


}

function fizzbuzz(array) {
  var magic = []
  for (let i = 0; i < array.length; i++) {
    if ((array[i]%3 == 0 && array[i]%5 != 0) || (array[i]%3 != 0 && array[i]%5 == 0)) {
      magic.push(array[i])
    }
  }
  console.log(magic)
}

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num%i == 0) {
      return false
    }
  }
  return true
}

function sumOfNPrimes(n){
  var i = 0
  var num = 2
  var sum = 0
  while (i != n) {
    if (isPrime(num)) {
      sum += num
      i++
    }
  }
  return sum
}