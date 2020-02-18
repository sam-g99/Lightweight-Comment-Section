// Each one starts out as a fragment until it's ready to reach the real dom with the data
const commentsAreaFragment = new DocumentFragment();

const comments = [];


// Considering some repeated functions and element building
const stringToFragment = (html) => document.createRange().createContextualFragment(html);
const stringToHtml = (html) => new DOMParser().parseFromString(html, 'text/html');

const replyArea = (id) => stringToFragment(`<div class="replies" id="replies-${id}"></div>`);
const replyDiv = (content) => stringToHtml(`<div class="reply">${content}</div>`);


// Starting the page comment element (just for now)
const pageCommentArea = document.createElement('div');
pageCommentArea.setAttribute('class', 'page-comments');
pageCommentArea.setAttribute('id', 'pageCommentArea');

// Keep track and give unique ids (just for now)
let amountOfComments = 0;

class Comment {
  // Loosely trying to please typescript (not too focused on TS rn)
  author: string;
  content: string;
  containerId: string;
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
    const comment = `<div class="comment-container" id="${containerId}"><div class="comment-author"><strong>${this.author}</strong></div><div id="${id}" class="comment-text"></div><br><button id="reply-${id}">Reply</button></div>`;
    amountOfComments+=1;
    const commentFragment = stringToFragment(comment);
    commentFragment.getElementById(id).textContent = this.content;
    commentFragment.getElementById(`reply-${id}`).addEventListener('click', () => this.addReply());
    pageCommentArea.appendChild(commentFragment);
  }

  // Just testing adding a singular reply I know it's adding multiple replies containers 
  addReply() {
    this.replies.push('reply'); // Testing saving data in an array of objects (i know its a string rn XD)
    const replyContainer = replyArea(55);
    const reply = replyDiv('This is a reply.'); 
    replyContainer.getElementById('replies-55').append(reply.body.childNodes[0]);
    document.getElementById(this.containerId).append(replyContainer);
    console.log(this);
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
