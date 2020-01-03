import './main.css';

// eslint-disable-next-line import/named
import { ta } from './settings';

import { rootFragment } from './components/CommentTextArea';
import { commentAreaFragment, comments, Comment } from './components/PostedCommentsArea';


// Creating Elements
const fragment = new DocumentFragment();
const commentRoot = document.getElementById('commentRoot');

// Render Comment Section
(function render() {
  fragment.appendChild(rootFragment);
  fragment.appendChild(commentAreaFragment);
  commentRoot.appendChild(fragment);
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
