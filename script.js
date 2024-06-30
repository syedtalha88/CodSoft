let btn = document.getElementById('btn');
let menu= document.getElementById('menu-list');
let clos= document.getElementById('close');
let btnClose= document.getElementById('close-btn');
btn.addEventListener('click', () => {
menu.classList.add('active');
clos.classList.add('closable');

});
btnClose.addEventListener('click', () => {
    menu.classList.remove('active');
    clos.classList.remove('closable');
});