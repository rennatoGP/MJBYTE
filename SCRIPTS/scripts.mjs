function scrollComments(direction) {
    const container = document.querySelector('.comments-container');
    const scrollAmount = 300; // Ajuste a quantidade de rolagem

    container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}
