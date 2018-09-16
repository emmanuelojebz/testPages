import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators/';
var GithubFollowersService = /** @class */ (function () {
    function GithubFollowersService(http) {
        this.http = http;
        this._url = 'https://api.github.com/users/mosh-hamedani/followers';
    }
    GithubFollowersService.prototype.getFollowers = function () {
        return this.http.get(this._url)
            .pipe(map(function (response) { return response.json(); }));
    };
    GithubFollowersService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    GithubFollowersService.ctorParameters = function () { return [
        { type: Http }
    ]; };
    return GithubFollowersService;
}());
export { GithubFollowersService };
//# sourceMappingURL=github-followers.service.js.map