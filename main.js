const logo = document.getElementById('logo'); // Obtén el elemento con el ID 'logo'
const logoImg = document.getElementById('logoImg')
const logoTxt = document.getElementById('logoTxt')
const mainContent = document.querySelectorAll('.main-content')
const mainBar = document.getElementById('main-bar')
const botones = document.querySelectorAll('.btn');
const selector = document.querySelector('.selector')
const controlBtn = document.getElementById('control-btn')
// Botones de barra
const nosotros = document.getElementById('nosotros')
const asi = document.getElementById('asi')
const marcas = document.getElementById('marcas')
const contactanos = document.getElementById('contactanos')
const unete = document.getElementById('unete')
const novedades = document.getElementById('novedades')
let firstClick = false;
//
let selection = true;

logo.addEventListener('click', () => {
    logoClickEvent();
});

nosotros.addEventListener('click',() => {
    btnID = 0;
    cambiarBoton(nosotros);
})
asi.addEventListener('click',() =>{
    btnID = 1;
    cambiarBoton(asi);
})
marcas.addEventListener('click',() =>{
    btnID = 2;
    cambiarBoton(marcas);
})
contactanos.addEventListener('click',() =>{
    btnID = 3;
    cambiarBoton(contactanos);
})
unete.addEventListener('click',() =>{
    btnID = 4;
    cambiarBoton(unete);
})
novedades.addEventListener('click',() =>{
    btnID = 5;
    cambiarBoton(novedades);
})


// FUNCIONES
// Selecciona un boton
function cambiarBoton(boton){
    nosotros.classList.remove('active');
    asi.classList.remove('active');
    marcas.classList.remove('active')
    contactanos.classList.remove('active')
    unete.classList.remove('active')
    novedades.classList.remove('active') 
    boton.classList.add('active')

    ActualizarContenedor(btnID)
}

/*function mostrarBigBtn(index) {
    setTimeout(() => {
        bigBtns[index].classList.toggle('show');
    }, index * 18); // 500ms de retraso entre cada contenedor (ajustable)
}*/
function mostrarBotones(index) {
    setTimeout(() => {
        botones[index].classList.toggle('show');
    }, index * 100);
    mainBar.classList.toggle('notclicked')
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
        btnID = 0;
        cambiarBoton(nosotros);
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