module.exports = function createDreamTeam(members) {
    let secretName = [];
    if (Array.isArray(members)) {
        members.forEach(el => {
            if (typeof el === "string") {
                secretName.push(el.toUpperCase().split(' ').join('').slice(0, 1))
            }
        });
        return secretName.sort().join('');
    } else {
        return false
    }
};
