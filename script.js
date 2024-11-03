function traducir() {
    const textoEs = document.querySelector('.texto-es');
    const textoEn = document.querySelector('.texto-en');
    const boton = document.querySelector('.translate-btn');

    if (textoEs.style.display === 'none') {
        textoEs.style.display = 'block';
        textoEn.style.display = 'none';
        boton.innerText = 'Traducir a Inglés';
    } else {
        textoEs.style.display = 'none';
        textoEn.style.display = 'block';
        boton.innerText = 'Traducir a Español';
    }
}

