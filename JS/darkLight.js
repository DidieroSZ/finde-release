let themes = document.querySelectorAll('.item--theme');
let btn  = document.getElementById('btn--theme');
let con = 0;

btn.addEventListener('click', () => {
    
    if (con > 1) {
        con = 0;
    }
    con = con + 1;
    console.log('click', con);
    
    if (con === 0) {
        limpiado(0);
        document.documentElement.setAttribute("data-theme", "luz");
    }
    if (con === 2) {
        limpiado(0);
        document.documentElement.setAttribute("data-theme", "luz");
    }
    if (con === 1) {
        limpiado(1);
        document.documentElement.setAttribute("data-theme", "obscuro");
    }
});

function limpiado(pos){
    themes.forEach(tema => {
        tema.classList.add('oculSpan');
    });
    themes[pos].classList.remove('oculSpan');
}