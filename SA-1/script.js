// MOUSEOVER
document.querySelector("#github").addEventListener('mouseover', () => {
    let imagem1 = document.querySelector('#icon1');
    imagem1.src = "img/icons/github-aqua.svg";
    imagem1.nextElementSibling.innerHTML = '@Liuizn'
});

document.querySelector("#email").addEventListener('mouseover', () => {
    let imagem2 = document.querySelector('#icon2');
    imagem2.src = "img/icons/gmail-aqua.svg";
    imagem2.nextElementSibling.innerHTML = 'Luizgabrielsnogueira@gmail.com'
});

document.querySelector("#instagram").addEventListener('mouseover', () => {
    let imagem3 = document.querySelector('#icon3');
    imagem3.src = "img/icons/instagram-aqua.svg";
    imagem3.nextElementSibling.innerHTML = '@Liuizn'
});

document.querySelector("#linkedin").addEventListener('mouseover', () => {
    let imagem4 = document.querySelector('#icon4');
    imagem4.src = "img/icons/linkedin-aqua.svg";
    imagem4.nextElementSibling.innerHTML = 'Luiz Gabriel dos Santos Nogueira'
});

document.querySelector("#twitter").addEventListener('mouseover', () => {
    let imagem5 = document.querySelector('#icon5');
    imagem5.src = "img/icons/twitter-aqua.svg";
    imagem5.nextElementSibling.innerHTML = '@Liuizn'
});

// MOUSEOUT
document.querySelector("#github").addEventListener('mouseout', () => {
    let imagem1 = document.querySelector('#icon1');
    imagem1.src = "img/icons/github-white.svg";
    imagem1.nextElementSibling.innerHTML = ''
});

document.querySelector("#email").addEventListener('mouseout', () => {
    let imagem2 = document.querySelector('#icon2');
    imagem2.src = "img/icons/gmail-white.svg";
    imagem2.nextElementSibling.innerHTML = ''
});

document.querySelector("#instagram").addEventListener('mouseout', () => {
    let imagem3 = document.querySelector('#icon3');
    imagem3.src = "img/icons/instagram-white.svg";
    imagem3.nextElementSibling.innerHTML = ''
});

document.querySelector("#linkedin").addEventListener('mouseout', () => {
    let imagem4 = document.querySelector('#icon4');
    imagem4.src = "img/icons/linkedin-white.svg";
    imagem4.nextElementSibling.innerHTML = ''
});

document.querySelector("#twitter").addEventListener('mouseout', () => {
    let imagem5 = document.querySelector('#icon5');
    imagem5.src = "img/icons/twitter-white.svg";
    imagem5.nextElementSibling.innerHTML = ''
});


