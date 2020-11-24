"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.likeComponent = void 0;
var likeComponent = /** @class */ (function () {
    function likeComponent(_likeCount, _isLike) {
        this._likeCount = _likeCount;
        this._isLike = _isLike;
    }
    likeComponent.prototype.OnClick = function () {
        this._likeCount += (this._isLike) ? -1 : 1;
        this._isLike = !this._isLike;
    };
    Object.defineProperty(likeComponent.prototype, "LikeCount", {
        get: function () {
            return this._likeCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(likeComponent.prototype, "IsLike", {
        get: function () {
            return this._isLike;
        },
        enumerable: false,
        configurable: true
    });
    return likeComponent;
}());
exports.likeComponent = likeComponent;
