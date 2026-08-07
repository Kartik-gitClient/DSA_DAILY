/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {

    let temp = 0;


for(let i =0 ; i<image.length ; i++){
    let Lptr = 0;
    let Rptr = image[i].length - 1;

    while(Lptr <= Rptr){
        if (Lptr === Rptr) {
                // If pointers meet in the middle, just invert the single bit
                image[i][Lptr] = image[i][Lptr] ^ 1;
        } else {
                // Swap the values AND invert them at the same time
                let temp = image[i][Lptr] ^ 1;
                image[i][Lptr] = image[i][Rptr] ^ 1;
                image[i][Rptr] = temp;
        }
        Lptr++
        Rptr--
    }

}
    console.log(image)
    return image;

    
};