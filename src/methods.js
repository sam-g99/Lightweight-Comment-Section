// Insert comment text into comment element without it being processed as html
Element.prototype.insertCommentContent = function (content) {
  // This process will get more complicated later (markup and emojis)
  this.textContent = content;
};
