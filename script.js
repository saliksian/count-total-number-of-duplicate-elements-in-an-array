let dupArray = [1,2,3,4,5,6,1,4,9,10,10]
let duplicate =0;

for (let i = 0; i < dupArray.length; i++) {

    for (let j = i+1; j < dupArray.length; j++) {
      if(dupArray[i]==dupArray[j]){
        duplicate = duplicate+1;
      }
    }
    
}
console.log(duplicate);