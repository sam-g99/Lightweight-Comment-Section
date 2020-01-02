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
        commentBoxArea.insertAdjacentHTML('beforeend', el.trim());
    }
    
    rootFragment.appendChild(commentBoxArea);
    console.log(rootFragment);
}

// Comment Logic
class Comment {
    constructor(author, content, isReply) {
        this.author = author;
        this.content = content;
        this.isReply = isReply;
    }
}

console.log(new Comment('Bob', 'I hate pickles', false));

// Render Comment Section
(function render() {
    createCommentBoxArea();
    commentRoot.appendChild(rootFragment);
})()


// Adding Events To Textarea
const commentBox = document.getElementById('commentBox');
const commentButton = document.getElementById('commentButton');

commentBox.addEventListener('focus', () => {
    console.log('Comment box focused.');
})

commentBox.addEventListener('blur', () => {
    console.log('Comment box blurred.');
})

commentButton.addEventListener('mouseup', () => {
    console.log('Button clicked.')
})

const charsLeft = (e) => {
    const textarea = e.target;
    const charsLeft =  ta.maxLength - textarea.value.length ;
    document.getElementById('charsLeftDisplay').textContent = charsLeft;
}

if(ta.maxLength){
    commentBox.addEventListener('keyup', charsLeft, false );
    commentBox.addEventListener('keydown', charsLeft, false );
}