    // Agregar interactividad para mostrar/ocultar descripciones
    document.querySelectorAll('.movie h3').forEach(title => {
        title.addEventListener('click', () => {
            const description = title.nextElementSibling.nextElementSibling;
            description.style.display = description.style.display === 'block' ? 'none' : 'block';
        });
    });