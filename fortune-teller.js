const tellFortune = function (job, location, partnername, children) {
    let fortune = 'You will be a ' + job + ' in ' + location + ', and married to ' + partnername + ' with ' + children + ' kids.';
    console.log(fortune);
};

tellFortune('baker', 'Groningen', 'Sandra', 'two');
tellFortune('professor', 'Amsterdam', 'Bram', 'no');
tellFortune('dentist', 'Maastricht', 'Peter', 'three');