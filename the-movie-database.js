const movieInfo = {
    title: 'Puff the Magic Dragon',
    duration: 30,
    stars: ['Puff', 'Jackie', 'Living Sneezes'],
};

const favoriteMovie = function (movieInfo) {
    console.log(movieInfo.title + ' lasts for ' + movieInfo.duration + ' minutes. Stars: ' + movieInfo.stars.join(', ') + '.');
};

favoriteMovie(movieInfo)

