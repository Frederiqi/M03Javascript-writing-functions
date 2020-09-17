const calculateDogAge = function (pupAge, conversionrate) {
    let age = pupAge * conversionrate;
    console.log('Your doggie is ' + age + ' years old in dog years!');
};

calculateDogAge(5, 7);
calculateDogAge(1, 3);
calculateDogAge(10, 10);
