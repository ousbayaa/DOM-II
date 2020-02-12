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
