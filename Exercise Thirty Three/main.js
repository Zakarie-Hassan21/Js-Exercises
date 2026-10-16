const header = document.querySelector('#header');

function changeContent(){
    header.textContent = ("I have changed the header inside the javascript.")
}

const text = document.querySelector('.text');

function changeElement(){
    text.innerHTML = ("Hey This Paragraph Comes from Inside My <strong>JavaScript.</strong>")
}