var like = document.getElementById('like');
var like_btn = document.getElementById('like-btn');
var dislike = document.getElementById('dislike');
var dislike_btn = document.getElementById('dislike-btn');
var comment = document.getElementById('comment');
var comment_btn = document.getElementById('comment-btn');

like.onmouseout = function () {
   like_btn.src = 'images/thumb-up-outline.png';
};
like.onmouseover = function () {
   like_btn.src = 'images/thumb-up.png';
};
dislike.onmouseout = function () {
   dislike_btn.src = 'images/thumb-down-outline.png';
};
dislike.onmouseover = function () {
   dislike_btn.src = 'images/thumb-down.png';
};
comment.onmouseout = function () {
   comment_btn.src = 'images/comment-text-outline.png';
};
comment.onmouseover = function () {
   comment_btn.src = 'images/comment-text.png';
};