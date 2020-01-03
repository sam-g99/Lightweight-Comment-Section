// Comment Logic
const commentAreaFragment = new DocumentFragment();

class Comment {
  constructor(author, content, isReply) {
    this.author = author;
    this.content = content;
    this.isReply = isReply;
  }

  createElement() {
    const comment = `<div><strong>${this.author}</strong></div><div id="comment"></div><br>`;
    const commentFragment = document.createRange().createContextualFragment(comment);
    commentFragment.getElementById('comment').textContent = this.content;
    return commentFragment;
  }
}

const comments = [];

comments.push(new Comment('Bob', 'I hate pickles', false));
comments.push(new Comment('Jane', 'I love tacos', false));


const pageCommentArea = document.createElement('div');
pageCommentArea.setAttribute('class', 'page-comments');
pageCommentArea.setAttribute('id', 'pageCommentArea');

comments.forEach((c) => {
  pageCommentArea.appendChild(c.createElement());
});

commentAreaFragment.appendChild(pageCommentArea);

export { commentAreaFragment, comments, Comment };
