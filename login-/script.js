const paragraph = document.querySelector('p');
const fullNameInput = document.querySelector('input[type="text"]');
const btn = document.querySelector('.btn');
const answer = document.querySelector('#answer');  

btn.addEventListener('click', () => {
    const fullName = fullNameInput.value;
    const createP = document.createElement('h2');
    createP.innerHTML = ` this is your full name: <span class="fullname">${fullName}</span>`;
    answer.appendChild(createP);
});
const text = paragraph.textContent;
paragraph.textContent = '';

let i = 0;
let j = text.length;

function typeEffect() {
    if(i < text.length) {
        paragraph.textContent += text[i];
        i++;
        setTimeout(typeEffect, 100);
    }
    else{
        setTimeout(deleteEffect, 1000)
    }
}

function deleteEffect(){
    if(j >= 0){
        paragraph.textContent = text.substring(0, j);
        j--;
        setTimeout(deleteEffect, 100);
    }
    else{
        i = 0;
        j = text.length;
        setTimeout(typeEffect, 1000)
    }
}

typeEffect()
