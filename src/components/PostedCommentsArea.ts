import { stringToFragment } from '../helpers';

// Fragment Container
const commentsAreaFragment = new DocumentFragment();

// Main Container
const pageCommentArea = document.createElement('div');
pageCommentArea.setAttribute('class', 'page-comments');
pageCommentArea.setAttribute('id', 'pageCommentArea');





const comments = [];



const replyArea = (id) => stringToFragment(`<div class="replies" id="replies-${id}"></div>`);
const replyDiv = (content) => {
  const element = stringToFragment(`<div class="reply"></div>`).querySelector('.reply');
  element.insertCommentContent(content);
  return element;
}




// Keep track and give unique ids (just for now)
let amountOfComments = 0;

class Comment {
  // Loosely trying to please typescript (not too focused on TS rn)
  author: string;
  content: string;
  containerId: string;
  id: Number;
  replies: Array<Object>;
    
  constructor(author, content, replies = []) {
    this.author = author;
    this.content = content;
    this.replies = replies;
    this.createCommentElement();
  }

  // Adding comments to the dom, just some testing nothings final.
  createCommentElement() {
    const id = `comment${amountOfComments}`;
    const containerId = `container${amountOfComments}`;
    this.containerId = containerId;
    this.id = amountOfComments;

    const comment = /*html*/`
    <div class="comment-container" id="${containerId}">
      <div class="comment-author">
        <strong>${this.author}</strong>
      </div>
      <div id="${id}" class="comment-text"></div>
      <button id="reply-${id}">Reply</button>
      <div id="replies-${amountOfComments}"></div>
    </div>`;

    amountOfComments+=1;
    const commentFragment = stringToFragment(comment);
    console.log(commentFragment);
    commentFragment.getElementById(id).textContent = this.content;
    commentFragment.getElementById(`reply-${id}`).addEventListener('click', () => this.addReply());
    
    pageCommentArea.appendChild(commentFragment);
  }

  // Just testing adding a singular reply I know it's adding multiple replies containers 
  addReply() {
    this.replies.push('reply'); // Testing saving data in an array of objects (i know its a string rn XD)
    const reply = replyDiv('This is a reply. <h1>Hello world</h1>'); 
    console.log(reply);
    document.getElementById(`replies-${this.id}`).append(reply);
  }
}


// Example comments (auto pushes to dom and runs the necessary functions)
new Comment('Bob', 'I hate pickles');
new Comment('Jane', 'I love tacos');
new Comment('Innovati', 'I love CSS');
commentsAreaFragment.appendChild(pageCommentArea); // fragments ready to reach the dom!

// Exporting the functions, will follow a more comprehensive structure when refactored

export {
  commentsAreaFragment,
  comments,
  Comment,
};
