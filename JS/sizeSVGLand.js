let tema = document.documentElement.getAttribute('data-theme');

function observeThemeChanges() {
    const observer = new MutationObserver((mutationsList) => {
        mutationsList.forEach(mutation => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
                tema = document.documentElement.getAttribute('data-theme');
                console.log('Tema cambiado:', tema); 
                updateImagenes();
            }
        });
    });

    observer.observe(document.documentElement, { attributes: true });
}
observeThemeChanges();

function updateImagenes() {
    let svgs = document.querySelectorAll('.svg--deco-Land');
    svgs.forEach(svg => {
        let randomScale = Math.floor(Math.random() * 3) + 2;

        let randomColor;
        if (tema === 'obscuro') {
            randomColor = Math.random() > 0.5 ? 'e92027' : 'fff';
        } else {
            randomColor = Math.random() > 0.5 ? 'e92027' : '201e1f';
        }

        // Aplica los estilos al SVG
        svg.style.width = `${randomScale}%`;
        svg.style.fill = `#${randomColor}`;
    });
}

updateImagenes();
setInterval(updateImagenes, 4000);
