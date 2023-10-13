const logo = document.getElementById('logo'); // Obtén el elemento con el ID 'logo'
const logoImg = document.getElementById('logoImg')
const logoTxt = document.getElementById('logoTxt')
const mainContent = document.querySelectorAll('.main-content')
const mainBar = document.getElementById('main-bar')
const botones = document.querySelectorAll('.btn');
const botonesMovil = document.querySelectorAll('.btn-section-selector')
const selector = document.querySelector('.selector')
const controlBtn = document.getElementById('control-btn')
const menu = document.getElementById('menu')
// Botones de barra
const nosotros = document.getElementById('nosotros')
const asi = document.getElementById('asi')
const marcas = document.getElementById('marcas')
const contactanos = document.getElementById('contactanos')
const unete = document.getElementById('unete')
const novedades = document.getElementById('novedades')

let firstClick = false;
let btnID = 0;
let selection = true;
let botonInterct = false;

logo.addEventListener('click', () => {
    logoClickEvent();
});

controlBtn.addEventListener('click', () => {
    for (let i = 0; i < botones.length; i++) {
        mostrarBotonesMovil(i);
    }
    menu.classList.add('show');
    console.log("menu")
});

botonesMovil.forEach((botonesMov, indice) => {
    botonesMov.addEventListener('click',() => {
        btnID = (indice)
        console.log(indice)
        cambiarBoton(indice)
        botonInterct = true;
    })
});

botones.forEach((btn, indice) => {
    btn.addEventListener('click',() => {
        btnID = (indice)
        console.log(indice)
        cambiarBoton(indice)
    })
});

menu.addEventListener('click', () => {
    if(botonInterct == false){
        for (let i = 0; i < botones.length; i++) {
            mostrarBotonesMovil(i);
        }
        setTimeout(function() {
            menu.classList.remove('show');
        }, 500);
        console.log("fondo clickeado");
    }
    else{
        botonInterct = false;
    }
});

// FUNCIONES

function cambiarBoton(boton){
    botones.forEach((btn, indice) => {
        btn.classList.remove("active");
        botones[boton].classList.add("active")
        ActualizarContenedor(boton)
    });
    botonesMovil.forEach((btnMov, indice) => {
        btnMov.classList.remove("active");
        botonesMovil[boton].classList.add("active")
        ActualizarContenedor(boton)
    });

}

function mostrarBotones(index) {
    setTimeout(() => {
        botones[index].classList.toggle('show');
    }, index * 100);
    mainBar.classList.toggle('notclicked')
}
function mostrarBotonesMovil(index) {
    setTimeout(() => {
        botonesMovil[index].classList.toggle('hidden');
    }, index * 50);
}

function logoClickEvent(){


    logo.classList.toggle('clicked'); // Agrega o quita la clase 'clicked' al hacer clic
    logoTxt.classList.toggle('clicked');
    mainBar.classList.toggle('notclicked')
    controlBtn.classList.toggle('clicked')
    for (let i = 0; i < botones.length; i++) {
        mostrarBotones(i);
    }
    if(logo.className.match("clicked") && firstClick==false){
        firstClick = true;
        console.log("clickeado");
        cambiarBoton(0);
    }
    else if(logo.className.match("clicked") && firstClick==true){
        ActualizarContenedor(btnID);
    }
    else{
        for (let i = 0; i < mainContent.length; i++) {
            mainContent[i].classList.add('notclicked')
        }
    }
}

function ActualizarContenedor(id){
    
    for (let i = 0; i < mainContent.length; i++) {
        mainContent[i].classList.add('notclicked')
        mainContent[i].classList.remove('left')
        mainContent[i].classList.remove('right')
    }
    for (let i = 0; i < id; i++){
        mainContent[i].classList.add('left')
    }
    for (let i = id+1;i < mainContent.length; i++){
        mainContent[i].classList.add('right')
    }
    mainContent[id].classList.remove('notclicked')
    mainContent[id].classList.remove('left')
    mainContent[id].classList.remove('right')
    
}