let menus = document.querySelectorAll('.item--menu--navLand');
let secciones = document.querySelectorAll('.custom--containers');
limpiado(0);
seleccion(0);

menus.forEach((mn, index) => {
    mn.addEventListener('click', () => {
        limpiado(index);
        seleccion(index);
        console.log('Click: ', index)
    });
});

function limpiado(pos){
    secciones.forEach(sc => {
        sc.classList.add('oculSpan');
    });
    secciones[pos].classList.remove('oculSpan');
}

function seleccion(pos){
    menus.forEach(mn => {
        mn.classList.remove('btn-sec');
    });
    menus[pos].classList.add('btn-sec');
}