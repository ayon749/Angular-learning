import {likeComponent}from './like.component';

let component=new likeComponent(10,true);
component.OnClick();
console.log(`LikeCount: ${component.LikeCount}, IsLiked: ${component.IsLike}`);

