"use strict";

let ta = {
    placeholder: 'Type here to comment...',
    maxLength: 500,
}

// Creating Elements
const commentRoot = document.getElementById('commentRoot');
let rootFragment = new DocumentFragment();

const createTextarea = () => {
    let charsLeftDisplay = (ta.maxLength) ? `<div id="charsLeftDisplay" " class="characters-left">${ta.maxLength}</div>` : '';
    
    return `
        <div class="comment-box-container">
            <textarea id="commentBox" maxlength="${ta.maxLength}" placeholder="${ta.placeholder}"></textarea>
            ${charsLeftDisplay}
        </div>
    `;
}

const createCommentButton = () => {
    return `<button id="commentButton"> Comment </button>`;
}

const createCommentBoxArea = () => {
    const commentBoxArea = document.createElement('div');
    commentBoxArea.setAttribute('class', 'textarea-container');

    const textarea = createTextarea(ta.placeholder, ta.maxLength);
    const button = createCommentButton();

    const elements = [textarea, button]

    // Add comment box area elements
    for (let el of elements) {
        commentBoxArea.insertAdjacentHTML('beforeend', el);
    }
    
    rootFragment.appendChild(commentBoxArea);
}


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

    for(let c of comments){
        pageCommentArea.appendChild(c.createElement());
    }

    rootFragment.appendChild(pageCommentArea);
}

// Render Comment Section
(function render() {
    createCommentBoxArea();
    createPageCommentsArea();
    commentRoot.appendChild(rootFragment);
})()

// Action Functions
const postComment = (e) => {
    const content = document.getElementById('commentBox').value;
    const comment = new Comment('Joe', content, false);
    comments.push(comment);
    document.getElementById('pageCommentArea').appendChild(comment.createElement());
}


// Adding Events To Textarea
const commentBox = document.getElementById('commentBox');
const commentButton = document.getElementById('commentButton');

commentBox.addEventListener('focus', () => {
    console.log('Comment box focused.');
})

commentBox.addEventListener('blur', () => {
    console.log('Comment box blurred.');
})

commentButton.addEventListener('mouseup', postComment, false);

// Show how many characters the user has left
const charsLeft = (e) => {
    const textarea = e.target;
    const charsLeft =  ta.maxLength - textarea.value.length ;
    document.getElementById('charsLeftDisplay').textContent = charsLeft;
}

if(ta.maxLength){
    commentBox.addEventListener('keydown', charsLeft, false );
    commentBox.addEventListener('keyup', charsLeft, false );
}