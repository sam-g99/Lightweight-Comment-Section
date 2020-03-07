/* eslint-disable import/no-unresolved */
import './main.css';
import './methods';

// eslint-disable-next-line import/named
import { settings } from './settings'; // just some default settings will rename it

import { commentBoxFragment, postComment } from './components/CommentTextArea';
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

// Action Functions after all the initial data is rendered

// Adding Events To Textarea
const commentBox = document.getElementById('commentBox');
const commentButton = document.getElementById('commentButton');

commentBox.addEventListener('focus', () => {
  console.log('Comment box focused.');
});

commentBox.addEventListener('blur', () => {
  console.log('Comment box blurred.');
});

// Post Button
commentButton.addEventListener('mouseup', postComment, false);

// Show how many characters the user has left
const charsLeft = (e) => {
  const textarea = e.target;
  const charsLeftNum = settings.maxLength - textarea.value.length;
  document.getElementById('charsLeftDisplay').textContent = charsLeftNum.toString();
};

// Events if max length is activated
if (settings.maxLength) {
  commentBox.addEventListener('keydown', charsLeft, false);
  commentBox.addEventListener('keyup', charsLeft, false);
}
