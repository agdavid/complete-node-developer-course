module.exports = (userId, callback) => {
    let user;

    switch (userId) {
        case 1:
            user = "userOne found";
            break;
        case 2:
            user = "userTwo found";
            break;
        default:
            return "no user found";
    }

    return callback(user);
}