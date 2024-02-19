// for(var i=100;i>=0;i--){
//   console.log(i)
// }
 

var sum = 0
for (let i = 1; i <= 500; i++){
    sum += i
    if(sum >= 500) {
        break;
    }
}
    

console.log(sum)