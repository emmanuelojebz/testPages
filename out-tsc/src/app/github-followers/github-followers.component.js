import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from './github-followers.service';
import { Component } from '@angular/core';
import { combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';
var GithubFollowersComponent = /** @class */ (function () {
    function GithubFollowersComponent(route, service) {
        this.route = route;
        this.service = service;
    }
    GithubFollowersComponent.prototype.ngOnInit = function () {
        var _this = this;
        combineLatest([
            this.route.paramMap,
            this.route.queryParamMap
        ])
            .pipe(switchMap(function (combined) {
            var id = combined[0].get('id');
            var page = combined[1].get('page');
            return _this.service.getFollowers();
        }))
            .subscribe(function (response) {
            _this.followers = response;
        });
    };
    GithubFollowersComponent.decorators = [
        { type: Component, args: [{
                    selector: 'github-followers',
                    templateUrl: './github-followers.component.html',
                    styleUrls: ['./github-followers.component.css']
                },] },
    ];
    /** @nocollapse */
    GithubFollowersComponent.ctorParameters = function () { return [
        { type: ActivatedRoute },
        { type: GithubFollowersService }
    ]; };
    return GithubFollowersComponent;
}());
export { GithubFollowersComponent };
//# sourceMappingURL=github-followers.component.js.map