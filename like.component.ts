export class likeComponent{
constructor(private _likeCount?:number,private _isLike?:boolean)
{}
OnClick(){
    this._likeCount+=(this._isLike)?-1:1;
    this._isLike=!this._isLike;

}
get LikeCount(){
    return this._likeCount;
}
get IsLike()
{
    return this._isLike;
}
}
