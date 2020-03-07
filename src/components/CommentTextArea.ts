/* eslint-disable import/no-unresolved */
import { settings } from '../settings';
import { Comment } from './PostedCommentsArea';

const createTextarea = () => {
  // Don't display max length if no max length is set
  const charsLeftDisplay = (settings.maxLength) ? `<div id="charsLeftDisplay" " class="characters-left">${settings.maxLength}</div>` : '';

  return `
          <div class="comment-box-container">
              <textarea id="commentBox" maxlength="${settings.maxLength}" placeholder="${settings.placeholder}"></textarea>
              ${charsLeftDisplay}
          </div>
      `;
};

let commentBox;
let charsLeftDisplay;

// Creating Elements
const commentBoxFragment = new DocumentFragment();

const createCommentButton = () => '<button id="commentButton"> Comment </button>';

const createCommentBoxArea = () => {
  const commentBoxArea = document.createElement('div');
  commentBoxArea.setAttribute('class', 'textarea-container');
  const textarea = createTextarea();
  const button = createCommentButton();

  const elements = [textarea, button];

  // Add comment box area elements
  elements.forEach((el) => {
    commentBoxArea.insertAdjacentHTML('beforeend', el);
  });

  commentBox = commentBoxArea.querySelector('#commentBox');
  if (settings.maxLength) {
    charsLeftDisplay = commentBoxArea.querySelector('#charsLeftDisplay');
  }
  commentBoxFragment.appendChild(commentBoxArea);
};

createCommentBoxArea();


// eslint-disable-next-line no-param-reassign
const clearTextAreaValue = (t) => { t.value = ''; };

// Actions
const postComment = () => {
  const content = commentBox.value;

  if (content.length === 0) return;

  clearTextAreaValue(commentBox);

  if (charsLeftDisplay) {
    charsLeftDisplay.textContent = settings.maxLength;
  }

  // eslint-disable-next-line no-new
  new Comment('Joe', content);
};


export {
  commentBoxFragment,
  postComment,
};
