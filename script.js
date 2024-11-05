function Traducir() {
    const textoEs = document.querySelector('.esText');
    const textoEn = document.querySelector('.enText');
    const boton = document.querySelector('.translateBtn');

    if (textoEs.style.display === 'none') {
        textoEs.style.display = 'block';
        textoEn.style.display = 'none';
        boton.innerText = 'Translate to English';
    } else {
        textoEs.style.display = 'none';
        textoEn.style.display = 'block';
        boton.innerText = 'Traducir a Español';
    }
}

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#menu");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
    nav.classList.remove("hidden");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
    nav.classList.add("hidden");
})