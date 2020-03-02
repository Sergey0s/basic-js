module.exports = function countCats(/* matrix */) {
    let cats = 0;
    const array = arguments[0];
    array.forEach((arr) => {
        arr.forEach((el) => {
            if (el === '^^') {
                cats++;
            }
        })
    });
    return cats;
};