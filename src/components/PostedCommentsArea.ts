const commentsAreaFragment = new DocumentFragment();

const comments = [];

const pageCommentArea = document.createElement('div');
pageCommentArea.setAttribute('class', 'page-comments');
pageCommentArea.setAttribute('id', 'pageCommentArea');

class Comment {
  author: string;
  content: string;
  isReply: boolean;
  element: DocumentFragment;
    
  constructor(author, content, isReply) {
    this.author = author;
    this.content = content;
    this.isReply = isReply;
    this.createElement();
  }

  createElement() {
    const comment = `<div><strong>${this.author}</strong></div><div id="comment"></div><br>`;
    const commentFragment = document.createRange().createContextualFragment(comment);
    commentFragment.getElementById('comment').textContent = this.content;
    pageCommentArea.appendChild(commentFragment);
  }
}

// Example comments
new Comment('Bob', 'I hate pickles', false);
new Comment('Jane', 'I love tacos', false);

commentsAreaFragment.appendChild(pageCommentArea);

export {
  commentsAreaFragment,
  comments,
  Comment,
};
