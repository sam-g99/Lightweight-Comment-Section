
import './main.css';

// eslint-disable-next-line import/named
import { ta } from './settings';

import { rootFragment } from './components/CommentTextArea';


// Creating Elements
const commentRoot = document.getElementById('commentRoot');

// Comment Logic
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

const createPageCommentsArea = () => {
  const pageCommentArea = document.createElement('div');
  pageCommentArea.setAttribute('class', 'page-comments');
  pageCommentArea.setAttribute('id', 'pageCommentArea');

  comments.forEach((c) => {
    pageCommentArea.appendChild(c.createElement());
  });

  rootFragment.appendChild(pageCommentArea);
};

// Render Comment Section
(function render() {
  createPageCommentsArea();
  commentRoot.appendChild(rootFragment);
}());

// Action Functions
const postComment = () => {
  const content = document.getElementById('commentBox').value;
  const comment = new Comment('Joe', content, false);
  comments.push(comment);
  document.getElementById('pageCommentArea').appendChild(comment.createElement());
};


// Adding Events To Textarea
const commentBox = document.getElementById('commentBox');
const commentButton = document.getElementById('commentButton');

commentBox.addEventListener('focus', () => {
  console.log('Comment box focused.');
});

commentBox.addEventListener('blur', () => {
  console.log('Comment box blurred.');
});

commentButton.addEventListener('mouseup', postComment, false);

// Show how many characters the user has left
const charsLeft = (e) => {
  const textarea = e.target;
  const charsLeftNum = ta.maxLength - textarea.value.length;
  document.getElementById('charsLeftDisplay').textContent = charsLeftNum;
};

if (ta.maxLength) {
  commentBox.addEventListener('keydown', charsLeft, false);
  commentBox.addEventListener('keyup', charsLeft, false);
}
