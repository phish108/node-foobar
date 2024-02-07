
module.exports  = function hello(target = "world") {
    return `hello ${target}`;
};

function calculateDayBetweenDates(date1, date2) {
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

