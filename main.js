"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_component_1 = require("./like.component");
var component = new like_component_1.likeComponent(10, true);
component.OnClick();
console.log("LikeCount: " + component.LikeCount + ", IsLiked: " + component.IsLike);
