function Traducir() {
    const textoEs = document.querySelector('.esText');
    const textoEn = document.querySelector('.enText');
    const boton = document.querySelector('.translateBtn');

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

