module.exports = (userId) => {
    switch (userId) {
        case 1:
            return "userOne found";
            break;
        case 2:
            return "userTwo found";
            break;
        default:
            return "no user found";
    }
}