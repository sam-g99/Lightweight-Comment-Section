const commentsAreaFragment = new DocumentFragment();

const comments = [];

const pageCommentArea = document.createElement('div');
pageCommentArea.setAttribute('class', 'page-comments');
pageCommentArea.setAttribute('id', 'pageCommentArea');

let amountOfComments = 0;
class Comment {
  author: string;
  content: string;
  isReply: boolean;
    
  constructor(author, content, isReply) {
    this.author = author;
    this.content = content;
    this.isReply = isReply;
    this.createElement();
  }

  createElement() {
    const id = `comment${amountOfComments}`;
    const comment = `<div><strong>${this.author}</strong></div><div id="${id}"></div><br>`;
    amountOfComments+=1;
    const commentFragment = document.createRange().createContextualFragment(comment);
    commentFragment.getElementById(id).textContent = this.content;
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
