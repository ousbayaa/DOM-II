// Your code goes here
//mouseover
const funLogo = document.querySelector('.logo-heading');
funLogo.addEventListener("mouseover", () => {
    funLogo.style.color = "dodgerblue";
});

//mouseenter
document.querySelectorAll('div h2, h4').forEach(el => {
    el.addEventListener('mouseenter', () => {
        el.style.background = 'dodgerblue';
        el.style.border = '5px dotted crimson';
    });
});

//mouseleave
document.querySelectorAll('div p').forEach(el => {
    el.addEventListener('mouseleave', () => {
        el.style.color = 'royalblue';
    });
});

// doubleclick
const changeImg = document.querySelector('div img');
changeImg.addEventListener("dblclick", () => {
  changeImg.src="https://images.unsplash.com/photo-1504321946642-8f661bf96ff0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
});

//resize
window.addEventListener("resize", () => {
    funLogo.style.display = "none";
  });

//copy
const copyText = document.getElementsByTagName('body')[0];
copyText.addEventListener('copy',(e) => {
    alert("don't copy me!");
    e.preventDefault();
});

//scroll
copyText.addEventListener('wheel',(e) => {
    copyText.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
});