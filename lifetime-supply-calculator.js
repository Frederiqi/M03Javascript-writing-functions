const calculateSupply = function (age, dayAmount) {
    const ageMax = 100;
    console.log('You will need ' + dayAmount * 365 * (ageMax - age) + ' oranges to last you until the ripe old age of ' + ageMax);
};

calculateSupply(25, 1);
calculateSupply(50, 1);
calculateSupply(67, 1);