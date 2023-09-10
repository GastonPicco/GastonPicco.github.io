const logo = document.getElementById('logo'); // Obtén el elemento con el ID 'logo'
const logoImg = document.getElementById('logoImg')
const logoTxt = document.getElementById('logoTxt')
const mainContent = document.getElementById('main-content')
const mainBar = document.getElementById('main-bar')
const contenedores = document.querySelectorAll('.btn');
const bigBtns = document.querySelectorAll('.bigbtn')
const selector = document.querySelector('.selector')
// Botones Grandes
const bignosotros = document.getElementById('bignosotros')
const bigasi = document.getElementById('bigasi')
const bigmarcas = document.getElementById('bigmarcas')
const bigcontactanos = document.getElementById('bigcontactanos')
const bigunete = document.getElementById('bigunete')
const bignovedades = document.getElementById('bignovedades')
// Botones de barra
const nosotros = document.getElementById('nosotros')
const asi = document.getElementById('asi')
const marcas = document.getElementById('marcas')
const contactanos = document.getElementById('contactanos')
const unete = document.getElementById('unete')
const novedades = document.getElementById('novedades')
//
let selection = false;
logo.addEventListener('click', () => {
    logoClickEvent();
});
//botones grandes
bignosotros.addEventListener('click',() => {
    clickEvent();
    nosotros.classList.add('active');
})
bigasi.addEventListener('click',() =>{
    clickEvent();
    asi.classList.add('active');
})
bigmarcas.addEventListener('click',() =>{
    clickEvent();
    marcas.classList.add('active');
})
bigcontactanos.addEventListener('click',() =>{
    clickEvent();
    contactanos.classList.add('active');
})
bigunete.addEventListener('click',() =>{
    clickEvent();
    unete.classList.add('active');
})
bignovedades.addEventListener('click',() =>{
    clickEvent();
    novedades.classList.add('active');
})
//botones barra
nosotros.addEventListener('click',() => {
    cambiarBoton(nosotros);
})
asi.addEventListener('click',() =>{
    cambiarBoton(asi);
})
marcas.addEventListener('click',() =>{
    cambiarBoton(marcas);
})
contactanos.addEventListener('click',() =>{
    cambiarBoton(contactanos);
})
unete.addEventListener('click',() =>{
    cambiarBoton(unete);
})
novedades.addEventListener('click',() =>{
    cambiarBoton(novedades);
})



// FUNCIONES

function cambiarBoton(boton){
    nosotros.classList.remove('active');
    asi.classList.remove('active');
    marcas.classList.remove('active')
    contactanos.classList.remove('active')
    unete.classList.remove('active')
    novedades.classList.remove('active')

    boton.classList.add('active')
}

function mostrarBigBtn(index) {
    setTimeout(() => {
        bigBtns[index].classList.toggle('show');
    }, index * 18); // 500ms de retraso entre cada contenedor (ajustable)
}
function mostrarContenedor(index) {
    setTimeout(() => {
        contenedores[index].classList.toggle('show');
    }, index * 100); // 500ms de retraso entre cada contenedor (ajustable)
}
function clickEvent(){
    if(selection == false){
        mainContent.classList.toggle('notclicked');
        selector.classList.toggle('clicked');
        mainBar.classList.toggle('notclicked');
        for (let i = 0; i < bigBtns.length; i++) {
         mostrarBigBtn(i);
        }
     for (let i = 0; i < contenedores.length; i++) {
         mostrarContenedor(i);
        }
     selection = true;
     console.log(selection)
    }
}

function logoClickEvent(){
    console.log("click")
    logo.classList.toggle('clicked'); // Agrega o quita la clase 'clicked' al hacer clic
    logoImg.classList.toggle('clicked');
    logoTxt.classList.toggle('clicked');
    selector.classList.toggle('clicked');
    

    if(selection == false){
        for (let i = 0; i < bigBtns.length; i++) {
            mostrarBigBtn(i);
        }
    }
    if(selection == true){
        mainContent.classList.toggle('notclicked');
        for (let i = 0; i < contenedores.length; i++) {
            mostrarContenedor(i);
        }
    }
}