/**
 * Find 1 to 50 numbers that are divisable by 3 and 5
 */

for (let i = 1; i <= 50; i++) {
    if (i % 3 == 0) {
        console.log(i);
    }
    else if (i % 5 == 0) {
        console.log(i);
    }
}

/**
 * Find the largest name from a friend list
 */
let friends =['Mike','Ward','and'];
let tmp = [];
for(let i=0;i<friends.length-1;i++){
   // console.log(friends[i].length);
    if(friends[i].length>friends[i+1].length){
        tmp = friends[i];
    }
    
}
console.log(tmp);
