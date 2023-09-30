let friendList = []

document.addEventListener("DOMContentLoaded", function() {
    console.log('hola soy una pagina activandose');
    getFriends()
});


const options = ['profile', 'links', 'friendSignature'];

let currentMenu = null;

function toggleMenu(idButton, idMenu) {
    const pokeballs = document.getElementsByClassName('pokeball');

    options.forEach((option, index) => {
        pokeball = pokeballs[index]
        if (option === idButton) {
            pokeball.classList.add('selected');
            pokeball.parentNode.classList.remove('faded');
        } else {
            pokeball.classList.remove('selected');
            pokeball.parentNode.classList.add('faded');
        }
    });
    openMenu(idMenu)
}


async function getFriends() {
    const response = await fetch('friends.json');
    friendList = await response.json();
    console.log(friendList);
}

function openMenu(idTab) {
    const cardBody = document.getElementById('card-body-change')
    switch (idTab) {
        case 'tab1':
            cardBody.style.backgroundImage = 'none';
            cardBody.style.backgroundColor = 'grey'
            break;
        case 'tab2':
            cardBody.style.backgroundImage = 'none'
            cardBody.style.backgroundColor = 'grey'
            break;
        case 'tab3':
            cardBody.style.backgroundImage = 'none'
            cardBody.style.backgroundColor = 'grey'
            break;
    }
    showContent(idTab)
}

function showContent(menuId) {
    const menu = document.getElementById(menuId);
    const cardBody = document.getElementById('card-body-change')

    if (menu === currentMenu) {
        // Si el mismo menú está abierto, ciérralo
        cardBody.style.backgroundImage = 'url(assets/images/bg.png)'
        menu.classList.remove("show");

        currentMenu = null;
    } else {
        // Cierra el menú actual si está abierto
        if (currentMenu) {
            currentMenu.classList.remove("show");

        }
        // Abre el menú seleccionado
        menu.classList.add("show");
        currentMenu = menu;
    }
}


function changeFirm(numberFirm) {
    const card = document.querySelector(".text-main");
    const image = card.querySelector(".img-on-top");
    // const title = card.querySelector(".card-title");
    // const text = card.querySelector(".card-text");
    // // Actualiza la imagen, título y texto con los datos del objeto
    image.src = friendList[numberFirm].avatar;
    // title.textContent = friendList[numberFirm].nombre;
    // text.textContent = friendList[numberFirm].dedicatoria;
}