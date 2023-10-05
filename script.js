let friendList = []

document.addEventListener("DOMContentLoaded", function() {
    openMenu('tab0')
    getFriends()

});


const options = ['profile', 'links', 'friendSignature'];

let currentMenu = null;
let currentId = null

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
            cardBody.style.backgroundImage = "url('assets/images/bgtab.jpg')"
            break;
    }
    showContent(idTab)
}

function showContent(menuId) {
    const menu = document.getElementById(menuId);
    const mainMenu = document.getElementById('tab0')
    const cardBody = document.getElementById('card-body-change')

    if (menu === currentMenu) {
        // Si el mismo menú está abierto, ciérralo
        cardBody.style.backgroundImage = 'url(assets/images/bg.png)'
        menu.classList.remove("show");
        mainMenu.classList.add("show")

        currentMenu = null;
    } else {
        // Cierra el menú actual si está abierto
        if (currentMenu) {
            mainMenu.classList.remove("show")
            currentMenu.classList.remove("show");

        }
        // Abre el menú seleccionado
        mainMenu.classList.remove("show")
        menu.classList.add("show");
        currentMenu = menu;
    }
}


function changeFirm(numberFirm) {
    const card = document.querySelector(".text-main");
    const image = card.querySelector(".img-on-top");
    const title = card.querySelector(".name");
    const text = card.querySelector(".dedicatoria");
    // // Actualiza la imagen, título y texto con los datos del objeto
    if (numberFirm != currentId) {
        image.classList.remove('fade-in')
        title.classList.remove('fade-in')
        text.classList.remove('fade-in')
        setTimeout(() => {
            image.src = `assets/images/profile/${numberFirm}.png`;
            title.textContent = friendList[numberFirm].nombre;
            text.textContent = friendList[numberFirm].dedicatoria;
            image.classList.add('fade-in')
            title.classList.add('fade-in')
            text.classList.add('fade-in')
        }, 500);

    }
    currentId = numberFirm


}