"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(userResponse) {
        this.repos = [];
        this.login = userResponse.login;
        this.name = userResponse.bio;
        this.repoCount = userResponse.public_repos;
        this.followerCount = userResponse.followers;
    }
    return User;
}());
exports.User = User;
