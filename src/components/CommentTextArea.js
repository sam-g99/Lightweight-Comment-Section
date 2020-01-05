import { ta } from '../settings';
import { Comment } from './PostedCommentsArea';

const createTextarea = () => {
  const charsLeftDisplay = (ta.maxLength) ? `<div id="charsLeftDisplay" " class="characters-left">${ta.maxLength}</div>` : '';

  return `
          <div class="comment-box-container">
              <textarea id="commentBox" maxlength="${ta.maxLength}" placeholder="${ta.placeholder}"></textarea>
              ${charsLeftDisplay}
          </div>
      `;
};

// Creating Elements
const commentBoxFragment = new DocumentFragment();

const createCommentButton = () => '<button id="commentButton"> Comment </button>';

const createCommentBoxArea = () => {
  const commentBoxArea = document.createElement('div');
  commentBoxArea.setAttribute('class', 'textarea-container');

  const textarea = createTextarea(ta.placeholder, ta.maxLength);
  const button = createCommentButton();

  const elements = [textarea, button];

  // Add comment box area elements
  elements.forEach((el) => {
    commentBoxArea.insertAdjacentHTML('beforeend', el);
  });


  commentBoxFragment.appendChild(commentBoxArea);
};

createCommentBoxArea();

// Actions
const postComment = (comments) => {
  const content = document.getElementById('commentBox').value;
  const comment = new Comment('Joe', content, false);
  // comments.push(comment);
  document.getElementById('pageCommentArea').appendChild(comment.createElement());
};

const commentBoxEvents = [{ type: 'click', fn: postComment }];
export {
  commentBoxFragment,
  commentBoxEvents,
};
