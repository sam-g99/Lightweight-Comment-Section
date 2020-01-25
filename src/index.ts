/* eslint-disable import/no-unresolved */
import './main.css';

// eslint-disable-next-line import/named
import { ta } from './settings';

import { commentBoxFragment, commentBoxEvents } from './components/CommentTextArea';
import { commentsAreaFragment } from './components/PostedCommentsArea';

// Creating Elements
const fragment = new DocumentFragment();
const commentRoot = document.getElementById('commentRoot');

// Render Comment Section
(function render() {
  fragment.appendChild(commentBoxFragment);
  fragment.appendChild(commentsAreaFragment);
  commentRoot.appendChild(fragment);
}());

// Action Functions

// Adding Events To Textarea
const commentBox = document.getElementById('commentBox');
const commentButton = document.getElementById('commentButton');

commentBox.addEventListener('focus', () => {
  console.log('Comment box focused.');
});

commentBox.addEventListener('blur', () => {
  console.log('Comment box blurred.');
});

commentButton.addEventListener('mouseup', commentBoxEvents[0].fn, false);

// Show how many characters the user has left
const charsLeft = (e) => {
  const textarea = e.target;
  const charsLeftNum = ta.maxLength - textarea.value.length;
  document.getElementById('charsLeftDisplay').textContent = charsLeftNum.toString();
};

if (ta.maxLength) {
  commentBox.addEventListener('keydown', charsLeft, false);
  commentBox.addEventListener('keyup', charsLeft, false);
}
