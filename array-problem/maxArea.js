
/*
var maxArea = function(height) {
    let amount = 0;

    for (let i = 0; i < height.length - 1; i++) {
        let wedth = 1;
        
        for (let j = i+1; j < height.length; j++) {
            let max = 0;
            if (height[i] <= height[j]) {
                max += (height[i] * wedth);
            } else {
                max += (height[j] * wedth);
            }

            wedth++;

            if (amount < max) {
                amount = max;
            }
        }
    }

    return amount;
};
*/


var maxArea = function(height) {
    let amount = 0, i = 0, j = height.length - 1;

    while (i < j) {
        const wedth = (j-i) * Math.min(height[i],height[j]);

        amount = Math.max(amount,wedth);

        if (height[i] < height[j]) {
            i++
        } else {
            j--
        }
    }

    return amount;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));