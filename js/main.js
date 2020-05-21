const DOMStrings = {
    headerTitle: document.getElementById('header__title'),
    headerTitleText: document.querySelector('.header__title-text'),
    headerTitleImg: document.querySelector('.header__title')
}

// DOMStrings.headerTitle.addEventListener('mousemove', (e) => { 
//         const designation = ['UI/UX Designer', 'Web Developer', 'Graphic Designer'];
//         const index = Math.floor(Math.random() * designation.length);       
//         DOMStrings.headerTitleText.innerHTML = designation[index];       
// });

// DOMStrings.headerTitleImg.addEventListener('click', () => {
//     DOMStrings.headerTitleImg.style.backgroundImage = "url('./../img/web.jpg')";
//     // DOMStrings.headerTitleImg.style.color = '#442211';
// });

setInterval( () => {

    const designation = ['UI/UX Designer', 'Web Developer', 'Graphic Designer'];
    const designation1 = {
        deg1: {
            name: 'UI/UX Designer',
            img: '../img/web.jpg'
        }
    }
    const index = Math.floor(Math.random() * designation.length);       
    DOMStrings.headerTitleText.textContent = designation[index];

    if(DOMStrings.headerTitleText.textContent === 'Web Developer') {
         DOMStrings.headerTitleImg.style.backgroundImage = "url('./../img/web.jpg')";
    }
     else if(DOMStrings.headerTitleText.textContent === 'UI/UX Designer') {
        DOMStrings.headerTitleImg.style.backgroundImage = "url('./../img/uiuxphoto.png')";
    }
     else if(DOMStrings.headerTitleText.textContent === 'Graphic Designer') {
        DOMStrings.headerTitleImg.style.backgroundImage = "url('./../img/graphic.jpg')";
    }

}, 400);