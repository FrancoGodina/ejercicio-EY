const jumpOnClouds = function(c) {
    let j = 0;
    for (let i = 0; i < c.length - 1; i++, j++) {
        if (c[i + 2] == 0 && i + 2 < c.length) {
            i++;
        }
    }
    return j;
}

let firstArray = [0,0,1,0,0,1,0];
let secondArray = [0,0,0,0,1,0];

console.log(jumpOnClouds( firstArray ));
console.log(jumpOnClouds( secondArray ));
  