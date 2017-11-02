function display(mood)
{
    var obj = {
        sun: './img/sun.jpg',
        rain: './img/rain.jpg',
        snow: './img/snow.jpg'
    };

    return obj[mood];
}

module.exports = {
    display
};
